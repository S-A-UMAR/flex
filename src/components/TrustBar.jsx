import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Award, Users, Lock } from 'lucide-react';

const badges = [
  { icon: <CheckCircle size={20} />, text: 'Verified Seller', color: 'var(--teal)' },
  { icon: <ShieldCheck size={20} />, text: 'Secure Payments', color: 'var(--cyan)' },
  { icon: <Zap size={20} />, text: 'Fast Delivery', color: 'var(--teal)' },
  { icon: <Award size={20} />, text: 'Top Rated 2024', color: 'var(--cyan)' },
  { icon: <Users size={20} />, text: '10K+ Customers', color: 'var(--teal)' },
  { icon: <Lock size={20} />, text: '100% Authentic', color: 'var(--cyan)' },
];

const TrustBar = () => {
  return (
    <section style={{ 
      padding: '4rem 0', 
      background: 'rgba(0, 212, 170, 0.03)', 
      borderTop: '1px solid rgba(0, 212, 170, 0.1)', 
      borderBottom: '1px solid rgba(0, 212, 170, 0.1)' 
    }}>
      <div className="container">
        <motion.h3 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '2.5rem', 
            fontSize: '1.4rem', 
            fontWeight: '700',
            letterSpacing: '2px'
          }}
        >
          WHY <span className="gold-text">CHOOSE FLEX</span>
        </motion.h3>
        
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0, 212, 170, 0.15)' }}
              className="glass-card"
              style={{
                padding: '1.5rem 1rem',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '0.75rem'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  style={{ color: badge.color }}
                >
                  {badge.icon}
                </motion.div>
              </div>
              <p style={{ 
                fontSize: '0.85rem', 
                fontWeight: '700', 
                color: 'var(--text-primary)',
                letterSpacing: '0.5px'
              }}>
                {badge.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
