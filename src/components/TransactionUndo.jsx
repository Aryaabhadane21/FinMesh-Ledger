import React, { useState } from 'react';
import { ArrowsCounterClockwise, ShieldWarning } from '@phosphor-icons/react';

const TransactionUndo = ({ initialTransactions, onUndo, undoLog }) => {
    const [undoingId, setUndoingId] = useState(null);

    const handleRollback = (txnId) => {
        setUndoingId(txnId);
        onUndo(txnId);
    };

    return (
        <section className="container">
            <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ShieldWarning size={32} color="#fff" />
                <h2 style={{ fontSize: '1.2rem' }}>IMMUTABLE_LEDGER_AUDIT</h2>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>TXN_HASH</th>
                            <th>ORIGIN</th>
                            <th>DESTINATION</th>
                            <th>MAGNITUDE</th>
                            <th>TIMESTAMP</th>
                            <th>PROTOCOL_ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...initialTransactions].reverse().map((txn) => (
                            <tr key={txn.id}>
                                <td style={{ fontFamily: 'monospace', color: '#555' }}>0x{txn.id.toString(16).padStart(8, '0')}</td>
                                <td style={{ fontWeight: '700' }}>ACC_{txn.from}</td>
                                <td style={{ fontWeight: '700' }}>ACC_{txn.to}</td>
                                <td style={{ fontWeight: '800', color: 'var(--text-white)' }}>
                                    {txn.amount.toLocaleString()} {txn.currency || 'USD'}
                                </td>
                                <td style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>{txn.date}</td>
                                <td>
                                    {txn.status === 'Failed' ? (
                                        <button
                                            onClick={() => handleRollback(txn.id)}
                                            disabled={undoingId === txn.id}
                                            className="secondary-btn"
                                            style={{
                                                fontSize: '0.65rem',
                                                padding: '8px 16px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                border: '1px solid #333',
                                                opacity: undoingId === txn.id ? 0.4 : 1,
                                                cursor: undoingId === txn.id ? 'not-allowed' : 'pointer',
                                            }}
                                        >
                                            <ArrowsCounterClockwise size={14} />
                                            ROLLBACK_TXN
                                        </button>
                                    ) : (
                                        <span
                                            style={{
                                                fontSize: '0.65rem',
                                                padding: '8px 16px',
                                                color: '#555',
                                                fontWeight: '800',
                                                letterSpacing: '0.05em',
                                            }}
                                        >
                                            SETTLED
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* CHANGE_LOG Section */}
            <div style={{ marginTop: '48px' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '20px', color: 'var(--text-white)', letterSpacing: '0.05em' }}>
                    CHANGE_LOG
                </h3>
                {undoLog.length === 0 ? (
                    <div style={{ padding: '24px', border: '1px solid #222', fontSize: '0.75rem', color: '#555', fontWeight: '700', letterSpacing: '0.05em' }}>
                        NO_CHANGES_RECORDED
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border-dark)', border: '1px solid var(--border-dark)' }}>
                        {undoLog.map((entry, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '16px 24px',
                                    backgroundColor: 'var(--bg-black)',
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    gap: '16px',
                                    alignItems: 'center',
                                    fontSize: '0.75rem',
                                }}
                            >
                                <div>
                                    <span style={{ color: 'var(--text-gray)', marginRight: '8px' }}>TIMESTAMP:</span>
                                    <span style={{ fontFamily: 'monospace', color: 'var(--text-white)' }}>{entry.timestamp}</span>
                                </div>
                                <div>
                                    <span style={{ color: 'var(--text-gray)', marginRight: '8px' }}>ACTION:</span>
                                    <span style={{ fontWeight: '800', color: 'var(--text-white)' }}>{entry.action}</span>
                                </div>
                                <div>
                                    <span style={{ color: 'var(--text-gray)', marginRight: '8px' }}>TXN_ID:</span>
                                    <span style={{ fontFamily: 'monospace', color: 'var(--text-white)' }}>0x{entry.txnId.toString(16).padStart(8, '0')}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TransactionUndo;
