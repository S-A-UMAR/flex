import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BentoGrid from '../components/BentoGrid';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <BentoGrid />
      
      <section style={{ padding: '6rem 0', background: 'rgba(0, 82, 204, 0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
          >
            Ready to <span className="gold-text">Level Up?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: '#8892B0', maxWidth: '600px', margin: '0 auto 2rem' }}
          >
            Join the elite circle of traders using FLEX for all their digital and tech needs.
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
            style={{ padding: '1rem 3rem', fontSize: '1.2rem', display: 'inline-block' }}
          >
            Shop Now
          </motion.a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
