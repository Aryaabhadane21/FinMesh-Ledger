import React, { useState } from 'react';

const CheapestCurrencyRoute = () => {
    const [amount, setAmount] = useState('1000');

    const routes = [
        { name: 'Route A', path: 'USD → INR → EUR', cost: '$0.45', time: '12h', best: true, emoji: '💵' },
        { name: 'Route B', path: 'USD → EUR', cost: '$0.62', time: '2h', best: false, emoji: '💶' },
        { name: 'Route C', path: 'USD → GBP → EUR', cost: '$0.58', time: '6h', best: false, emoji: '💷' },
    ];

    return (
        <section className="container reveal">
            <div className="card">
                <div style={{ marginBottom: '48px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Cheapest Currency Route</h2>
                        <p style={{ color: 'var(--text-gray)', fontFamily: 'Inter' }}>A tool that finds the path for changing currencies (e.g., USD to EUR) that has the lowest cost.</p>
                    </div>
                    <div>
                        <img src="/src/assets/optimal_path.png" alt="Optimal Path" style={{ width: '100%', borderRadius: '12px', opacity: 0.7 }} />
                    </div>
                </div>

                <div style={{ marginBottom: '40px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '1px' }}>Trade Amount (USD)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{
                            maxWidth: '180px',
                            height: '56px',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            textAlign: 'center',
                            backgroundColor: 'var(--bg-dark)',
                            border: '1px solid var(--border-dark)',
                            borderRadius: '8px',
                            color: 'var(--text-white)'
                        }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {routes.map((route) => (
                        <div key={route.name} style={{
                            padding: '40px',
                            border: route.best ? '1px solid var(--text-white)' : '1px solid var(--border-dark)',
                            borderRadius: '16px',
                            backgroundColor: route.best ? 'rgba(255, 255, 255, 0.05)' : 'var(--bg-dark)',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                        }} className="route-card">
                            <span style={{ fontSize: '2.5rem', marginBottom: '24px', display: 'block' }}>
                                {route.emoji}
                            </span>

                            {route.best && (
                                <div style={{
                                    position: 'absolute',
                                    top: '32px',
                                    right: '32px',
                                    backgroundColor: 'var(--text-white)',
                                    color: 'var(--bg-black)',
                                    padding: '6px 16px',
                                    fontSize: '0.75rem',
                                    fontWeight: '900',
                                    borderRadius: '4px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Best Route Selected
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '8px', fontFamily: 'Playfair Display' }}>{route.name}</h3>
                            <div style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-white)', marginBottom: '12px', fontFamily: 'Playfair Display' }}>
                                {route.path}
                            </div>
                            <div style={{ fontSize: '0.95rem', color: 'var(--text-gray)', marginBottom: '32px', fontFamily: 'Inter' }}>
                                Settlement time: <span style={{ color: 'var(--text-white)', fontWeight: '600' }}>{route.time}</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border-dark)' }}>
                                <span style={{ color: 'var(--text-gray)', fontSize: '0.9rem', fontFamily: 'Inter' }}>Cost per unit</span>
                                <span className="spinning-number" style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-white)', fontFamily: 'Inter' }}>{route.cost}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                .route-card:hover {
                    border: 1px solid rgba(255,255,255,0.3) !important;
                    transform: scale(1.02);
                }
                `}
            </style>
        </section>
    );
};

export default CheapestCurrencyRoute;
