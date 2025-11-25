import React from 'react';

const FeatureCard = ({ title, value, description }) => (
    <div className="glass-panel" style={{
        padding: '2.5rem',
        borderRadius: '1rem', /* Softer radius */
        border: '1px solid var(--color-border)',
        textAlign: 'center', /* Centered for elegance */
        transition: 'var(--transition-smooth)',
        background: 'rgba(255,255,255,0.02)'
    }}>
        <div style={{
            color: 'var(--color-accent)',
            fontSize: '3rem',
            fontWeight: 300,
            marginBottom: '1rem',
            fontFamily: 'var(--font-main)' /* Revert to main font */
        }}>
            {value}
        </div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 500 }}>{title}</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{description}</p>
    </div>
);

const Features = () => {
    const features = [
        { title: 'Airflow Speed', value: '110k', description: 'Digital motor for ultra-fast drying.' },
        { title: 'Weight', value: '350g', description: 'Featherlight design for effortless styling.' },
        { title: 'Noise Level', value: '<75dB', description: 'Whisper-quiet technology.' },
        { title: 'Ion Tech', value: '200M', description: 'Negative ions for frizz-free shine.' }
    ];

    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'transparent' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Engineered for Perfection</h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', fontWeight: 300 }}>
                        Advanced technology meets elegant design.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
