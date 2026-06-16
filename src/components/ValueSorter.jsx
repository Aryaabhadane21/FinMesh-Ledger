import React from 'react';

const ValueSorter = ({ accounts }) => {
    const sortedByValue = [...accounts].sort((a, b) => b.balance - a.balance);
    const maxValue = sortedByValue[0].balance;

    return (
        <section className="container reveal">
            <div className="card">
                <div style={{ marginBottom: '56px' }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Value Sorter</h2>
                    <p style={{ color: 'var(--text-gray)', fontFamily: 'Inter' }}>A tool that ranks accounts based on their total financial value.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {sortedByValue.map((acc, index) => (
                        <div key={acc.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px',
                            padding: '32px',
                            borderRadius: '16px',
                            backgroundColor: 'var(--bg-dark)',
                            border: index < 3 ? '1px solid var(--text-white)' : '1px solid var(--border-dark)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }} className="sorter-row">
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                backgroundColor: index < 3 ? 'var(--text-white)' : 'var(--bg-card)',
                                color: index < 3 ? 'var(--bg-black)' : 'var(--text-white)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '800',
                                fontFamily: 'Inter',
                                fontSize: '1.1rem'
                            }}>
                                {index + 1}
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <span style={{ fontWeight: '700', color: 'var(--text-white)', fontSize: '1.25rem', fontFamily: 'Playfair Display' }}>{acc.name}</span>
                                    <span className="spinning-number" style={{ fontWeight: '500', color: 'var(--text-gray)', fontFamily: 'Inter' }}>
                                        {acc.balance.toLocaleString()} {acc.currency}
                                    </span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: '1px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${(acc.balance / maxValue) * 100}%`,
                                        height: '100%',
                                        backgroundColor: 'var(--text-white)',
                                        borderRadius: '1px'
                                    }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                .sorter-row:hover {
                    background-color: #222 !important;
                    transform: scale(1.02);
                }
                `}
            </style>
        </section>
    );
};

export default ValueSorter;
