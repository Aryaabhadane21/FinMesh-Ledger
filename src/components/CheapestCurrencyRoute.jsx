import React, { useState } from 'react';
import { ArrowsHorizontal, CaretRight, Info } from '@phosphor-icons/react';
import { currencyGraph } from '../data/mockData';

const currencies = Object.keys(currencyGraph);

function dijkstra(graph, source, target, amount) {
    if (source === target) {
        return { path: [source], finalAmount: amount, totalFees: 0, steps: [] };
    }

    const best = {};
    currencies.forEach((c) => {
        best[c] = { amount: -Infinity, prev: null, edge: null };
    });
    best[source] = { amount, prev: null, edge: null };

    const visited = new Set();
    let queue = [{ node: source, amt: amount }];

    while (queue.length > 0) {
        queue.sort((a, b) => b.amt - a.amt);
        const { node: u, amt: currentAmt } = queue.shift();

        if (visited.has(u)) continue;
        visited.add(u);

        if (u === target) break;

        const edges = graph[u] || [];
        for (const edge of edges) {
            const v = edge.to;
            if (visited.has(v)) continue;

            const newAmt = (currentAmt - edge.fee) * edge.rate;
            if (newAmt > best[v].amount) {
                best[v] = { amount: newAmt, prev: u, edge };
                queue.push({ node: v, amt: newAmt });
            }
        }
    }

    if (best[target].amount === -Infinity) {
        return null;
    }

    const path = [];
    const steps = [];
    let cur = target;
    while (cur !== null) {
        path.unshift(cur);
        if (best[cur].prev !== null) {
            steps.unshift({
                from: best[cur].prev,
                to: cur,
                rate: best[cur].edge.rate,
                fee: best[cur].edge.fee,
            });
        }
        cur = best[cur].prev;
    }

    const totalFees = steps.reduce((sum, s) => sum + s.fee, 0);

    return { path, finalAmount: best[target].amount, totalFees, steps };
}

function directConversion(graph, source, target, amount) {
    const edges = graph[source] || [];
    const edge = edges.find((e) => e.to === target);
    if (!edge) return null;
    const finalAmount = (amount - edge.fee) * edge.rate;
    return { finalAmount, fee: edge.fee, rate: edge.rate };
}

const CheapestCurrencyRoute = () => {
    const [source, setSource] = useState('USD');
    const [target, setTarget] = useState('EUR');
    const [amount, setAmount] = useState(1000);
    const [result, setResult] = useState(null);
    const [direct, setDirect] = useState(null);

    const handleOptimize = () => {
        if (amount <= 0 || source === target) {
            setResult(null);
            setDirect(null);
            return;
        }
        const res = dijkstra(currencyGraph, source, target, amount);
        const dir = directConversion(currencyGraph, source, target, amount);
        setResult(res);
        setDirect(dir);
    };

    const savings = result && direct ? result.finalAmount - direct.finalAmount : 0;

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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '32px' }}>
                        Route <br /> <span style={{ opacity: 0.4 }}>Optimizer</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '48px', lineHeight: '1.6' }}>
                        Identifying the most efficient liquidity pathing between origin and target denominations using real-time interbank spreads.
                    </p>

                    <div className="card" style={{ padding: '48px' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', marginBottom: '24px' }}>SIMULATE_CONVERSION</div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                            <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '8px' }}>SOURCE</div>
                                <select value={source} onChange={(e) => setSource(e.target.value)} style={selectStyle}>
                                    {currencies.map((c) => (
                                        <option key={c} value={c} style={{ backgroundColor: '#0a0a0a' }}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '8px' }}>TARGET</div>
                                <select value={target} onChange={(e) => setTarget(e.target.value)} style={selectStyle}>
                                    {currencies.map((c) => (
                                        <option key={c} value={c} style={{ backgroundColor: '#0a0a0a' }}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'var(--bg-black)', padding: '24px', border: '1px solid var(--border-dark)', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: '800' }}>INPUT_{source}</span>
                                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-white)' }}>AMOUNT</span>
                            </div>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-white)',
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    fontFamily: 'Syne',
                                    outline: 'none',
                                }}
                            />
                        </div>

                        <button onClick={handleOptimize} style={{ width: '100%', justifyContent: 'center' }}>INITIATE_OPTIMIZER</button>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div className="card" style={{ padding: '0', border: '1px solid #fff' }}>
                        <div style={{ padding: '40px', borderBottom: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <ArrowsHorizontal size={24} color="#fff" />
                            <h3 style={{ fontSize: '1rem' }}>OPTIMAL_LIQUIDITY_PATH</h3>
                        </div>

                        <div style={{ padding: '40px' }}>
                            {!result ? (
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>
                                    Configure source, target, and amount — then click <span style={{ color: '#fff', fontWeight: '700' }}>INITIATE_OPTIMIZER</span> to compute the cheapest route.
                                </p>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
                                        {result.path.map((currency, idx) => {
                                            const isFirst = idx === 0;
                                            const isLast = idx === result.path.length - 1;
                                            const step = result.steps[idx];
                                            return (
                                                <React.Fragment key={currency}>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <div style={{
                                                            width: '64px',
                                                            height: '64px',
                                                            border: isFirst || isLast ? '2px solid #fff' : '2px solid #333',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '1.2rem',
                                                            fontWeight: '800',
                                                            marginBottom: '8px',
                                                            color: isFirst || isLast ? '#fff' : '#666',
                                                        }}>
                                                            {currency}
                                                        </div>
                                                        <div style={{ fontSize: '0.6rem', fontWeight: '800', letterSpacing: '0.05em' }}>
                                                            {isFirst ? 'ORIGIN' : isLast ? 'TARGET' : `HOP_${String(idx).padStart(2, '0')}`}
                                                        </div>
                                                    </div>
                                                    {!isLast && (
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                                            <CaretRight size={20} color="#555" />
                                                            {step && (
                                                                <div style={{ fontSize: '0.55rem', color: 'var(--text-gray)', textAlign: 'center', lineHeight: '1.4' }}>
                                                                    <div>×{step.rate}</div>
                                                                    <div>−{step.fee} fee</div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            );
                                        })}
                                    </div>

                                    <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderLeft: '2px solid #fff', marginBottom: '24px' }}>
                                        <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '8px' }}>OPTIMIZED_OUTPUT</div>
                                        <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-white)' }}>
                                            {result.finalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                                            <span style={{ fontSize: '1rem', opacity: 0.4 }}>{target}</span>
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', marginTop: '8px' }}>
                                            Hops: {result.path.length - 1} &nbsp;·&nbsp; Total fees: {result.totalFees.toFixed(2)} {source}
                                        </div>
                                    </div>

                                    <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderLeft: '2px solid #333' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <Info size={18} color="#fff" />
                                            <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>OPTIMIZATION_REPORT</span>
                                        </div>
                                        {direct ? (
                                            <>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '8px' }}>
                                                    Direct conversion: <span style={{ color: '#fff', fontWeight: '700' }}>
                                                        {direct.finalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {target}
                                                    </span>{' '}
                                                    (rate {direct.rate}, fee {direct.fee} {source})
                                                </div>
                                                <div style={{ fontSize: '0.85rem', color: savings > 0 ? '#4ade80' : savings < 0 ? '#f87171' : 'var(--text-gray)' }}>
                                                    {savings > 0
                                                        ? `Optimized route saves ${savings.toFixed(2)} ${target} over direct conversion.`
                                                        : savings < 0
                                                        ? `Direct route is cheaper by ${Math.abs(savings).toFixed(2)} ${target}.`
                                                        : 'Optimized route matches direct conversion.'}
                                                </div>
                                            </>
                                        ) : (
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>
                                                No direct edge from {source} → {target}. The optimized multi-hop route is the only available path.
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheapestCurrencyRoute;
