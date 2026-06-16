import React from 'react';
import { Link } from 'react-router-dom';

const PageLayout = ({ title, number, description, children }) => {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Page Header */}
            <section className="bg-gradient" style={{ padding: '80px 0 60px' }}>
                <div className="container hero-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h1 style={{ fontSize: '52px', marginBottom: '24px', fontFamily: 'Playfair Display' }}>{title}</h1>
                            <p style={{ color: 'var(--text-gray)', fontSize: '1.3rem', maxWidth: '700px', fontFamily: 'Inter', lineHeight: '1.7' }}>
                                {description}
                            </p>
                        </div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <button className="secondary-btn" style={{ whiteSpace: 'nowrap' }}>← Back to Home</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '60px 0 100px' }}>
                {children}
            </section>
        </div>
    );
};

export default PageLayout;
