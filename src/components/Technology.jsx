import React from 'react';

const TechItem = ({ title, desc, align = 'left' }) => (
    <div className="glass-panel" style={{
        padding: '2rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        maxWidth: '500px',
        marginLeft: align === 'right' ? 'auto' : '0',
        borderLeft: align === 'left' ? '4px solid var(--color-accent)' : 'none',
        borderRight: align === 'right' ? '4px solid var(--color-accent)' : 'none'
    }}>
        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
    </div>
);

const Technology = () => {
    return (
        <section style={{
            padding: 'var(--spacing-xl) 0',
            background: 'var(--color-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Abstract Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(229,228,226,0.05) 0%, rgba(8,8,10,0) 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Science of Shine</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        We didn't just design a hair dryer. We reinvented airflow dynamics.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <TechItem
                            title="V-110 Digital Motor"
                            desc="Spinning at 110,000 RPM, our brushless motor creates a high-velocity jet of controlled air for fast drying and precision styling."
                        />
                        <TechItem
                            title="Intelligent Heat Control"
                            desc="Measures air temperature 40 times a second to prevent extreme heat damage and protect natural shine."
                        />
                        <TechItem
                            title="Negative Ion Technology"
                            desc="Emits 200 million negative ions per cm³ to reduce static and smooth the hair cuticle for a silky finish."
                        />
                    </div>

                    <div className="glass-panel" style={{
                        height: '500px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '2rem',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, transparent 40%, rgba(229,228,226,0.05) 100%)',
                            borderRadius: '2rem'
                        }} />
                        <p style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                            [Internal Motor Schematic Visualization]
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
