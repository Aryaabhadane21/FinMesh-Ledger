import React from 'react';
import PageLayout from '../components/PageLayout';
import SettlementQueue from '../components/SettlementQueue';
import { initialQueue } from '../data/mockData';

const SettlementQueuePage = () => {
    return (
        <PageLayout
            title="Settlement Queue"
            number="03"
            description="A system that lines up all pending transactions and clears them in the exact order they were submitted."
            prevPage={{ path: '/transaction-undo', label: 'Transaction Undo' }}
            nextPage={{ path: '/receipt-checker', label: 'Receipt Checker' }}
        >
            <div className="container">
                <SettlementQueue transactions={initialQueue} />
            </div>
        </PageLayout>
    );
};

export default SettlementQueuePage;
