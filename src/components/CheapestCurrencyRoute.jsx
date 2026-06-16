import React, { useState } from 'react';
import { ArrowsHorizontal, CaretRight, Info } from '@phosphor-icons/react';

const CheapestCurrencyRoute = () => {
    const [amount, setAmount] = useState(1000);

    return (
        <section className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '32px' }}>Route <br /> <span style={{ opacity: 0.4 }}>Optimizer</span></h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '48px', lineHeight: '1.6' }}>
                        Identifying the most efficient liquidity pathing between origin and target denominations using real-time interbank spreads.
                    </p>

                    <div className="card" style={{ padding: '48px' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', marginBottom: '24px' }}>SIMULATE_CONVERSION</div>
                        <div style={{ backgroundColor: 'var(--bg-black)', padding: '24px', border: '1px solid var(--border-dark)', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.65rem', fontWeight: '800' }}>INPUT_USD</span>
                                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-white)' }}>SPREAD: 0.02%</span>
                            </div>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'var(--text-white)',
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    fontFamily: 'Syne',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <button style={{ width: '100%', justifyContent: 'center' }}>INITIATE_OPTIMIZER</button>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div className="card" style={{ padding: '0', border: '1px solid #fff' }}>
                        <div style={{ padding: '40px', borderBottom: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <ArrowsHorizontal size={24} color="#fff" />
                            <h3 style={{ fontSize: '1rem' }}>OPTIMAL_LIQUIDITY_PATH</h3>
                        </div>

                        <div style={{ padding: '40px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>USD</div>
                                    <div style={{ fontSize: '0.65rem' }}>ORIGIN</div>
                                </div>
                                <CaretRight size={24} color="#333" />
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', border: '2px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px', color: '#555' }}>GBP</div>
                                    <div style={{ fontSize: '0.65rem' }}>HOP_01</div>
                                </div>
                                <CaretRight size={24} color="#333" />
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>EUR</div>
                                    <div style={{ fontSize: '0.65rem' }}>TARGET</div>
                                </div>
                            </div>

                            <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderLeft: '2px solid #fff' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <Info size={18} color="#fff" />
                                    <span style={{ fontSize: '0.75rem', fontWeight: '800' }}>OPTIMIZATION_REPORT</span>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>
                                    Routing via GBP reduces total conversion friction by <span style={{ color: '#fff', fontWeight: '700' }}>$12.42</span> per $1,000 magnitude.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheapestCurrencyRoute;
