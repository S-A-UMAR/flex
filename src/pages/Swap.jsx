import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Repeat, ArrowRightLeft } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';
import FloatingCP from '../components/FloatingCP';

const Swap = () => {
  const [have, setHave] = useState('');
  const [want, setWant] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
      style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative' }}
    >
      <FloatingCP />
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Swap & <span className="gold-text">Trade Portal</span></h1>
        <p style={{ color: '#8892B0' }}>Exchange your old tech or accounts for something better instantly.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center' }}>
            {/* Column 1 */}
            <div>
              <label style={{ display: 'block', marginBottom: '1rem', color: '#8892B0', fontWeight: 'bold' }}>WHAT DO YOU HAVE?</label>
              <input 
                type="text" 
                placeholder="e.g. iPhone 13 Pro"
                value={have}
                onChange={(e) => setHave(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>

            <ArrowRightLeft color="#D4AF37" size={32} />

            {/* Column 2 */}
            <div>
              <label style={{ display: 'block', marginBottom: '1rem', color: '#8892B0', fontWeight: 'bold' }}>WHAT DO YOU WANT?</label>
              <input 
                type="text" 
                placeholder="e.g. CODM Mythic Acc"
                value={want}
                onChange={(e) => setWant(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  padding: '1rem',
                  borderRadius: '8px',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <motion.div 
            style={{ marginTop: '3rem', textAlign: 'center' }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href={generateWhatsAppLink(WHATSAPP_MSGS.SWAP(have || '[item]', want || '[item]'), 'SECONDARY')}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
              style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem' }}
            >
              Get Valuation & Swap Now
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#8892B0' }}>
              * Valuations are based on current market rates and item condition.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Swap;
