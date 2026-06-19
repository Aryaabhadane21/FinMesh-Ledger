import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: '/account-list', label: 'Modules' },
    { path: '/cheapest-currency-route', label: 'Route' },
    { path: '/bank-transfer-map', label: 'Network' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setMenuOpen(false); }, [location]);

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                height: '72px',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 48px',
                backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-dark)' : '1px solid transparent',
                transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
            }}>
                {/* Logo */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '28px', height: '28px',
                        border: '2px solid var(--text-white)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--text-white)' }} />
                    </div>
                    <span style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        color: 'var(--text-white)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                    }}>
                        FinMesh
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                color: location.pathname === item.path ? 'var(--text-white)' : 'var(--text-gray)',
                                textDecoration: 'none',
                                letterSpacing: '0.04em',
                                transition: 'color 0.2s ease',
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/account-list">
                        <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.72rem' }}>
                            Launch →
                        </button>
                    </Link>
                </nav>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="hamburger"
                    style={{
                        background: 'transparent', border: 'none',
                        color: 'var(--text-white)', cursor: 'pointer',
                        display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
                    }}
                    aria-label="Toggle menu"
                >
                    <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
                    <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#fff', opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
                </button>
            </header>

            {/* Fullscreen mobile menu */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 999,
                backgroundColor: 'var(--bg-black)',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', gap: '48px',
                opacity: menuOpen ? 1 : 0,
                pointerEvents: menuOpen ? 'all' : 'none',
                transition: 'opacity 0.35s ease',
            }}>
                {[{ path: '/', label: 'Overview' }, ...navItems].map(item => (
                    <Link
                        key={item.path}
                        to={item.path}
                        style={{
                            fontFamily: 'Syne, sans-serif',
                            fontSize: 'clamp(2rem, 8vw, 4rem)',
                            fontWeight: 800,
                            color: location.pathname === item.path ? 'var(--text-white)' : 'var(--text-muted)',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                            transition: 'color 0.2s ease',
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <style>{`
                @media (max-width: 860px) {
                    .desktop-nav { display: none !important; }
                    .hamburger { display: flex !important; }
                }
            `}</style>
        </>
    );
};

export default Header;
