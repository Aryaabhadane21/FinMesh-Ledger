import React from 'react';
import { Queue, Timer } from '@phosphor-icons/react';

const SettlementQueue = ({ transactions }) => {
    return (
        <section className="container">
            <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Queue size={32} color="#fff" />
                    <h2 style={{ fontSize: '1.2rem' }}>FIFO_SETTLEMENT_QUEUE</h2>
                </div>
                <div style={{
                    padding: '8px 16px',
                    border: '1px solid #222',
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <Timer size={14} /> SYSTEM_READY
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border-dark)', border: '1px solid var(--border-dark)' }}>
                {transactions.map((txn, index) => (
                    <div key={txn.id} className="card" style={{
                        border: 'none',
                        borderRadius: '0',
                        padding: '32px 40px',
                        display: 'grid',
                        gridTemplateColumns: '80px 1fr 1fr 1fr 150px',
                        alignItems: 'center',
                        backgroundColor: 'var(--bg-black)'
                    }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: '900', color: '#333' }}>
                            #{String(index + 1).padStart(2, '0')}
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>ORIGIN</div>
                            <div style={{ fontWeight: '700', color: 'var(--text-white)' }}>ACC_{txn.from}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>DESTINATION</div>
                            <div style={{ fontWeight: '700', color: 'var(--text-white)' }}>ACC_{txn.to}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>NET_VOLUME</div>
                            <div style={{ fontWeight: '800', color: 'var(--text-white)', fontSize: '1.2rem' }}>
                                {txn.amount.toLocaleString()}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span className="status-badge" style={{ borderColor: '#333', color: '#555' }}>
                                PENDING_CLEARANCE
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SettlementQueue;
