import React, { useState, useMemo } from 'react';
import { ArrowsDownUp } from '@phosphor-icons/react';

const AccountList = ({ accounts }) => {
    const [isSorted, setIsSorted] = useState(false);

    const verifiedAccounts = useMemo(
        () => accounts.filter(acc => acc.status === 'Verified'),
        [accounts]
    );

    const displayAccounts = useMemo(() => {
        if (!isSorted) return verifiedAccounts;
        return [...verifiedAccounts].sort((a, b) => b.balance - a.balance);
    }, [verifiedAccounts, isSorted]);

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
                    <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-gray)', marginTop: '8px', display: 'inline-block', letterSpacing: '0.1em' }}>
                        {verifiedAccounts.length} VERIFIED / {accounts.length} TOTAL
                    </span>
                </div>
                <button onClick={() => setIsSorted(prev => !prev)} className="secondary-btn" style={{ fontSize: '0.7rem' }}>
                    <ArrowsDownUp />
                    {isSorted ? 'RESET_SEQUENCE' : 'RANK_BY_CAPACITY'}
                </button>
            </div>

            <div className="table-wrapper">
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
                        {displayAccounts.map((acc) => (
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
