import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Gamepad2, Smartphone, Share2, Youtube, Music2 } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const services = [
  {
    title: 'USDT Exchange',
    desc: 'Instant crypto-to-cash with premium rates. Zero delay.',
    icon: <Bitcoin size={32} color="#D4AF37" />,
    size: 'col-span-2',
    msg: WHATSAPP_MSGS.USDT('1000')
  },
  {
    title: 'CODM Accounts',
    desc: 'Elite Call of Duty Mobile accounts with Mythics and Legendaries.',
    icon: <Gamepad2 size={32} color="#0052CC" />,
    size: 'col-span-1',
    msg: WHATSAPP_MSGS.BUY('CODM Mythic Account', 'Ghost Riley')
  },
  {
    title: 'Tech Swap',
    desc: 'Upgrade your iPhone, Samsung or Laptop instantly.',
    icon: <Smartphone size={32} color="#D4AF37" />,
    size: 'col-span-1',
    msg: WHATSAPP_MSGS.SWAP('iPhone 13', 'iPhone 15 Pro')
  },
  {
    title: 'Social Authority',
    desc: 'Verified YouTube, Instagram, and TikTok accounts with active reach.',
    icon: <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Youtube size={24} color="#FF0000" />
            <Music2 size={24} color="#00F2EA" />
            <Share2 size={24} color="#0052CC" />
          </div>,
    size: 'col-span-2',
    msg: WHATSAPP_MSGS.BUY('YouTube Channel', 'Monetized')
  }
];

const BentoGrid = () => {
  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem', fontWeight: 900 }}>
        ELITE <span className="gold-text">SOLUTIONS</span>
      </h2>
      <div className="bento-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass-card"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: service.size === 'col-span-2' ? 'span 2' : 'span 1',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <div>
              <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontWeight: 'bold' }}>{service.title}</h3>
              <p style={{ color: '#8892B0', lineHeight: 1.6 }}>{service.desc}</p>
            </div>
            <a 
              href={generateWhatsAppLink(service.msg)}
              target="_blank"
              rel="noreferrer"
              style={{ 
                color: 'var(--gold)', 
                textDecoration: 'none', 
                fontWeight: '900', 
                marginTop: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                letterSpacing: '1px'
              }}
            >
              Get Started <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
