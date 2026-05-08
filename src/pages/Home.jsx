import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BentoGrid from '../components/BentoGrid';
import FAQ from '../components/FAQ';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <Hero />
      <TrustBar />
      <BentoGrid />
      
      {/* Featured Products Section */}
      <section style={{ padding: '5rem 0', background: 'rgba(0, 212, 170, 0.02)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                FEATURED <span className="gold-text">PRODUCTS</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Top picks from our collection
              </p>
            </div>
            <motion.a
              href="/shop"
              whileHover={{ x: 5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--teal)',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.9rem',
                textTransform: 'uppercase'
              }}
            >
              View All <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={() => {}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 170, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}
          >
            Ready to <span className="gold-text">Upgrade?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            Join thousands of satisfied customers who trust FLEX for all their tech needs. 
            Premium products, fast delivery, authentic quality.
          </motion.p>
          <motion.a 
            href="/shop"
            className="btn-gold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', display: 'inline-flex' }}
          >
            <Zap size={20} />
            Shop Now
          </motion.a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer style={{ 
        padding: '3rem 0', 
        borderTop: '1px solid rgba(0, 212, 170, 0.1)',
        background: 'rgba(10, 15, 26, 0.5)'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <img 
                  src="/logo.jpg" 
                  alt="FLEX Logo" 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }} 
                />
                <span style={{ 
                  fontWeight: '900', 
                  fontSize: '1.4rem', 
                  background: 'linear-gradient(to right, var(--teal), var(--cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '2px' 
                }}>
                  FLEX
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Premium Tech Store - Quality Guaranteed
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
              {/* Social Links */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon"
                  style={{ width: '40px', height: '40px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon"
                  style={{ width: '40px', height: '40px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon"
                  style={{ width: '40px', height: '40px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(0, 212, 170, 0.1)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem'
          }}>
            <p>&copy; {new Date().getFullYear()} FLEX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
