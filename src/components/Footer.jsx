import React from 'react';

const Footer = () => {
    return (
        <footer className="reveal active" style={{
            backgroundColor: 'var(--bg-black)',
            borderTop: '1px solid var(--border-dark)',
            padding: '100px 20px',
            marginTop: '120px'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '80px' }}>
                <div>
                    <h3 style={{ fontSize: '32px', color: 'var(--text-white)', marginBottom: '32px', fontFamily: 'Playfair Display' }}>FinMesh Ledger</h3>
                    <p style={{ maxWidth: '400px', color: 'var(--text-gray)', fontFamily: 'Inter', lineHeight: '1.8' }}>
                        Providing clear settlements and efficient currency trade routing.
                        Developed in Thane, Maharashtra.
                    </p>
                    <div style={{ marginTop: '40px', display: 'flex', gap: '24px' }}>
                        <span style={{ fontSize: '1.8rem' }}>💵</span>
                        <span style={{ fontSize: '1.8rem' }}>💶</span>
                        <span style={{ fontSize: '1.8rem' }}>💷</span>
                    </div>
                </div>

                <div>
                    <h4 style={{ color: 'var(--text-white)', marginBottom: '32px', fontFamily: 'Playfair Display' }}>Governance</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <li><a href="#" className="footer-link">Digital Assets</a></li>
                        <li><a href="#" className="footer-link">Ledger Verification</a></li>
                        <li><a href="#" className="footer-link">Legal Policy</a></li>
                    </ul>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <h4 style={{ color: 'var(--text-white)', marginBottom: '32px', fontFamily: 'Playfair Display' }}>Crafted By</h4>
                    <p style={{ color: 'var(--text-white)', fontWeight: '800', fontSize: '1.4rem', fontFamily: 'Playfair Display' }}>Aryaa Bhadane</p>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', marginTop: '4px', fontFamily: 'Inter' }}>Thane, Maharashtra.</p>
                    <p style={{ marginTop: '40px', fontSize: '0.85rem', color: 'var(--text-gray)', fontStyle: 'italic', fontFamily: 'Inter' }}>
                        "Money should move freely, without hidden costs."
                    </p>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '100px',
                paddingTop: '40px',
                borderTop: '1px solid var(--border-dark)',
                fontSize: '0.85rem',
                color: 'rgba(136,136,136,0.6)',
                fontFamily: 'Inter',
                letterSpacing: '1px'
            }}>
                FINMESH LEDGER • ALL RIGHTS RESERVED • ARYAA BHADANE
            </div>

            <style>
                {`
                .footer-link {
                    color: var(--text-gray);
                    text-decoration: none;
                    transition: color 0.3s ease;
                    font-family: 'Inter';
                    font-size: 0.95rem;
                }
                .footer-link:hover {
                    color: var(--text-white);
                }
                `}
            </style>
        </footer>
    );
};

export default Footer;
