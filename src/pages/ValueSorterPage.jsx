import React from 'react';
import PageLayout from '../components/PageLayout';
import ValueSorter from '../components/ValueSorter';
import { initialAccounts } from '../data/mockData';

const ValueSorterPage = () => {
    return (
        <PageLayout
            title="Value Sorter"
            number="05"
            description="A tool that ranks accounts based on their total financial value."
            prevPage={{ path: '/receipt-checker', label: 'Receipt Checker' }}
            nextPage={{ path: '/bank-transfer-map', label: 'Bank Transfer Map' }}
        >
            <ValueSorter accounts={initialAccounts} />
        </PageLayout>
    );
};

export default ValueSorterPage;
