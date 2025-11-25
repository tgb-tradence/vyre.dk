import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Technology from './components/Technology';
import UnisexSection from './components/UnisexSection';
import Reviews from './components/Reviews';
import Comparison from './components/Comparison';
import CTASection from './components/CTASection';
import { checkout } from './lib/shopifyClient';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        background: 'rgba(17, 19, 23, 0.8)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.05em', color: 'var(--color-text-primary)' }}>VYRE</div>
        <button
          className="btn-primary"
          style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
          onClick={checkout}
        >
          Forudbestil
        </button>
      </nav>

      <HeroSection />
      <Features />
      <UnisexSection />
      <Technology />
      <Reviews />
      <Comparison />
      <CTASection />

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
        <p>&copy; 2025 VYRE Labs. All rights reserved.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem' }}>
          <span>Handelsbetingelser</span>
          <span>Privatlivspolitik</span>
          <span>Kontakt</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
