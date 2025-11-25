import React from 'react';

const UnisexSection = () => {
    const hairTypes = [
        { label: 'Kort Hår', icon: '✂️' },
        { label: 'Langt Hår', icon: '✨' },
        { label: 'Krøller', icon: '🌀' },
        { label: 'Fint Hår', icon: '💨' },
        { label: 'Tykt Hår', icon: '🦁' }
    ];

    return (
        <section style={{
            padding: 'var(--spacing-xl) 0',
            background: 'var(--color-light)',
            color: 'var(--color-surface)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{
                            color: 'var(--color-bg)',
                            marginBottom: '1.5rem',
                            fontSize: '2.5rem'
                        }}>
                            Designet til alle hårtyper.
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            color: '#666',
                            maxWidth: '400px'
                        }}>
                            VYRE ONE er udviklet med intelligent varmestyring og kraftig luftstrøm, der tilpasser sig din styling – uanset om du har kort, langt, fint eller krøllet hår.
                        </p>
                        <ul style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1rem',
                            listStyle: 'none'
                        }}>
                            {hairTypes.map((type, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: 600,
                                    color: 'var(--color-surface)'
                                }}>
                                    <span style={{ fontSize: '1.2rem' }}>{type.icon}</span> {type.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{
                        background: '#E0E0E0',
                        height: '400px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999'
                    }}>
                        {/* Placeholder for Unisex Lifestyle Image */}
                        [Unisex Lifestyle Image Placeholder]
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnisexSection;
