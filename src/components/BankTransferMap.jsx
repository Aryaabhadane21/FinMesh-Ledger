import React, { useState, useMemo } from 'react';
import { MapTrifold, ArrowRight } from '@phosphor-icons/react';
import { bankRoutes } from '../data/mockData';

const BankTransferMap = () => {
    const [selectedRouteId, setSelectedRouteId] = useState(bankRoutes[0].id);

    const selectedRoute = useMemo(
        () => bankRoutes.find(r => r.id === selectedRouteId) || bankRoutes[0],
        [selectedRouteId]
    );

    const stats = useMemo(() => {
        const hopsWithData = selectedRoute.hops.filter(h => h.latency);
        const totalLatency = hopsWithData.reduce((sum, h) => sum + parseInt(h.latency), 0);
        const totalFees = hopsWithData.reduce((sum, h) => sum + (h.fee || 0), 0);
        return {
            totalHops: selectedRoute.hops.length,
            intermediaries: selectedRoute.hops.filter(h => h.type === 'intermediary').length,
            totalLatency,
            totalFees,
        };
    }, [selectedRoute]);

    const getNodeBorderColor = (type) => {
        if (type === 'origin' || type === 'destination') return '#fff';
        return '#333';
    };

    const getTypeColor = (type) => {
        if (type === 'origin') return '#4caf50';
        if (type === 'destination') return '#2196f3';
        return '#555';
    };

    return (
        <section className="container">
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                {/* Header */}
                <div style={{ padding: '40px', borderBottom: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <MapTrifold size={32} color="#fff" />
                        <h2 style={{ fontSize: '1.2rem' }}>NETWORK_TOPOLOGY</h2>
                    </div>
                    <div>
                        <select
                            value={selectedRouteId}
                            onChange={(e) => setSelectedRouteId(e.target.value)}
                            style={{
                                backgroundColor: 'var(--bg-black)',
                                border: '1px solid var(--border-dark)',
                                color: 'var(--text-white)',
                                padding: '10px 16px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                fontFamily: 'Inter, sans-serif',
                                outline: 'none',
                                cursor: 'pointer',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {bankRoutes.map(route => (
                                <option key={route.id} value={route.id}>{route.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Flow Diagram */}
                <div style={{
                    position: 'relative',
                    backgroundColor: '#050505',
                    padding: '60px 40px',
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        opacity: 0.15
                    }}></div>

                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0',
                        overflowX: 'auto',
                        padding: '20px 0',
                    }}>
                        {selectedRoute.hops.map((hop, index) => (
                            <React.Fragment key={index}>
                                {/* Bank Node */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: '140px',
                                    flexShrink: 0,
                                }}>
                                    <div style={{
                                        width: '120px',
                                        padding: '20px 16px',
                                        border: `2px solid ${getNodeBorderColor(hop.type)}`,
                                        backgroundColor: 'var(--bg-black)',
                                        textAlign: 'center',
                                        marginBottom: '12px',
                                    }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-white)', marginBottom: '6px', lineHeight: '1.3' }}>
                                            {hop.bank}
                                        </div>
                                        <div style={{ fontSize: '0.6rem', color: 'var(--text-gray)' }}>
                                            {hop.location}
                                        </div>
                                    </div>
                                    <span style={{
                                        fontSize: '0.55rem',
                                        fontWeight: '900',
                                        color: getTypeColor(hop.type),
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
                                    }}>
                                        {hop.type}
                                    </span>
                                </div>

                                {/* Arrow between nodes */}
                                {index < selectedRoute.hops.length - 1 && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '0 8px',
                                        flexShrink: 0,
                                        marginBottom: '24px',
                                    }}>
                                        {selectedRoute.hops[index + 1].latency && (
                                            <div style={{ fontSize: '0.55rem', fontWeight: '800', color: '#555', marginBottom: '6px', whiteSpace: 'nowrap' }}>
                                                {selectedRoute.hops[index + 1].latency}
                                            </div>
                                        )}
                                        <ArrowRight size={20} color="#333" />
                                        {selectedRoute.hops[index + 1].fee !== undefined && (
                                            <div style={{ fontSize: '0.55rem', fontWeight: '800', color: '#555', marginTop: '6px', whiteSpace: 'nowrap' }}>
                                                ${selectedRoute.hops[index + 1].fee}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1px',
                    backgroundColor: 'var(--border-dark)',
                }}>
                    {[
                        { label: 'TOTAL_HOPS', value: stats.totalHops, sub: `${stats.intermediaries} intermediaries` },
                        { label: 'TOTAL_LATENCY', value: `${stats.totalLatency}ms`, sub: 'Cumulative' },
                        { label: 'TOTAL_FEES', value: `$${stats.totalFees}`, sub: 'Per transfer' },
                        { label: 'EST_SETTLEMENT', value: `${Math.ceil(stats.totalLatency / 1000 * 60)}s`, sub: 'Simulated' },
                    ].map((stat, i) => (
                        <div key={i} style={{ padding: '32px', backgroundColor: 'var(--bg-black)', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '8px', fontWeight: '800', letterSpacing: '0.1em' }}>{stat.label}</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-white)', marginBottom: '8px' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.6rem', fontWeight: '800', color: '#333' }}>{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BankTransferMap;
