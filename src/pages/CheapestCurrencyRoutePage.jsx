import React from 'react';
import PageLayout from '../components/PageLayout';
import CheapestCurrencyRoute from '../components/CheapestCurrencyRoute';

const CheapestCurrencyRoutePage = () => {
    return (
        <PageLayout
            title="Cheapest Currency Route"
            number="07"
            description="A tool that finds the path for changing currencies (e.g., USD to EUR) that has the lowest cost."
            prevPage={{ path: '/bank-transfer-map', label: 'Bank Transfer Map' }}
            nextPage={{ path: '/trade-limit-maximizer', label: 'Trade Limit Maximizer' }}
        >
            <CheapestCurrencyRoute />
        </PageLayout>
    );
};

export default CheapestCurrencyRoutePage;
