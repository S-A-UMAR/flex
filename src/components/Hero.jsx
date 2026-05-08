import React from 'react';
import { Shield, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingCP from './FloatingCP';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      <FloatingCP />
      <div className="container">
        <div className="hero-split">
          <motion.div 
            style={{ zIndex: 2, textAlign: 'center' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              style={{ 
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
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              style={{ fontSize: 'clamp(3.5rem, 15vw, 6rem)', lineHeight: 0.85, marginBottom: '1.5rem' }}
            >
              FLEX <br />
              <span className="gold-text">DIGITAL</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              style={{ fontSize: '1.1rem', color: '#8892B0', marginBottom: '2.5rem', maxWidth: '400px', margin: '0 auto 2.5rem' }}
            >
              The Premium Hub for CODM CP, Elite Accounts, and Social Media Authority. 
              Verified. Fast. Mobile-First.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}
            >
              <motion.a 
                href="/market" 
                className="btn-gold" 
                style={{ width: '100%', maxWidth: '300px' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Marketplace
              </motion.a>
              <motion.div 
                whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CCD6F6', fontWeight: 'bold', fontSize: '0.8rem' }}
              >
                <Shield size={16} color="#0052CC" />
                <span>INSTANT MOBILE DELIVERY</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ position: 'relative', marginTop: '3rem' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(212, 175, 55, 0.3)' }}
                  style={{
                    width: idx === 1 ? '140px' : '110px',
                    aspectRatio: '1/1',
                    background: `url(${social.img}) center/cover`,
                    borderRadius: '20px',
                    border: '2px solid var(--gold)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                    transform: `rotateY(${social.rotate}deg) translateY(${social.y}px)`,
                    zIndex: idx === 1 ? 2 : 1,
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
