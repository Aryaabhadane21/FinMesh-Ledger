import React from 'react';
import { Link } from 'react-router-dom';

const modules = [
    { num: '01', key: 'Account List', desc: 'Real-time multi-asset oversight engine', path: '/account-list' },
    { num: '02', key: 'Transaction Undo', desc: 'Secure ledger rollback & integrity layer', path: '/transaction-undo' },
    { num: '03', key: 'Settlement Queue', desc: 'FIFO deterministic clearance protocol', path: '/settlement-queue' },
    { num: '04', key: 'Receipt Checker', desc: 'Cryptographic verification of transaction hashes', path: '/receipt-checker' },
    { num: '05', key: 'Value Sorter', desc: 'High-velocity account magnitude ranking', path: '/value-sorter' },
    { num: '06', key: 'Bank Transfer Map', desc: 'Cross-institution network topology mapping', path: '/bank-transfer-map' },
    { num: '07', key: 'Currency Route', desc: 'Minimum-cost FX pathing via Dijkstra algorithm', path: '/cheapest-currency-route' },
    { num: '08', key: 'Trade Maximizer', desc: 'Payload optimisation to peak approval capacity', path: '/trade-limit-maximizer' },
];

const marqueeText = Array(6).fill(
    ' ACCOUNT_LIST · SETTLEMENT_QUEUE · CURRENCY_ROUTE · LEDGER_INTEGRITY · TRADE_LIMIT · BANK_MAP · RECEIPT_VERIFY ·'
).join('');

const HomePage = () => (
    <div style={{ backgroundColor: 'var(--bg-black)' }}>

        {/* ── Hero ── */}
        <section style={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '80px 24px',
            position: 'relative',
        }}>
            <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '48px',
            }}>
                Settlement Authority for Modern Finance
            </p>

            <h1 className="wordmark">
                FinMesh
            </h1>

            <div style={{
                position: 'absolute',
                bottom: '64px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
                <div className="scroll-indicator">
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>SCROLL</span>
                    <div className="scroll-indicator__line" />
                </div>
            </div>
        </section>

        {/* ── Marquee strip ── */}
        <div style={{
            borderTop: '1px solid var(--border-dark)',
            borderBottom: '1px solid var(--border-dark)',
            padding: '20px 0',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-dark)',
        }}>
            <div className="marquee-track">
                <span style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                    paddingRight: '0',
                }}>
                    {marqueeText}&nbsp;&nbsp;&nbsp;&nbsp;{marqueeText}
                </span>
            </div>
        </div>

        {/* ── Module list ── */}
        <section style={{ padding: '120px 0' }}>
            <div className="container">
                {/* Section label */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '80px',
                }}>
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}>
                        System Modules
                    </span>
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                    }}>
                        08 / COMPONENTS
                    </span>
                </div>

                {/* Module rows */}
                {modules.map(mod => (
                    <Link
                        key={mod.num}
                        to={mod.path}
                        className="module-row"
                    >
                        <span className="module-row__num">{mod.num}</span>
                        <span className="module-row__title">{mod.key}</span>
                        <span className="module-row__desc">{mod.desc}</span>
                        <span className="module-row__arrow">ACCESS →</span>
                    </Link>
                ))}
            </div>
        </section>

        {/* ── CTA strip ── */}
        <section style={{
            borderTop: '1px solid var(--border-dark)',
            padding: '160px 48px',
            textAlign: 'center',
            backgroundColor: 'var(--bg-dark)',
        }}>
            <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '48px',
            }}>
                Built for precision. Engineered for speed.
            </p>
            <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                marginBottom: '64px',
                maxWidth: '800px',
                margin: '0 auto 64px',
            }}>
                The infrastructure that modern finance demands.
            </h2>
            <Link to="/account-list">
                <button className="btn-primary">Initialize System →</button>
            </Link>
        </section>

    </div>
);

export default HomePage;
