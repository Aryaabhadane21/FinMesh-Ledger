
import PageLayout from '../components/PageLayout';
import BankTransferMap from '../components/BankTransferMap';

const BankTransferMapPage = () => {
    return (
        <PageLayout
            title="Bank Transfer Map"
            number="06"
            description="A central system that shows how money moves between different banks during a transfer."
            prevPage={{ path: '/value-sorter', label: 'Value Sorter' }}
            nextPage={{ path: '/cheapest-currency-route', label: 'Cheapest Currency Route' }}
        >
            <BankTransferMap />
        </PageLayout>
    );
};

export default BankTransferMapPage;
