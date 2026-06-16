import React, { useState } from 'react';
import { ChartLineUp, Warning, Calculator } from '@phosphor-icons/react';

const TradeLimitMaximizer = () => {
    const [proposedTrade, setProposedTrade] = useState(50000);
    const limit = 100000;
    const percentage = (proposedTrade / limit) * 100;

    return (
        <section className="container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Payload <br /> <span style={{ opacity: 0.4 }}>Maximizer</span></h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto' }}>
                        Ensure every transaction reaches peak approval capacity to maximize operational throughput and reduce overhead.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'var(--border-dark)', border: '1px solid var(--border-dark)' }}>
                    <div className="card" style={{ padding: '60px', borderRadius: '0', border: 'none', backgroundColor: 'var(--bg-black)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                            <Calculator size={24} color="#fff" />
                            <h3 style={{ fontSize: '0.8rem' }}>INPUT_PARAMETERS</h3>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginBottom: '12px' }}>PROPOSED_MAGNITUDE</div>
                            <input
                                type="number"
                                value={proposedTrade}
                                onChange={(e) => setProposedTrade(e.target.value)}
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
                                    paddingBottom: '12px'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', border: '1px solid var(--border-dark)', fontSize: '0.8rem' }}>
                            <Warning size={20} color="#555" />
                            <span>PROTOCOL_LIMIT: {limit.toLocaleString()} USD</span>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '60px', borderRadius: '0', border: 'none', backgroundColor: 'var(--bg-card)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                            <ChartLineUp size={24} color="#fff" />
                            <h3 style={{ fontSize: '0.8rem' }}>EFFICIENCY_METRICS</h3>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: '800' }}>UTILIZATION_GAP</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-white)' }}>{percentage.toFixed(1)}%</span>
                            </div>
                            <div style={{ width: '100%', height: '4px', backgroundColor: '#111', position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    width: `${percentage}%`,
                                    backgroundColor: '#fff',
                                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}></div>
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '8px' }}>OPTIMIZATION_DELTA</div>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-white)' }}>
                                +{(limit - proposedTrade).toLocaleString()} <span style={{ fontSize: '1rem', opacity: 0.4 }}>USD</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginTop: '16px' }}>
                                Increase trade magnitude by this amount to reach peak protocol efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TradeLimitMaximizer;
