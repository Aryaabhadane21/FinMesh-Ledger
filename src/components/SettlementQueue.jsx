import React, { useState } from 'react';
import { Queue, Timer } from '@phosphor-icons/react';

const SettlementQueue = ({ transactions, onProcess, onAdd }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');

    const handleEnqueue = (e) => {
        e.preventDefault();
        if (!from || !to || !amount) return;
        onAdd({ from, to, amount: Number(amount), currency });
        setFrom('');
        setTo('');
        setAmount('');
        setCurrency('USD');
    };

    return (
        <section className="container">
            <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Queue size={32} color="#fff" />
                    <h2 style={{ fontSize: '1.2rem' }}>FIFO_SETTLEMENT_QUEUE</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button
                        onClick={onProcess}
                        disabled={transactions.length === 0}
                        className="secondary-btn"
                        style={{
                            fontSize: '0.65rem',
                            padding: '8px 20px',
                            fontWeight: '800',
                            letterSpacing: '0.05em',
                            border: '1px solid #333',
                            opacity: transactions.length === 0 ? 0.4 : 1,
                            cursor: transactions.length === 0 ? 'not-allowed' : 'pointer',
                        }}
                    >
                        PROCESS_NEXT
                    </button>
                    <div style={{ padding: '8px 16px', border: '1px solid #222', fontSize: '0.7rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Timer size={14} /> SYSTEM_READY
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border-dark)', border: '1px solid var(--border-dark)' }}>
                {transactions.map((txn, index) => (
                    <div key={txn.id} className="card" style={{ border: 'none', borderRadius: '0', padding: '32px 40px', display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr 1fr 150px', alignItems: 'center', backgroundColor: 'var(--bg-black)' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: '900', color: '#333' }}>#{String(index + 1).padStart(2, '0')}</div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>ORIGIN</div>
                            <div style={{ fontWeight: '700', color: 'var(--text-white)' }}>ACC_{txn.from}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>DESTINATION</div>
                            <div style={{ fontWeight: '700', color: 'var(--text-white)' }}>ACC_{txn.to}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>NET_VOLUME</div>
                            <div style={{ fontWeight: '800', color: 'var(--text-white)', fontSize: '1.2rem' }}>{txn.amount.toLocaleString()}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-gray)', marginBottom: '4px' }}>CURRENCY</div>
                            <div style={{ fontWeight: '700', color: 'var(--text-white)' }}>{txn.currency || 'USD'}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span className="status-badge" style={{ borderColor: '#333', color: '#555' }}>PENDING_CLEARANCE</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ENQUEUE Form */}
            <form onSubmit={handleEnqueue} style={{ marginTop: '48px', padding: '32px', border: '1px solid #222', display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.6rem', fontWeight: '800', color: 'var(--text-gray)', letterSpacing: '0.08em' }}>FROM</label>
                    <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="ACC_ID" style={{ padding: '10px 14px', backgroundColor: 'var(--bg-black)', border: '1px solid #333', color: 'var(--text-white)', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'inherit', outline: 'none', width: '120px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.6rem', fontWeight: '800', color: 'var(--text-gray)', letterSpacing: '0.08em' }}>TO</label>
                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="ACC_ID" style={{ padding: '10px 14px', backgroundColor: 'var(--bg-black)', border: '1px solid #333', color: 'var(--text-white)', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'inherit', outline: 'none', width: '120px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.6rem', fontWeight: '800', color: 'var(--text-gray)', letterSpacing: '0.08em' }}>AMOUNT</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" style={{ padding: '10px 14px', backgroundColor: 'var(--bg-black)', border: '1px solid #333', color: 'var(--text-white)', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'inherit', outline: 'none', width: '120px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.6rem', fontWeight: '800', color: 'var(--text-gray)', letterSpacing: '0.08em' }}>CURRENCY</label>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={{ padding: '10px 14px', backgroundColor: 'var(--bg-black)', border: '1px solid #333', color: 'var(--text-white)', fontSize: '0.75rem', fontWeight: '700', fontFamily: 'inherit', outline: 'none', cursor: 'pointer' }}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
                <button type="submit" className="secondary-btn" style={{ fontSize: '0.65rem', padding: '10px 24px', fontWeight: '800', letterSpacing: '0.05em', border: '1px solid #333', cursor: 'pointer' }}>
                    ENQUEUE
                </button>
            </form>
        </section>
    );
};

export default SettlementQueue;
