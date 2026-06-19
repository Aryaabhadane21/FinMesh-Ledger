import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import AccountList from '../components/AccountList';
import { initialAccounts } from '../data/mockData';

const AccountListPage = () => {
    const [accounts] = useState(initialAccounts);

    return (
        <PageLayout
            title="Account List"
            number="01"
            description="A table that clearly shows the money and assets in all verified user accounts."
            prevPage={null}
            nextPage={{ path: '/transaction-undo', label: 'Transaction Undo' }}
        >
            <AccountList accounts={accounts} />
        </PageLayout>
    );
};

export default AccountListPage;
