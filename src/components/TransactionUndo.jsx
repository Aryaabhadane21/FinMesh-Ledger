import React, { useState } from 'react';
import { ArrowSquareOut, ArrowsCounterClockwise } from '@phosphor-icons/react';

const TransactionUndo = ({ initialTransactions, onUndo }) => {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [revertedId, setRevertedId] = useState(null);

    const handleUndo = (id) => {
        setTransactions(prev => prev.map(txn =>
            txn.id === id ? { ...txn, status: 'Reverted' } : txn
        ));
        setRevertedId(id);
        onUndo(id);
        setTimeout(() => setRevertedId(null), 3000);
    };

    return (
        <section className="card reveal" style={{ margin: '20px' }}>
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>Transaction Undo</h2>
                <p style={{ color: 'var(--text-gray)', fontFamily: 'Inter, sans-serif' }}>A log that tracks every change to a ledger, allowing the system to safely reverse a failed transfer.</p>
            </div>

            {revertedId && (
                <div className="success-pulse" style={{ color: 'var(--text-white)', padding: '20px', border: '1px solid var(--text-white)', borderRadius: '8px', marginBottom: '32px', textAlign: 'center', fontWeight: '700' }}>
                    Boom! Money moved ✓
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {transactions.map(txn => (
                    <div key={txn.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '30px',
                        backgroundColor: 'var(--bg-dark)',
                        borderRadius: '12px',
                        border: '1px solid var(--border-dark)'
                    }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                <ArrowSquareOut color="var(--text-white)" weight="bold" />
                                <span style={{ color: 'var(--text-white)', fontWeight: '700', fontSize: '1.1rem' }}>{txn.id}</span>
                            </div>
                            <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem', fontFamily: 'Inter' }}>
                                {txn.from} → {txn.to} • <span style={{ opacity: 0.6 }}>{txn.timestamp}</span>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '30px' }}>
                            <div className={revertedId === txn.id ? 'spinning-number' : ''} style={{ fontWeight: '700', color: 'var(--text-white)', fontSize: '1.2rem' }}>
                                {txn.amount} {txn.currency}
                            </div>

                            {txn.status === 'Failed' ? (
                                <button
                                    onClick={() => handleUndo(txn.id)}
                                    style={{
                                        backgroundColor: 'var(--error-red)',
                                        color: 'white',
                                        padding: '12px 24px',
                                        fontSize: '0.8rem',
                                        borderRadius: '8px'
                                    }}
                                    className="undo-btn"
                                >
                                    <ArrowsCounterClockwise size={18} /> Undo
                                </button>
                            ) : (
                                <span style={{
                                    color: txn.status === 'Completed' ? 'var(--text-white)' : 'var(--text-gray)',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {txn.status}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
                .undo-btn { transition: all 0.3s ease; }
                .undo-btn:hover {
                    transform: scale(1.05) !important;
                    box-shadow: 0 0 25px rgba(255, 68, 68, 0.4) !important;
                    background-color: #ff3333 !important;
                }
                `}
            </style>
        </section>
    );
};

export default TransactionUndo;
