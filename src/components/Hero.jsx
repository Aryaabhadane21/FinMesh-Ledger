import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient reveal active">
            <div className="container hero-content" style={{ textAlign: 'center', padding: '120px 0', position: 'relative' }}>

                {/* Floating Emojis */}
                <div style={{ position: 'absolute', top: '10%', left: '15%' }} className="floating-currency">
                    <span style={{ fontSize: '3rem' }}>💵</span>
                </div>
                <div style={{ position: 'absolute', top: '20%', right: '10%' }} className="floating-currency" style={{ animationDelay: '1s' }}>
                    <span style={{ fontSize: '3.5rem' }}>💶</span>
                </div>
                <div style={{ position: 'absolute', bottom: '20%', left: '10%' }} className="floating-currency" style={{ animationDelay: '2s' }}>
                    <span style={{ fontSize: '3rem' }}>💷</span>
                </div>

                <h1 className="parallax-element" style={{ marginBottom: '24px' }}>FinMesh Ledger</h1>
                <p style={{ fontSize: '24px', color: 'var(--text-gray)', maxWidth: '800px', margin: '0 auto 48px auto', fontFamily: 'Inter, sans-serif' }}>
                    Build a system for trading money between people or accounts. <br />
                    <span style={{ fontSize: '1.2rem', opacity: 0.6, display: 'block', marginTop: '16px' }}>
                        USD → EUR conversion tracking | Real-time ledger | Safe transfers
                    </span>
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button style={{ fontWeight: '700' }}>Get Started</button>
                    <button className="secondary-btn">Watch Demo</button>
                </div>

                <div id="about" style={{ marginTop: '140px', textAlign: 'left' }} className="reveal">
                    <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Why I Built FinMesh Ledger</h2>
                    <div style={{
                        padding: '60px',
                        border: '1px solid var(--border-dark)',
                        backgroundColor: 'var(--bg-dark)',
                        borderRadius: '12px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', opacity: 0.05, fontFamily: 'serif' }}>"</div>
                        <p style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '32px', fontStyle: 'italic', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                            "As a student from Thāne, I saw friends struggling with currency conversion when trading internationally. My cousin lost ₹2,000 on a bad USD→EUR route. I built this to prevent that."
                        </p>
                        <h4 style={{ color: 'var(--text-white)', fontSize: '1.8rem', fontWeight: '400', borderTop: '1px solid var(--border-dark)', paddingTop: '24px' }}>
                            Money should move freely, without hidden costs.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
