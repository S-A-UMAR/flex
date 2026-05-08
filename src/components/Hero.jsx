import React from 'react';
import { Shield, Zap, Sparkles } from 'lucide-react';
import FloatingCP from './FloatingCP';

const Hero = () => {
  return (
    <section className="hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      <FloatingCP />
      <div className="container">
        <div className="hero-split">
          <div style={{ zIndex: 2, textAlign: 'center' }}>
            <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                background: 'rgba(212, 175, 55, 0.1)', 
                padding: '6px 16px', 
                borderRadius: '100px', 
                marginBottom: '1.5rem', 
                border: '1px solid var(--gold)' 
              }}
            >
              <Sparkles size={14} className="gold-text" />
              <span style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '2px' }}>MOBILE ELITE TRADING</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(3.5rem, 15vw, 6rem)', lineHeight: 0.85, marginBottom: '1.5rem' }}>
              FLEX <br />
              <span className="gold-text">DIGITAL</span>
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: '#8892B0', marginBottom: '2.5rem', maxWidth: '400px', margin: '0 auto 2.5rem' }}>
              The Premium Hub for CODM CP, Elite Accounts, and Social Media Authority. 
              Verified. Fast. Mobile-First.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <a href="/market" className="btn-gold" style={{ width: '100%', maxWidth: '300px' }}>
                Visit Marketplace
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CCD6F6', fontWeight: 'bold', fontSize: '0.8rem' }}>
                <Shield size={16} color="#0052CC" />
                <span>INSTANT MOBILE DELIVERY</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', marginTop: '3rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '10px',
              perspective: '1000px'
            }}>
              {[
                { name: 'TikTok', img: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format&fit=crop', rotate: -15, y: 20 },
                { name: 'Facebook', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=400&auto=format&fit=crop', rotate: 0, y: 0 },
                { name: 'Instagram', img: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=400&auto=format&fit=crop', rotate: 15, y: 20 }
              ].map((social, idx) => (
                <div
                  key={idx}
                  style={{
                    width: idx === 1 ? '140px' : '110px',
                    aspectRatio: '1/1',
                    background: `url(${social.img}) center/cover`,
                    borderRadius: '20px',
                    border: '2px solid var(--gold)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                    transform: `rotateY(${social.rotate}deg) translateY(${social.y}px)`,
                    zIndex: idx === 1 ? 2 : 1
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
