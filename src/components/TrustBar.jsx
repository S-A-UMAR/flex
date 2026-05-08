import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, Award, Users, Lock } from 'lucide-react';

const badges = [
  { icon: <CheckCircle size={18} />, text: 'Verified Dealer', color: '#FF006E' },
  { icon: <ShieldCheck size={18} />, text: 'Secure Transactions', color: '#00D9FF' },
  { icon: <Zap size={18} />, text: 'Instant Delivery', color: '#FF006E' },
  { icon: <Award size={18} />, text: 'Top Rated 2024', color: '#00D9FF' },
  { icon: <Users size={18} />, text: '10K+ Happy Customers', color: '#FF006E' },
  { icon: <Lock size={18} />, text: '100% Trusted', color: '#00D9FF' },
];

const TrustBar = () => {
  return (
    <section style={{ padding: '3rem 0', background: 'rgba(255, 0, 110, 0.05)', borderTop: '1px solid rgba(0, 217, 255, 0.2)', borderBottom: '1px solid rgba(0, 217, 255, 0.2)' }}>
      <div className="container">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.3rem', fontWeight: '700' }}>
          WHY <span className="gold-text">CHOOSE FLEX</span>
        </h3>
        
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  style={{ color: badge.color }}
                >
                  {badge.icon}
                </motion.div>
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#E8F4F8' }}>
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
