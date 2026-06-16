import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AccountListPage from './pages/AccountListPage';
import TransactionUndoPage from './pages/TransactionUndoPage';
import SettlementQueuePage from './pages/SettlementQueuePage';
import ReceiptCheckerPage from './pages/ReceiptCheckerPage';
import ValueSorterPage from './pages/ValueSorterPage';
import BankTransferMapPage from './pages/BankTransferMapPage';
import CheapestCurrencyRoutePage from './pages/CheapestCurrencyRoutePage';
import TradeLimitMaximizerPage from './pages/TradeLimitMaximizerPage';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* Scroll reveal observer */
function ScrollReveal() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollReveal />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/account-list" element={<AccountListPage />} />
            <Route path="/transaction-undo" element={<TransactionUndoPage />} />
            <Route path="/settlement-queue" element={<SettlementQueuePage />} />
            <Route path="/receipt-checker" element={<ReceiptCheckerPage />} />
            <Route path="/value-sorter" element={<ValueSorterPage />} />
            <Route path="/bank-transfer-map" element={<BankTransferMapPage />} />
            <Route path="/cheapest-currency-route" element={<CheapestCurrencyRoutePage />} />
            <Route path="/trade-limit-maximizer" element={<TradeLimitMaximizerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
