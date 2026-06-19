
import PageLayout from '../components/PageLayout';
import TradeLimitMaximizer from '../components/TradeLimitMaximizer';

const TradeLimitMaximizerPage = () => {
    return (
        <PageLayout
            title="Trade Limit Maximizer"
            number="08"
            description="A smart system that ensures trades hit the maximum allowed approval limit to speed up processing."
            prevPage={{ path: '/cheapest-currency-route', label: 'Cheapest Currency Route' }}
            nextPage={null}
        >
            <TradeLimitMaximizer />
        </PageLayout>
    );
};

export default TradeLimitMaximizerPage;
