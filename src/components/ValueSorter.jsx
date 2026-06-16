import React, { useState } from 'react';
import { SortAscending, Funnel } from '@phosphor-icons/react';

const ValueSorter = ({ accounts }) => {
    const [threshold, setThreshold] = useState(0);
    const filtered = accounts.filter(acc => acc.balance >= threshold);

    return (
        <section className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '60px', alignItems: 'start' }}>
                <div className="card" style={{ position: 'sticky', top: '120px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <Funnel size={24} color="#fff" />
                        <h2 style={{ fontSize: '1rem' }}>VOLUME_FILTER</h2>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>THRESHOLD</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-white)', fontWeight: '800' }}>{threshold.toLocaleString()}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            step="1000"
                            value={threshold}
                            onChange={(e) => setThreshold(parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: '#fff', cursor: 'pointer' }}
                        />
                    </div>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', lineHeight: '1.6' }}>
                        Filtering high-velocity accounts above the specified magnitude threshold.
                    </p>
                </div>

                <div className="table-wrapper">
                    <div style={{ padding: '24px', borderBottom: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>ORACLE_DATA_STREAM</span>
                        <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-white)' }}>{filtered.length} MATCHES</span>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>IDENTIFIER</th>
                                <th>MAGNITUDE</th>
                                <th>CURRENCY</th>
                                <th>HOLDER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.sort((a, b) => b.balance - a.balance).map(acc => (
                                <tr key={acc.id}>
                                    <td style={{ fontFamily: 'monospace', color: '#555' }}>ID_{acc.id}</td>
                                    <td style={{ fontWeight: '800', color: 'var(--text-white)', fontSize: '1.2rem' }}>
                                        {acc.balance.toLocaleString()}
                                    </td>
                                    <td>
                                        <span style={{ padding: '4px 8px', border: '1px solid #222', fontSize: '0.7rem', fontWeight: '800' }}>
                                            {acc.currency}
                                        </span>
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
