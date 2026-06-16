import React, { useState, useEffect } from 'react';
import { ClockCountdown } from '@phosphor-icons/react';

const SettlementQueue = ({ initialQueue }) => {
    const [queue, setQueue] = useState(initialQueue);
    const [processingIndex, setProcessingIndex] = useState(-1);

    useEffect(() => {
        if (processingIndex < queue.length - 1) {
            const timer = setTimeout(() => {
                setProcessingIndex(prev => prev + 1);
                setQueue(prev => prev.map((item, idx) =>
                    idx === processingIndex + 1 ? { ...item, status: 'Completed ✓' } : item
                ));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [processingIndex, queue.length]);

    return (
        <section className="card reveal" style={{ margin: '20px' }}>
            <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <ClockCountdown size={40} color="var(--text-white)" weight="bold" />
                    <h2 style={{ fontSize: '32px' }}>Settlement Queue</h2>
                </div>
                <p style={{ color: 'var(--text-gray)', fontFamily: 'Inter' }}>A system that lines up all pending transactions and clears them in the exact order they were submitted.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {queue.map((item, index) => (
                    <div key={item.id} style={{
                        padding: '30px',
                        backgroundColor: 'var(--bg-dark)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-dark)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <span style={{
                                color: 'var(--text-white)',
                                fontWeight: '700',
                                fontSize: '1.2rem',
                                fontFamily: 'Playfair Display, serif'
                            }}>
                                {String(item.id).padStart(2, '0')}
                            </span>
                            <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-white)', marginTop: '8px', fontFamily: 'Playfair Display' }}>
                                {item.amount} {item.currency}
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-gray)', fontFamily: 'Inter' }}>{item.from} → {item.to}</div>
                        </div>

                        <div style={{ textAlign: 'right', minWidth: '180px' }}>
                            <div className={index < processingIndex ? 'success-pulse' : ''} style={{
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                color: 'var(--text-white)',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {index < processingIndex ? 'Completed ✓' : index === processingIndex ? 'Processing...' : 'Pending'}
                            </div>
                            <div style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderRadius: '1px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: index < processingIndex ? '100%' : index === processingIndex ? '60%' : '0%',
                                    height: '100%',
                                    backgroundColor: 'var(--text-white)',
                                    transition: 'width 2s ease'
                                }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SettlementQueue;
