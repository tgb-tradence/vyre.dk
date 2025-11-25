import React, { useState } from 'react';
import { checkout } from '../lib/shopifyClient';

const CTASection = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        await checkout();
        setIsLoading(false);
    };

    return (
        <section style={{
            padding: '8rem 0',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, var(--color-bg), var(--color-surface))'
        }}>
            <div className="container">
                <h2 className="animate-fade-in" style={{ marginBottom: '2rem' }}>
                    Klar til en opgradering?
                </h2>
                <p className="animate-fade-in" style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '3rem',
                    fontWeight: 300
                }}>
                    Slut dig til tusindvis af glade kunder.
                </p>
                <button
                    className="btn-primary animate-glow"
                    onClick={handleCheckout}
                    disabled={isLoading}
                    style={{ opacity: isLoading ? 0.7 : 1, marginBottom: '2rem' }}
                >
                    {isLoading ? 'Behandler...' : 'Køb VYRE ONE - 799 kr.'}
                </button>

                {/* Payment Icons Placeholder */}
                <div className="animate-fade-in" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    opacity: 0.5,
                    marginTop: '1rem'
                }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>VISA</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Mastercard</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>MobilePay</div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
