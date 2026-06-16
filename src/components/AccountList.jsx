import React, { useState } from 'react';

const AccountList = ({ accounts }) => {
    const [sortedAccounts, setSortedAccounts] = useState(accounts);
    const [isSorted, setIsSorted] = useState(false);
    const [spinningId, setSpinningId] = useState(null);

    const toggleSort = () => {
        setSpinningId('all');
        setTimeout(() => {
            if (isSorted) {
                setSortedAccounts(accounts);
            } else {
                const sorted = [...sortedAccounts].sort((a, b) => b.balance - a.balance);
                setSortedAccounts(sorted);
            }
            setIsSorted(!isSorted);
            setSpinningId(null);
        }, 800);
    };

    const getEmoji = (currency) => {
        if (currency === 'USD') return '💵';
        if (currency === 'EUR') return '💶';
        return '💷';
    };

    return (
        <section className="container reveal">
            <div style={{ marginBottom: '50px' }}>
                <h2 style={{ marginBottom: '12px' }}>Account List</h2>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
                    A table that clearly shows the money and assets in all verified user accounts.
                </p>
            </div>

            <div className="table-wrapper">
                <div style={{ padding: '24px', display: 'flex', justifyContent: 'flex-end', backgroundColor: 'var(--bg-dark)' }}>
                    <button onClick={toggleSort} className="secondary-btn" style={{ padding: '10px 24px' }}>
                        {isSorted ? 'Reset' : 'Sort by Balance'}
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Account ID</th>
                            <th>Name</th>
                            <th>Currency</th>
                            <th>Balance</th>
                            <th>Assets</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedAccounts.map((acc) => (
                            <tr key={acc.id}>
                                <td style={{ color: 'var(--text-white)', fontWeight: '700' }}>#{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>
                                    <span className="currency-icon" style={{ marginRight: '8px' }}>{getEmoji(acc.currency)}</span>
                                    {acc.currency}
                                </td>
                                <td className={spinningId === 'all' ? 'spinning-number' : ''} style={{ fontWeight: '700', color: 'var(--text-white)' }}>
                                    {acc.balance.toLocaleString()}
                                </td>
                                <td style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{acc.assets}</td>
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
