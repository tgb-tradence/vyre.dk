import React, { useState } from 'react';
import heroProduct from '../assets/hero-product-silver.png';
import { checkout } from '../lib/shopifyClient';

const HeroSection = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        await checkout();
        setIsLoading(false);
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '6rem 2rem 2rem',
            overflow: 'hidden'
        }}>
            {/* Background Gradient Effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90vw',
                height: '90vw',
                background: 'radial-gradient(circle, rgba(138,155,168,0.1) 0%, rgba(17,19,23,0) 60%)', /* Steel Blue Glow */
                zIndex: -1
            }} />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                zIndex: 1
            }}>
                <div style={{ textAlign: 'left' }}>
                    <div className="animate-fade-in" style={{
                        color: 'var(--color-accent)',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 600
                    }}>
                        Luksus Performance
                    </div>
                    <h1 className="animate-fade-in" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Power. Precision.<br />VYRE.
                    </h1>
                    <p className="animate-fade-in" style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2rem',
                        animationDelay: '0.2s',
                        maxWidth: '450px'
                    }}>
                        En hårtørrer i luksuskvalitet – designet til både mænd og kvinder.
                    </p>

                    {/* Trust Badges */}
                    <div className="animate-fade-in" style={{
                        display: 'flex',
                        gap: '1.5rem',
                        marginBottom: '2.5rem',
                        animationDelay: '0.3s',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-secondary)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>✓</span> Fri fragt
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>✓</span> 30 dages returret
                        </div>
                    </div>

                    <div className="animate-fade-in" style={{ animationDelay: '0.4s', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <button
                            className="btn-primary animate-glow"
                            onClick={handleCheckout}
                            disabled={isLoading}
                            style={{ opacity: isLoading ? 0.7 : 1 }}
                        >
                            {isLoading ? 'Behandler...' : 'Forudbestil - 799 kr.'}
                        </button>
                        <button className="btn-secondary">Se specs</button>
                    </div>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', opacity: 0.7 }}>
                        *Begrænset antal i første batch
                    </p>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.6s', display: 'flex', justifyContent: 'center' }}>
                    <div className="animate-float" style={{
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <img
                            src={heroProduct}
                            alt="VYRE Hårtørrer"
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                height: 'auto',
                                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
