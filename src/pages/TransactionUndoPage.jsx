import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import TransactionUndo from '../components/TransactionUndo';
import { initialTransactions, initialAccounts } from '../data/mockData';

const TransactionUndoPage = () => {
    const [accounts, setAccounts] = useState(initialAccounts);

    const handleUndo = (txnId) => {
        const txn = initialTransactions.find(t => t.id === txnId);
        if (!txn) return;
        setAccounts(prev => prev.map(acc => {
            if (acc.id === txn.from) return { ...acc, balance: acc.balance + txn.amount };
            if (acc.id === txn.to) return { ...acc, balance: acc.balance - txn.amount };
            return acc;
        }));
    };

    return (
        <PageLayout
            title="Transaction Undo"
            number="02"
            description="A log that tracks every change to a ledger, allowing the system to safely reverse a failed transfer."
            prevPage={{ path: '/account-list', label: 'Account List' }}
            nextPage={{ path: '/settlement-queue', label: 'Settlement Queue' }}
        >
            <div className="container">
                <TransactionUndo initialTransactions={initialTransactions} onUndo={handleUndo} />
            </div>
        </PageLayout>
    );
};

export default TransactionUndoPage;
