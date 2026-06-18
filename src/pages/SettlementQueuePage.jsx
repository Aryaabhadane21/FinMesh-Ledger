import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import SettlementQueue from '../components/SettlementQueue';
import { initialQueue } from '../data/mockData';

const SettlementQueuePage = () => {
    const [queue, setQueue] = useState(initialQueue);

    const handleProcess = () => {
        setQueue(prev => prev.slice(1));
    };

    const handleAdd = (newTxn) => {
        setQueue(prev => [...prev, { ...newTxn, id: Date.now(), status: 'In Queue' }]);
    };

    return (
        <PageLayout title="Settlement Queue" number="03" description="A system that lines up all pending transactions and clears them in the exact order they were submitted." prevPage={{ path: '/transaction-undo', label: 'Transaction Undo' }} nextPage={{ path: '/receipt-checker', label: 'Receipt Checker' }}>
            <div className="container">
                <SettlementQueue transactions={queue} onProcess={handleProcess} onAdd={handleAdd} />
            </div>
        </PageLayout>
    );
};

export default SettlementQueuePage;
