import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-split">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212, 175, 55, 0.1)', padding: '4px 12px', borderRadius: '100px', marginBottom: '1.5rem', border: '1px solid var(--gold)' }}
            >
              <Zap size={14} className="gold-text" />
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px' }}>PREMIUM DIGITAL ECOSYSTEM</span>
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', lineHeight: 0.9, marginBottom: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>
              TRADE <br />
              <span className="gold-text">ELITE</span> <br />
              ASSETS.
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#8892B0', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.6 }}>
              The ultimate destination for High-End Tech, Premium Gaming Accounts, and Verified Social Media Authority. 
              Built for the modern elite.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="/market" className="btn-gold" style={{ padding: '1rem 2.5rem', borderRadius: '4px' }}>Explore Market</a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CCD6F6', fontWeight: 'bold' }}>
                <Shield size={20} color="#0052CC" />
                <span>100% Secured by FLEX</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(0, 82, 204, 0.3) 0%, transparent 70%)',
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              zIndex: 0
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.img 
                src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2074&auto=format&fit=crop" 
                alt="Elite Gaming"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  border: '1px solid var(--gold)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-30px',
                  width: '200px',
                  height: '200px',
                  background: 'url("https://images.unsplash.com/photo-1627672360124-4ed09583e14c?q=80&w=1000&auto=format&fit=crop") center/cover',
                  borderRadius: '16px',
                  border: '4px solid var(--navy)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }}
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
