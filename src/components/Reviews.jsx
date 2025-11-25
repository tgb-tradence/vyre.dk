import React from 'react';

const ReviewCard = ({ name, rating, text }) => (
    <div style={{
        background: 'rgba(255,255,255,0.03)',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid var(--color-border)'
    }}>
        <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
            {'★'.repeat(rating)}
        </div>
        <p style={{
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6
        }}>
            "{text}"
        </p>
        <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
            {name}
        </div>
    </div>
);

const Reviews = () => {
    const reviews = [
        { name: 'Anders M.', rating: 5, text: 'Føles som en luksusversion af min gamle hårtørrer. Helt stille og super effektiv.' },
        { name: 'Sofie K.', rating: 5, text: 'Designet matcher endelig resten af mit badeværelse. Elsker den matte finish.' },
        { name: 'Mads P.', rating: 5, text: 'Perfekt balance mellem kraft og kontrol. Min kæreste og jeg slås om den hver morgen.' }
    ];

    return (
        <section style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Det siger kunderne</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        Slut dig til tusindvis af tilfredse brugere.
                    </p>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map((r, i) => (
                        <ReviewCard key={i} {...r} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
