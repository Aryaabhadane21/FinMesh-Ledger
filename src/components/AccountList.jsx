import React, { useState } from 'react';
import { ArrowsDownUp, ArrowsClockwise } from '@phosphor-icons/react';

const AccountList = ({ accounts }) => {
    const [sortedAccounts, setSortedAccounts] = useState(accounts);
    const [isSorted, setIsSorted] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);

    const toggleSort = () => {
        setIsSyncing(true);
        setTimeout(() => {
            if (isSorted) {
                setSortedAccounts(accounts);
            } else {
                const sorted = [...sortedAccounts].sort((a, b) => b.balance - a.balance);
                setSortedAccounts(sorted);
            }
            setIsSorted(!isSorted);
            setIsSyncing(false);
        }, 800);
    };

    return (
        <section className="container">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '48px',
                padding: '24px 0'
            }}>
                <div>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-white)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ width: '12px', height: '12px', border: '2px solid #fff' }}></span>
                        NETWORK_ORACLE
                    </h2>
                </div>
                <button onClick={toggleSort} className="secondary-btn" style={{ fontSize: '0.7rem' }}>
                    {isSyncing ? <ArrowsClockwise className="spinning-number" /> : <ArrowsDownUp />}
                    {isSorted ? 'RESET_SEQUENCE' : 'RANK_BY_CAPACITY'}
                </button>
            </div>

            <div className="table-wrapper" style={{ opacity: isSyncing ? 0.5 : 1, transition: 'opacity 0.3s ease' }}>
                <table>
                    <thead>
                        <tr>
                            <th>IDENTIFIER</th>
                            <th>HOLDER_NAME</th>
                            <th>DENOMINATION</th>
                            <th>VOLUME</th>
                            <th>ASSETS</th>
                            <th>PROTOCOL_STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedAccounts.map((acc) => (
                            <tr key={acc.id}>
                                <td style={{ fontFamily: 'monospace', color: '#555' }}>ID_{acc.id}</td>
                                <td style={{ fontWeight: '700', color: 'var(--text-white)' }}>{acc.name.toUpperCase()}</td>
                                <td>
                                    <span style={{
                                        padding: '4px 8px',
                                        backgroundColor: '#111',
                                        border: '1px solid #222',
                                        fontSize: '0.7rem',
                                        fontWeight: '800'
                                    }}>
                                        {acc.currency}
                                    </span>
                                </td>
                                <td style={{ fontWeight: '800', color: 'var(--text-white)', fontSize: '1.1rem' }}>
                                    {acc.balance.toLocaleString()}
                                </td>
                                <td style={{ color: 'var(--text-gray)', fontSize: '0.8rem' }}>{acc.assets || 'LIQUID_ONLY'}</td>
                                <td>
                                    <span className="status-badge">
                                        {acc.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AccountList;
