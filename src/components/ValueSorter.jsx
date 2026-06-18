import React, { useState, useMemo } from 'react';
import { SortAscending, SortDescending, Funnel } from '@phosphor-icons/react';
import { exchangeRates } from '../data/mockData';

const toUSD = (balance, currency) => balance * (exchangeRates[currency] || 1);

const ValueSorter = ({ accounts }) => {
    const [threshold, setThreshold] = useState(0);
    const [sortDirection, setSortDirection] = useState('desc');

    const enriched = useMemo(
        () => accounts.map(acc => ({ ...acc, usdValue: toUSD(acc.balance, acc.currency) })),
        [accounts]
    );

    const displayAccounts = useMemo(() => {
        const filtered = enriched.filter(acc => acc.usdValue >= threshold);
        const sorted = [...filtered].sort((a, b) =>
            sortDirection === 'desc' ? b.usdValue - a.usdValue : a.usdValue - b.usdValue
        );
        return sorted;
    }, [enriched, threshold, sortDirection]);

    return (
        <section className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '60px', alignItems: 'start' }}>
                <div className="card" style={{ position: 'sticky', top: '120px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <Funnel size={24} color="#fff" />
                        <h2 style={{ fontSize: '1rem' }}>VOLUME_FILTER</h2>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>USD_THRESHOLD</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-white)', fontWeight: '800' }}>${threshold.toLocaleString()}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            {/* Fill track */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '1px',
                                transform: 'translateY(-50%)',
                                height: '6px',
                                width: `${(threshold / 15000) * 100}%`,
                                backgroundColor: '#fff',
                                pointerEvents: 'none',
                                zIndex: 1,
                                transition: 'width 0.1s ease',
                            }} />
                            <input
                                type="range"
                                className="premium-slider"
                                min="0"
                                max="15000"
                                step="100"
                                value={threshold}
                                onChange={(e) => setThreshold(parseInt(e.target.value))}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#333' }}>$0</span>
                            <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#333' }}>$15,000</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', marginBottom: '12px' }}>SORT_DIRECTION</div>
                        <button
                            onClick={() => setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc')}
                            className="secondary-btn"
                            style={{ fontSize: '0.65rem', width: '100%', justifyContent: 'center' }}
                        >
                            {sortDirection === 'desc' ? <SortDescending size={16} /> : <SortAscending size={16} />}
                            {sortDirection === 'desc' ? 'HIGHEST_FIRST' : 'LOWEST_FIRST'}
                        </button>
                    </div>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', lineHeight: '1.6' }}>
                        All balances are normalized to USD equivalent using real-time exchange rates for accurate cross-currency ranking.
                    </p>
                </div>

                <div className="table-wrapper">
                    <div style={{ padding: '24px', borderBottom: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>ORACLE_DATA_STREAM</span>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-white)' }}>{displayAccounts.length} MATCHES</span>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>IDENTIFIER</th>
                                <th>ORIGINAL</th>
                                <th>CURRENCY</th>
                                <th>USD_EQUIVALENT</th>
                                <th>HOLDER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayAccounts.map(acc => (
                                <tr key={acc.id}>
                                    <td style={{ fontFamily: 'monospace', color: '#555' }}>ID_{acc.id}</td>
                                    <td style={{ fontWeight: '800', color: 'var(--text-white)', fontSize: '1rem' }}>
                                        {acc.balance.toLocaleString()}
                                    </td>
                                    <td>
                                        <span style={{ padding: '4px 8px', border: '1px solid #222', fontSize: '0.7rem', fontWeight: '800' }}>
                                            {acc.currency}
                                        </span>
                                    </td>
                                    <td style={{ fontWeight: '800', color: 'var(--text-white)', fontSize: '1.2rem' }}>
                                        ${acc.usdValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td style={{ fontWeight: '700' }}>{acc.name.toUpperCase()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ValueSorter;
