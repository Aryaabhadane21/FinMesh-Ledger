import React from 'react';
import PageLayout from '../components/PageLayout';
import ReceiptChecker from '../components/ReceiptChecker';

const ReceiptCheckerPage = () => {
    return (
        <PageLayout
            title="Receipt Checker"
            number="04"
            description="A fast search tool that instantly verifies a transaction's receipt number against the official account files."
            prevPage={{ path: '/settlement-queue', label: 'Settlement Queue' }}
            nextPage={{ path: '/value-sorter', label: 'Value Sorter' }}
        >
            <ReceiptChecker />
        </PageLayout>
    );
};

export default ReceiptCheckerPage;
