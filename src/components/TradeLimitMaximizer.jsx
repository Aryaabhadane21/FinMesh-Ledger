import React, { useState } from 'react';
import { ShieldCheck } from '@phosphor-icons/react';

const TradeLimitMaximizer = () => {
    const [tradeAmount, setTradeAmount] = useState(8500);
    const maxLimit = 10000;
    const [isSpinning, setIsSpinning] = useState(false);

    const isMaximized = tradeAmount >= maxLimit;

    const handleAmountChange = (e) => {
        setIsSpinning(true);
        setTradeAmount(Number(e.target.value));
        setTimeout(() => setIsSpinning(false), 500);
    };

    return (
        <section className="container reveal">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '56px' }}>
                    <div>
                        <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>Trade Limit Maximizer</h2>
                        <p style={{ color: 'var(--text-gray)', fontFamily: 'Inter' }}>A smart system that ensures trades hit the maximum allowed approval limit to speed up processing.</p>
                    </div>
                    <div style={{
                        backgroundColor: 'var(--bg-dark)',
                        padding: '24px 32px',
                        borderRadius: '16px',
                        border: '1px solid var(--border-dark)',
                        textAlign: 'right'
                    }}>
                        <small style={{ color: 'var(--text-gray)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px' }}>Global Limit</small>
                        <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-white)', fontFamily: 'Playfair Display' }}>$10,000</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '64px', alignItems: 'center' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '32px', color: 'var(--text-white)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.85rem' }}>Set Trade Amount</label>
                        <input
                            type="range"
                            min="1000"
                            max="15000"
                            step="500"
                            value={tradeAmount}
                            onChange={handleAmountChange}
                            style={{ height: '2px', cursor: 'pointer', appearance: 'none', background: 'var(--border-dark)' }}
                        />
                        <div className={isSpinning ? 'spinning-number' : ''} style={{ marginTop: '32px', fontSize: '3rem', fontWeight: '900', color: 'var(--text-white)', fontFamily: 'Playfair Display' }}>
                            ${tradeAmount.toLocaleString()}
                        </div>
                    </div>

                    <div style={{
                        padding: '64px',
                        backgroundColor: 'var(--bg-dark)',
                        borderRadius: '24px',
                        textAlign: 'center',
                        border: '1px solid var(--border-dark)',
                        transition: 'all 0.3s ease'
                    }} className="optimizer-box">
                        <ShieldCheck size={64} color="var(--text-white)" weight="duotone" style={{ marginBottom: '24px' }} />
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', textTransform: 'uppercase', fontWeight: '800', marginBottom: '12px', letterSpacing: '1px' }}>Optimized Execution</div>
                        <div className={isSpinning ? 'spinning-number' : ''} style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--text-white)', fontFamily: 'Playfair Display' }}>
                            ${tradeAmount < maxLimit ? maxLimit.toLocaleString() : tradeAmount.toLocaleString()}
                        </div>
                        {tradeAmount < maxLimit && (
                            <div className="success-pulse" style={{ color: 'var(--text-white)', fontSize: '0.9rem', marginTop: '24px', fontWeight: '700', textTransform: 'uppercase' }}>
                                ✓ Limit Auto-Maximized
                            </div>
                        )}
                    </div>
                </div>

                <div style={{ marginTop: '48px' }}>
                    <button style={{ width: '100%', height: '64px', justifyContent: 'center', fontSize: '1.1rem', fontWeight: '800' }}>
                        APPROVE TRANSACTION
                    </button>
                </div>
            </div>

            <style>
                {`
                .optimizer-box:hover {
                    border-color: rgba(255,255,255,0.3);
                    box-shadow: 0 0 40px rgba(255,255,255,0.1);
                    transform: translateY(-8px);
                }
                `}
            </style>
        </section>
    );
};

export default TradeLimitMaximizer;
