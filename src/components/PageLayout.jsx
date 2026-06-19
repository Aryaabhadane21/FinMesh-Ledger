
import { Link } from 'react-router-dom';

const PageLayout = ({ title, number, description, children }) => (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-black)' }}>

        {/* ── Page header ── */}
        <section style={{
            padding: '80px 0 60px',
            borderBottom: '1px solid var(--border-dark)',
        }}>
            <div className="container">
                {/* Breadcrumb */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '48px',
                }}>
                    <Link to="/" style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                    }}
                        onMouseEnter={e => e.target.style.color = '#fff'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                    >
                        ← FinMesh
                    </Link>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>/</span>
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                    }}>
                        Modules
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>/</span>
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--text-gray)',
                    }}>
                        {number}
                    </span>
                </div>

                {/* Title + description */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '60px', flexWrap: 'wrap' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, flex: '1 1 auto' }}>
                        {title}
                    </h1>
                    {description && (
                        <p style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '1rem',
                            color: 'var(--text-gray)',
                            maxWidth: '400px',
                            lineHeight: 1.7,
                            flex: '0 1 400px',
                        }}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>

        {/* ── Content ── */}
        <section style={{ padding: '80px 0 120px' }}>
            {children}
        </section>
    </div>
);

export default PageLayout;
