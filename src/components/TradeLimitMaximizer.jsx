import React, { useState, useMemo } from 'react';
import { ChartLineUp, Warning, Calculator } from '@phosphor-icons/react';
import { tradeLimits, initialQueue } from '../data/mockData';

const accountTypes = Object.keys(tradeLimits);

function splitTrade(proposed, limit) {
    if (proposed <= 0 || limit <= 0) return [];
    const numBatches = Math.ceil(proposed / limit);
    const batches = [];
    let remaining = proposed;
    for (let i = 1; i <= numBatches; i++) {
        const batchAmount = Math.min(remaining, limit);
        batches.push({
            batchNum: i,
            amount: batchAmount,
            utilization: (batchAmount / limit) * 100,
        });
        remaining -= batchAmount;
    }
    return batches;
}

function optimizeQueue(queue, limit) {
    if (limit <= 0) return [];
    const windows = [];
    let currentWindow = { trades: [], total: 0 };

    for (const trade of queue) {
        if (currentWindow.total + trade.amount <= limit) {
            currentWindow.trades.push(trade);
            currentWindow.total += trade.amount;
        } else {
            if (currentWindow.trades.length > 0) {
                windows.push(currentWindow);
            }
            currentWindow = { trades: [trade], total: trade.amount };
        }
    }
    if (currentWindow.trades.length > 0) {
        windows.push(currentWindow);
    }
    return windows;
}

const TradeLimitMaximizer = () => {
    const [accountType, setAccountType] = useState('standard');
    const [proposedTrade, setProposedTrade] = useState(50000);

    const currentLimit = tradeLimits[accountType];
    const limit = currentLimit.limit;

    const safeTrade = Math.max(0, proposedTrade || 0);

    const batches = useMemo(() => splitTrade(safeTrade, limit), [safeTrade, limit]);
    const queueWindows = useMemo(() => optimizeQueue(initialQueue, limit), [limit]);

    const totalCleared = queueWindows.reduce((sum, w) => sum + w.total, 0);
    const avgUtilization =
        queueWindows.length > 0
            ? queueWindows.reduce((sum, w) => sum + (w.total / limit) * 100, 0) / queueWindows.length
            : 0;

    const selectStyle = {
        width: '100%',
        backgroundColor: 'var(--bg-black)',
        border: '1px solid var(--border-dark)',
        color: 'var(--text-white)',
        fontSize: '1rem',
        fontWeight: '800',
        fontFamily: 'Syne, sans-serif',
        padding: '14px 16px',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
        cursor: 'pointer',
    };

    return (
        <section className="container">
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>
                        Payload <br /> <span style={{ opacity: 0.4 }}>Maximizer</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto' }}>
                        Ensure every transaction reaches peak approval capacity to maximize operational throughput and reduce overhead.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'var(--border-dark)', border: '1px solid var(--border-dark)' }}>
                    {/* LEFT PANEL */}
                    <div className="card" style={{ padding: '60px', borderRadius: '0', border: 'none', backgroundColor: 'var(--bg-black)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                            <Calculator size={24} color="#fff" />
                            <h3 style={{ fontSize: '0.8rem' }}>INPUT_PARAMETERS</h3>
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '12px' }}>ACCOUNT_TYPE</div>
                            <select value={accountType} onChange={(e) => setAccountType(e.target.value)} style={selectStyle}>
                                {accountTypes.map((key) => (
                                    <option key={key} value={key} style={{ backgroundColor: '#0a0a0a' }}>
                                        {tradeLimits[key].label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '12px' }}>PROPOSED_MAGNITUDE</div>
                            <input
                                type="number"
                                value={proposedTrade}
                                onChange={(e) => setProposedTrade(Number(e.target.value) || 0)}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '2px solid #222',
                                    color: 'var(--text-white)',
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    fontFamily: 'Syne',
                                    outline: 'none',
                                    paddingBottom: '12px',
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', border: '1px solid var(--border-dark)', fontSize: '0.8rem' }}>
                            <Warning size={20} color="#555" />
                            <span>PROTOCOL_LIMIT: {limit.toLocaleString()} USD</span>
                        </div>

                        <div style={{ marginTop: '32px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '16px' }}>PENDING_QUEUE ({initialQueue.length})</div>
                            {initialQueue.map((t) => (
                                <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-dark)', fontSize: '0.8rem' }}>
                                    <span style={{ color: 'var(--text-gray)' }}>#{t.id} &nbsp; {t.from} → {t.to}</span>
                                    <span style={{ fontWeight: '700', color: 'var(--text-white)' }}>{t.amount.toLocaleString()} {t.currency}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="card" style={{ padding: '60px', borderRadius: '0', border: 'none', backgroundColor: 'var(--bg-card)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                            <ChartLineUp size={24} color="#fff" />
                            <h3 style={{ fontSize: '0.8rem' }}>OPTIMIZATION_RESULTS</h3>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '16px' }}>
                                TRADE_SPLIT — {batches.length} {batches.length === 1 ? 'BATCH' : 'BATCHES'}
                            </div>
                            {batches.length === 0 ? (
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>Enter a valid trade amount above zero.</p>
                            ) : (
                                batches.map((b) => (
                                    <div key={b.batchNum} style={{ marginBottom: '16px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>BATCH_{String(b.batchNum).padStart(2, '0')}</span>
                                            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-white)' }}>
                                                {b.amount.toLocaleString()} USD &nbsp;·&nbsp; {b.utilization.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div style={{ width: '100%', height: '4px', backgroundColor: '#111', position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute', left: 0, top: 0, height: '100%',
                                                width: `${Math.min(b.utilization, 100)}%`,
                                                backgroundColor: b.utilization >= 100 ? '#fff' : '#666',
                                                transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }} />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '16px' }}>QUEUE_OPTIMIZATION</div>
                            {queueWindows.length === 0 ? (
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>No pending trades to optimize.</p>
                            ) : (
                                queueWindows.map((window, idx) => {
                                    const windowUtil = (window.total / limit) * 100;
                                    return (
                                        <div key={idx} style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', borderLeft: '2px solid #333', marginBottom: '12px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                                <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>WINDOW_{String(idx + 1).padStart(2, '0')}</span>
                                                <span style={{ fontSize: '0.7rem', color: 'var(--text-gray)' }}>
                                                    {window.total.toLocaleString()} / {limit.toLocaleString()} &nbsp;({windowUtil.toFixed(1)}%)
                                                </span>
                                            </div>
                                            {window.trades.map((t) => (
                                                <div key={t.id} style={{ fontSize: '0.75rem', color: 'var(--text-gray)', marginBottom: '4px' }}>
                                                    <span style={{ color: '#fff', fontWeight: '700' }}>#{t.id}</span> &nbsp;
                                                    {t.amount.toLocaleString()} {t.currency}
                                                </div>
                                            ))}
                                            <div style={{ width: '100%', height: '3px', backgroundColor: '#111', marginTop: '10px', position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute', left: 0, top: 0, height: '100%',
                                                    width: `${Math.min(windowUtil, 100)}%`,
                                                    backgroundColor: windowUtil >= 90 ? '#4ade80' : '#555',
                                                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }} />
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        <div>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '16px' }}>SUMMARY</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                                <div>
                                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-white)' }}>{batches.length}</div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginTop: '4px' }}>TRADE_BATCHES</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-white)' }}>{avgUtilization.toFixed(1)}%</div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginTop: '4px' }}>AVG_UTIL</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-white)' }}>{totalCleared.toLocaleString()}</div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginTop: '4px' }}>QUEUE_CLEARED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TradeLimitMaximizer;
