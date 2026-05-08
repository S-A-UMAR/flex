import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BentoGrid from '../components/BentoGrid';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <BentoGrid />
      
      <section style={{ padding: '6rem 0', background: 'rgba(0, 82, 204, 0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to <span className="gold-text">Level Up?</span></h2>
          <p style={{ color: '#8892B0', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join the elite circle of traders using FLEX for all their digital and tech needs.
          </p>
          <a href="/market" className="btn-gold" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Visit The Marketplace</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
