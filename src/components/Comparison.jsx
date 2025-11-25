import React from 'react';

const Comparison = () => {
    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2>Why Choose VYRE?</h2>
                </div>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'var(--color-bg)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    border: '1px solid var(--color-border)'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1rem 0', borderBottom: '1px solid var(--color-border)', fontWeight: 600 }}>
                        <div>Feature</div>
                        <div style={{ color: 'var(--color-accent)', textAlign: 'center' }}>VYRE Pro</div>
                        <div style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>Leading Brand</div>
                    </div>

                    {[
                        ['Price', '1.495 DKK', '3.495 DKK'],
                        ['Weight', '350g', '560g'],
                        ['Motor Speed', '110,000 RPM', '110,000 RPM'],
                        ['Attachments', '5 Included', 'Sold Separately']
                    ].map(([feature, vyre, other], i) => (
                        <div key={i} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            padding: '1.5rem 0',
                            borderBottom: i === 3 ? 'none' : '1px solid var(--color-border)',
                            alignItems: 'center'
                        }}>
                            <div>{feature}</div>
                            <div style={{ color: 'var(--color-text-primary)', textAlign: 'center', fontWeight: 600 }}>{vyre}</div>
                            <div style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>{other}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;
