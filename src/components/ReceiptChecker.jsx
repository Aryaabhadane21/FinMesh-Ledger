import { useState, useMemo } from 'react';
import { SealCheck, WarningOctagon } from '@phosphor-icons/react';

const ReceiptChecker = ({ transactions }) => {
    const [searchId, setSearchId] = useState('');

    const result = useMemo(() => {
        const trimmed = searchId.trim();
        if (!trimmed) return null;
        const found = transactions.find(t => t.id.toString() === trimmed);
        return found || 'NOT_FOUND';
    }, [searchId, transactions]);

    return (
        <section className="container">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.05rem', marginBottom: '40px', letterSpacing: '0.04em' }}>CRYPTOGRAPHIC_VERIFICATION</h2>
                    <div style={{ position: 'relative', marginBottom: '32px' }}>
                        <input
                            type="text"
                            placeholder="ENTER_RECEIPT_HASH..."
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '20px 24px',
                                backgroundColor: 'var(--bg-black)',
                                border: '1px solid var(--border-dark)',
                                color: 'var(--text-white)',
                                fontFamily: 'monospace',
                                fontSize: '1rem',
                                outline: 'none',
                                textAlign: 'center'
                            }}
                        />
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-gray)', fontWeight: '700', letterSpacing: '0.1em' }}>
                        REAL-TIME_VERIFICATION — RESULTS_UPDATE_AS_YOU_TYPE
                    </div>
                </div>

                {result && (
                    <div className="reveal active" style={{ marginTop: '40px' }}>
                        {result === 'NOT_FOUND' ? (
                            <div className="card" style={{ border: '1px solid var(--error-red)', display: 'flex', alignItems: 'center', gap: '20px', padding: '32px' }}>
                                <WarningOctagon size={32} color="var(--error-red)" />
                                <div>
                                    <h3 style={{ fontSize: '1rem', color: 'var(--error-red)' }}>VERIFICATION_FAILED</h3>
                                    <p style={{ fontSize: '0.85rem' }}>Receipt identifier not found in immutable logs.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="card" style={{ border: '1px solid #fff', padding: '0' }}>
                                <div style={{ padding: '32px', borderBottom: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <SealCheck size={32} color="#fff" />
                                    <div>
                                        <h3 style={{ fontSize: '1rem' }}>VERIFICATION_SUCCESS</h3>
                                        <p style={{ fontSize: '0.8rem', color: '#4caf50', marginTop: '4px', fontWeight: 'bold' }}>
                                            RECEIPT_VALIDATED_SUCCESSFULLY
                                        </p>
                                    </div>
                                </div>
                                <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)' }}>AMOUNT</div>
                                        <div style={{ fontWeight: '800', color: 'var(--text-white)' }}>{result.amount} {result.currency}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)' }}>TIMESTAMP</div>
                                        <div style={{ fontWeight: '800', color: 'var(--text-white)' }}>{result.date}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)' }}>STATUS</div>
                                        <div style={{
                                            fontWeight: '800',
                                            color: result.status === 'Failed' ? 'var(--error-red)' : '#4caf50'
                                        }}>{result.status}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)' }}>TXN_HASH</div>
                                        <div style={{ fontWeight: '800', color: 'var(--text-white)', fontFamily: 'monospace' }}>0x{result.id.toString(16).padStart(8, '0')}</div>
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)' }}>NETWORK_PATH</div>
                                        <div style={{ fontWeight: '800', color: 'var(--text-white)' }}>ACC_{result.from} → ACC_{result.to}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReceiptChecker;
