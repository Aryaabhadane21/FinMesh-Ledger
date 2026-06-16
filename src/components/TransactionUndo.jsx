import React from 'react';
import { ArrowsCounterClockwise, ShieldWarning } from '@phosphor-icons/react';

const TransactionUndo = ({ initialTransactions, onUndo }) => {
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
                                    <button
                                        onClick={() => onUndo(txn.id)}
                                        className="secondary-btn"
                                        style={{
                                            fontSize: '0.65rem',
                                            padding: '8px 16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            border: '1px solid #333'
                                        }}
                                    >
                                        <ArrowsCounterClockwise size={14} />
                                        ROLLBACK_TXN
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TransactionUndo;
