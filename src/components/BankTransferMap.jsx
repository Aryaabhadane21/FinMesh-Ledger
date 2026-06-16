import React from 'react';
import { MapTrifold, LinkBreak, Pulse } from '@phosphor-icons/react';

const BankTransferMap = () => {
    return (
        <section className="container">
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ padding: '40px', borderBottom: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <MapTrifold size={32} color="#fff" />
                        <h2 style={{ fontSize: '1.2rem' }}>NETWORK_TOPOLOGY</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', fontWeight: '800' }}>
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%' }}></span> ACTIVE_NODES
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', fontWeight: '800', opacity: 0.4 }}>
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#333', borderRadius: '50%' }}></span> OFFLINE_NODES
                        </div>
                    </div>
                </div>

                <div style={{ position: 'relative', backgroundColor: '#050505', padding: '80px', textAlign: 'center' }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #111 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        opacity: 0.5
                    }}></div>

                    <img
                        src="/map.png"
                        alt="Network Map"
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            filter: 'grayscale(1) invert(1) brightness(2)',
                            opacity: 0.8,
                            position: 'relative',
                            zIndex: 1
                        }}
                    />

                    <div style={{
                        marginTop: '60px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1px',
                        backgroundColor: 'var(--border-dark)',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {[
                            { label: 'LATENCY', value: '42ms', status: 'Optimal' },
                            { label: 'THROUGHPUT', value: '1.4GB/s', status: 'Optimal' },
                            { label: 'ERROR_RATE', value: '0.0001%', status: 'Minimal' }
                        ].map((stat, i) => (
                            <div key={i} style={{ padding: '32px', backgroundColor: 'var(--bg-black)' }}>
                                <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '8px' }}>{stat.label}</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-white)', marginBottom: '8px' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#555' }}>STATUS: {stat.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BankTransferMap;
