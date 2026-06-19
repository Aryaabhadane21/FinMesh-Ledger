
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer style={{
        backgroundColor: 'var(--bg-black)',
        borderTop: '1px solid var(--border-dark)',
        paddingTop: '100px',
        overflow: 'hidden',
    }}>
        {/* ── Two-column link list ── */}
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 48px 80px',
            flexWrap: 'wrap',
            gap: '48px',
        }}>
            <div>
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '28px',
                }}>Index</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                        { label: 'Accounts', path: '/account-list' },
                        { label: 'Settlement Queue', path: '/settlement-queue' },
                        { label: 'Currency Route', path: '/cheapest-currency-route' },
                        { label: 'Trade Limit', path: '/trade-limit-maximizer' },
                    ].map(l => (
                        <Link key={l.path} to={l.path} style={{
                            textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '0.95rem',
                            color: 'var(--text-gray)',
                            transition: 'color 0.2s ease',
                        }}
                            onMouseEnter={e => e.target.style.color = '#fff'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-gray)'}
                        >{l.label}</Link>
                    ))}
                </div>
            </div>

            <div>
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '28px',
                }}>Connect</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <a href="https://github.com/Aryaabhadane21" target="_blank" rel="noopener noreferrer" style={{
                        textDecoration: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        color: 'var(--text-gray)',
                        transition: 'color 0.2s ease',
                    }}
                        onMouseEnter={e => e.target.style.color = '#fff'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-gray)'}
                    >GitHub</a>
                    <a href="https://www.linkedin.com/in/aryaa-bhadane-96998a383/" target="_blank" rel="noopener noreferrer" style={{
                        textDecoration: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        color: 'var(--text-gray)',
                        transition: 'color 0.2s ease',
                        cursor: 'pointer' // explicitly set cursor
                    }}
                        onMouseEnter={e => e.target.style.color = '#fff'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-gray)'}
                    >LinkedIn</a>
                </div>
            </div>
        </div>

        {/* ── Giant wordmark ── */}
        <div style={{
            lineHeight: 1,
            paddingBottom: '0',
            paddingTop: '40px',
            overflow: 'hidden'
        }}>
            <h2 className="wordmark" style={{
                /* Reduced slightly from 13.2vw to 12.8vw to leave a small gap */
                fontSize: 'clamp(4rem, 12.8vw, 15rem)',
                display: 'block',
                width: '100%',
                textAlign: 'center',
                lineHeight: 0.9,
                letterSpacing: '-0.025em',
                marginBottom: '0',
            }}>
                FINMESH
            </h2>
        </div>

        {/* ── Copyright bar ── */}
        <div style={{
            borderTop: '1px solid var(--border-dark)',
            padding: '20px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
            }}>
                © 2026 FinMesh Ledger Systems
            </span>
            <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
            }}>
                All Rights Reserved.
            </span>
        </div>
    </footer>
);

export default Footer;
