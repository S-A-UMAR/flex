import React from 'react';
import { Shield, Zap, Sparkles, Smartphone, Laptop, Gamepad2, Headphones } from 'lucide-react';
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

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const techItems = [
    { icon: <Smartphone size={24} />, label: 'Phones', delay: 0 },
    { icon: <Laptop size={24} />, label: 'Laptops', delay: 0.1 },
    { icon: <Gamepad2 size={24} />, label: 'Gaming', delay: 0.2 },
    { icon: <Headphones size={24} />, label: 'Audio', delay: 0.3 },
  ];

  return (
    <section className="hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      <FloatingCP />
      
      {/* Background Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '4rem',
          paddingTop: '2rem'
        }}>
          {/* Main Content */}
          <motion.div 
            style={{ zIndex: 2, textAlign: 'center', maxWidth: '800px' }}
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
                background: 'rgba(0, 212, 170, 0.1)', 
                padding: '8px 20px', 
                borderRadius: '100px', 
                marginBottom: '2rem', 
                border: '1px solid rgba(0, 212, 170, 0.3)' 
              }}
            >
              <Sparkles size={16} style={{ color: 'var(--teal)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', color: 'var(--teal)' }}>PREMIUM TECH STORE</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(3rem, 12vw, 5.5rem)', 
                lineHeight: 1, 
                marginBottom: '1.5rem',
                fontWeight: 900
              }}
            >
              LEVEL UP YOUR <br />
              <span className="gold-text">TECH GAME</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: '1.15rem', 
                color: 'var(--text-secondary)', 
                marginBottom: '2.5rem', 
                maxWidth: '550px', 
                margin: '0 auto 2.5rem',
                lineHeight: 1.7
              }}
            >
              Your one-stop shop for premium phones, laptops, gaming gear, and accessories. 
              Quality guaranteed. Fast delivery.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <motion.a 
                  href="/shop" 
                  className="btn-gold" 
                  style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 170, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Zap size={18} />
                  Shop Now
                </motion.a>
                <motion.a 
                  href="/market" 
                  style={{ 
                    padding: '1rem 2.5rem', 
                    fontSize: '1rem',
                    background: 'transparent',
                    border: '2px solid var(--glass-border)',
                    borderRadius: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textTransform: 'uppercase'
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'var(--teal)',
                    background: 'rgba(0, 212, 170, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Browse Market
                </motion.a>
              </div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--text-secondary)', 
                  fontWeight: 'bold', 
                  fontSize: '0.85rem' 
                }}
              >
                <Shield size={16} color="var(--teal)" />
                <span>FAST DELIVERY NATIONWIDE</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tech Category Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {techItems.map((item, idx) => (
              <motion.a
                key={idx}
                href="/shop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + item.delay }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px rgba(0, 212, 170, 0.2)',
                  borderColor: 'var(--teal)'
                }}
                className="glass-card"
                style={{
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  minWidth: '120px',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div 
                  style={{ color: 'var(--teal)' }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
                <span style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <span style={{ 
              fontSize: '0.75rem', 
              color: 'var(--text-secondary)', 
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              Follow Us
            </span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* TikTok */}
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              
              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </motion.a>
              
              {/* Facebook */}
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Featured Products Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '1rem'
            }}
          >
            {[
              { img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&auto=format&fit=crop', name: 'iPhone 15' },
              { img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&auto=format&fit=crop', name: 'MacBook' },
              { img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&auto=format&fit=crop', name: 'Controller' },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: `${idx * 0.5}s` }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={product.img} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.75rem',
                  background: 'linear-gradient(transparent, rgba(10, 15, 26, 0.9))',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  {product.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
