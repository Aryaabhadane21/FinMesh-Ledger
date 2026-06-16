import React from 'react';
import { Link } from 'react-router-dom';

const features = [
    { num: '01', title: 'Account List', desc: 'A table that clearly shows the money and assets in all verified user accounts.', path: '/account-list' },
    { num: '02', title: 'Transaction Undo', desc: 'A log that tracks every change to a ledger, allowing the system to safely reverse a failed transfer.', path: '/transaction-undo' },
    { num: '03', title: 'Settlement Queue', desc: 'A system that lines up all pending transactions and clears them in the exact order they were submitted.', path: '/settlement-queue' },
    { num: '04', title: 'Receipt Checker', desc: "A fast search tool that instantly verifies a transaction's receipt number against the official account files.", path: '/receipt-checker' },
    { num: '05', title: 'Value Sorter', desc: 'A tool that ranks accounts based on their total financial value.', path: '/value-sorter' },
    { num: '06', title: 'Bank Transfer Map', desc: 'A central system that shows how money moves between different banks during a transfer.', path: '/bank-transfer-map' },
    { num: '07', title: 'Cheapest Currency Route', desc: 'A tool that finds the path for changing currencies (e.g., USD to EUR) that has the lowest cost.', path: '/cheapest-currency-route' },
    { num: '08', title: 'Trade Limit Maximizer', desc: 'A smart system that ensures trades hit the maximum allowed approval limit to speed up processing.', path: '/trade-limit-maximizer' },
];

const HomePage = () => {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient">
                <div className="container hero-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px', padding: '120px 0' }}>
                    <div style={{ textAlign: 'left' }}>
                        <h1 style={{ marginBottom: '24px', fontSize: '64px' }}>FinMesh Ledger</h1>
                        <p style={{ fontSize: '24px', color: 'var(--text-gray)', maxWidth: '600px', marginBottom: '48px', fontFamily: 'Inter, sans-serif' }}>
                            Build a system for trading money between people or accounts. <br />
                            <span style={{ fontSize: '1.2rem', opacity: 0.6, display: 'block', marginTop: '16px' }}>
                                USD → EUR conversion tracking | Real-time ledger | Safe transfers
                            </span>
                        </p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <Link to="/account-list"><button style={{ fontWeight: '700' }}>Explore Tools</button></Link>
                            <button className="secondary-btn">Watch Demo</button>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src="/hero.png" alt="Finance Visualization" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 80px rgba(255,255,255,0.05)' }} />
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="container reveal" style={{ padding: '120px 20px' }}>
                <div style={{
                    padding: '80px 60px',
                    border: '1px solid var(--border-dark)',
                    backgroundColor: 'var(--bg-dark)',
                    borderRadius: '12px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '-20px', left: '20px', fontSize: '8rem', opacity: 0.05, fontFamily: 'serif' }}>"</div>
                    <h2 style={{ color: 'var(--text-white)', fontSize: '2.8rem', fontWeight: '400', fontFamily: 'Playfair Display', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
                        Money should move freely, without hidden costs.
                    </h2>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="container reveal" style={{ paddingBottom: '120px' }}>
                <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>System Modules</h2>
                <p style={{ color: 'var(--text-gray)', marginBottom: '64px', fontSize: '1.2rem', fontFamily: 'Inter' }}>Everything you need for transparent, cost-effective currency trading.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                    {features.map(f => (
                        <Link to={f.path} key={f.num} style={{ textDecoration: 'none' }}>
                            <div className="card feature-card" style={{ padding: '48px 40px', cursor: 'pointer', height: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <span style={{ color: 'var(--text-gray)', fontWeight: '800', fontSize: '0.8rem', fontFamily: 'Inter', opacity: 0.4 }}>{f.num}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontFamily: 'Playfair Display' }}>{f.title}</h3>
                                <p style={{ color: 'var(--text-gray)', fontSize: '1rem', fontFamily: 'Inter', lineHeight: '1.7' }}>{f.desc}</p>
                                <div style={{ marginTop: '24px', color: 'var(--text-white)', fontSize: '0.85rem', fontWeight: '600', fontFamily: 'Inter' }}>
                                    Explore Module →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <style>
                {`
                .feature-card:hover h3 { color: var(--text-white); }
                .feature-card:hover div:last-child { opacity: 1; }
                @media (max-width: 900px) {
                    .hero-content { grid-template-columns: 1fr !important; text-align: center !important; }
                    .hero-content div:first-child { display: flex; flexDirection: column; alignItems: center; }
                    h1 { fontSize: 48px !important; }
                }
                `}
            </style>
        </div>
    );
};

export default HomePage;
