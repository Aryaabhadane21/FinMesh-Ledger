import React from 'react';

const BankTransferMap = () => {
    return (
        <section className="container reveal">
            <div className="card" style={{ padding: '80px 40px', textAlign: 'center', overflow: 'hidden' }}>
                <div style={{ marginBottom: '64px' }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Bank Transfer Map</h2>
                    <p style={{ color: 'var(--text-gray)', fontFamily: 'Inter' }}>A central system that shows how money moves between different banks during a transfer.</p>
                </div>

                <div style={{ marginBottom: '64px', position: 'relative' }}>
                    <img src="/src/assets/network.png" alt="Network Map" style={{ width: '100%', maxWidth: '800px', borderRadius: '16px', opacity: 0.8, filter: 'grayscale(100%) brightness(0.8)' }} />
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative'
                }}>
                    {[
                        { name: 'Bank A', color: 'White' },
                        { name: 'Bank B', color: 'White' },
                        { name: 'Bank C', color: 'White' }
                    ].map((bank, i) => (
                        <React.Fragment key={bank.name}>
                            <div className="parallax-element" style={{
                                width: '140px',
                                height: '140px',
                                borderRadius: '50%',
                                border: '1px solid var(--border-dark)',
                                backgroundColor: 'var(--text-white)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2
                            }}>
                                <strong style={{ color: 'var(--bg-black)', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>{bank.name}</strong>
                                <small style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.75rem', fontFamily: 'Inter', fontWeight: 'bold' }}>VERIFIED</small>
                            </div>

                            {i < 2 && (
                                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-dark)', position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-16px',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                                            <span style={{ fontSize: '1.5rem' }}>{['💵', '💶'][i]}</span>
                                        </div>
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-28px',
                                        width: '100%',
                                        textAlign: 'center',
                                        color: 'var(--text-gray)',
                                        fontSize: '0.85rem',
                                        fontFamily: 'Inter'
                                    }}>
                                        {i === 0 ? '$10,000' : '€9,200'}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BankTransferMap;
