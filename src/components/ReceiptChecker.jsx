import React, { useState } from 'react';
import { MagnifyingGlass, CheckCircle, WarningCircle } from '@phosphor-icons/react';

const ReceiptChecker = () => {
    const [receipt, setReceipt] = useState('');
    const [result, setResult] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const validReceipts = ['FM-123', 'FM-456', 'FM-789'];

    const checkReceipt = (e) => {
        e.preventDefault();
        if (!receipt.trim()) return;

        setIsSpinning(true);
        setTimeout(() => {
            if (validReceipts.includes(receipt.toUpperCase())) {
                setResult({ status: 'success', msg: '✓ Valid Receipt', details: 'Transaction verified against official account files.' });
            } else {
                setResult({ status: 'error', msg: '✗ Invalid Receipt', details: 'No such record found in our digital ledger.' });
            }
            setIsSpinning(false);
        }, 800);
    };

    return (
        <section className="reveal" style={{ backgroundColor: 'var(--bg-black)', padding: '120px 20px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '48px', marginBottom: '24px', fontFamily: 'Playfair Display' }}>Receipt Checker</h2>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.25rem', marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px auto', fontFamily: 'Inter' }}>
                    A fast search tool that instantly verifies a transaction's receipt number against the official account files.
                </p>

                <form onSubmit={checkReceipt} style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    padding: '12px',
                    backgroundColor: 'var(--bg-dark)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-dark)'
                }}>
                    <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <MagnifyingGlass size={28} color="var(--text-gray)" style={{ position: 'absolute', left: '20px' }} />
                        <input
                            type="text"
                            placeholder="Enter Receipt Number (e.g. FM-123)..."
                            value={receipt}
                            onChange={(e) => setReceipt(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '20px 20px 20px 64px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'var(--text-white)',
                                fontSize: '1.2rem',
                                outline: 'none',
                                fontFamily: 'Inter'
                            }}
                        />
                    </div>
                    <button type="submit" style={{
                        height: '60px',
                        padding: '0 48px',
                        borderRadius: '12px',
                        fontWeight: '700',
                        fontSize: '1rem'
                    }}>Verify</button>
                </form>

                {result && (
                    <div className="reveal active" style={{
                        marginTop: '64px',
                        padding: '48px',
                        borderRadius: '16px',
                        backgroundColor: 'var(--bg-card)',
                        border: `1px solid ${result.status === 'success' ? 'var(--text-white)' : 'var(--error-red)'}`,
                        display: 'inline-block',
                        animation: 'slideUp 0.9s ease forwards'
                    }}>
                        <div className={isSpinning ? 'spinning-number' : ''} style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: result.status === 'success' ? 'var(--text-white)' : 'var(--error-red)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '16px',
                            fontFamily: 'Playfair Display'
                        }}>
                            {result.status === 'success' ? <CheckCircle size={40} weight="fill" /> : <WarningCircle size={40} weight="fill" />}
                            {result.msg}
                        </div>
                        <p style={{ marginTop: '16px', color: 'var(--text-gray)', fontSize: '1.1rem', fontFamily: 'Inter' }}>{result.details}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReceiptChecker;
