import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import TransactionUndo from '../components/TransactionUndo';
import { initialTransactions } from '../data/mockData';

const TransactionUndoPage = () => {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [undoLog, setUndoLog] = useState([]);

    const handleUndo = (txnId) => {
        const txn = transactions.find(t => t.id === txnId);
        if (!txn) return;
        if (txn.status !== 'Failed') return;
        setTransactions(prev => prev.filter(t => t.id !== txnId));
        setUndoLog(prev => [...prev, {
            timestamp: new Date().toISOString(),
            action: 'ROLLBACK',
            txnId: txnId,
            details: txn,
        }]);
    };

    return (
        <PageLayout title="Transaction Undo" number="02" description="A log that tracks every change to a ledger, allowing the system to safely reverse a failed transfer." prevPage={{ path: '/account-list', label: 'Account List' }} nextPage={{ path: '/settlement-queue', label: 'Settlement Queue' }}>
            <div className="container">
                <TransactionUndo initialTransactions={transactions} onUndo={handleUndo} undoLog={undoLog} />
            </div>
        </PageLayout>
    );
};

export default TransactionUndoPage;
