import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/account-list', label: 'Account List' },
    { path: '/transaction-undo', label: 'Transaction Undo' },
    { path: '/settlement-queue', label: 'Settlement Queue' },
    { path: '/receipt-checker', label: 'Receipt Checker' },
    { path: '/value-sorter', label: 'Value Sorter' },
    { path: '/bank-transfer-map', label: 'Bank Transfer Map' },
    { path: '/cheapest-currency-route', label: 'Currency Route' },
    { path: '/trade-limit-maximizer', label: 'Trade Limit' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <header style={{
                padding: '20px 40px',
                borderBottom: '1px solid var(--border-dark)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--bg-black)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backdropFilter: 'blur(12px)'
            }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img src="/src/assets/logo.png" alt="FinMesh" style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                    <span style={{ fontSize: '1.3rem', color: 'var(--text-white)', fontWeight: '700', fontFamily: 'Playfair Display, serif' }}>
                        FinMesh Ledger
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'nav-active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="hamburger-btn"
                    style={{
                        display: 'none',
                        background: 'transparent',
                        color: 'var(--text-white)',
                        padding: '8px',
                        boxShadow: 'none'
                    }}
                >
                    {isOpen ? <X size={28} /> : <List size={28} />}
                </button>
            </header>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px' }}>
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`mobile-nav-link ${location.pathname === item.path ? 'nav-active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}

            <style>
                {`
                .desktop-nav {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }
                .nav-link {
                    text-decoration: none;
                    color: var(--text-gray);
                    font-weight: 500;
                    font-size: 0.82rem;
                    padding: 8px 14px;
                    border-radius: 6px;
                    font-family: 'Inter', sans-serif;
                    white-space: nowrap;
                }
                .nav-link:hover {
                    color: var(--text-white);
                    background: var(--hover-bg);
                }
                .nav-active {
                    color: var(--text-white) !important;
                    background: var(--hover-bg);
                }
                .hamburger-btn {
                    display: none !important;
                }
                .mobile-sidebar {
                    position: fixed;
                    top: 0;
                    right: -320px;
                    width: 300px;
                    height: 100vh;
                    background: var(--bg-dark);
                    border-left: 1px solid var(--border-dark);
                    z-index: 2000;
                    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow-y: auto;
                    padding-top: 80px;
                }
                .sidebar-open {
                    right: 0 !important;
                }
                .sidebar-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.7);
                    z-index: 1500;
                }
                .mobile-nav-link {
                    text-decoration: none;
                    color: var(--text-gray);
                    font-weight: 500;
                    font-size: 1rem;
                    padding: 16px 20px;
                    border-radius: 8px;
                    display: block;
                    font-family: 'Inter', sans-serif;
                }
                .mobile-nav-link:hover, .mobile-nav-link.nav-active {
                    color: var(--text-white);
                    background: var(--hover-bg);
                }
                @media (max-width: 1024px) {
                    .desktop-nav { display: none !important; }
                    .hamburger-btn { display: flex !important; }
                }
                `}
            </style>
        </>
    );
};

export default Header;
