import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Gamepad2, Smartphone, Instagram, Facebook, Music2 } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const services = [
  {
    title: 'CODM CP Load',
    desc: 'Instant COD Points loading. 80 CP to 10,800 CP available now.',
    icon: <Gamepad2 size={32} color="#D4AF37" />,
    size: 'col-span-2',
    msg: WHATSAPP_MSGS.CURRENCY('CODM CP', '10800')
  },
  {
    title: 'Elite Accounts',
    desc: 'Verified CODM Mythic & Legendary accounts for pro players.',
    icon: <Gamepad2 size={32} color="#0052CC" />,
    size: 'col-span-1',
    msg: WHATSAPP_MSGS.BUY('CODM Mythic Account', 'Elite')
  },
  {
    title: 'Tech Swap',
    desc: 'Trade your iPhone or Laptop for the latest models instantly.',
    icon: <Smartphone size={32} color="#D4AF37" />,
    size: 'col-span-1',
    msg: WHATSAPP_MSGS.SWAP('iPhone 13', 'iPhone 15 Pro')
  },
  {
    title: 'Social Assets',
    desc: 'Buy/Sell aged TikTok, Instagram, and Facebook accounts.',
    icon: <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Music2 size={24} color="#00F2EA" />
            <Facebook size={24} color="#1877F2" />
            <Instagram size={24} color="#E4405F" />
          </div>,
    size: 'col-span-2',
    msg: WHATSAPP_MSGS.BUY('Instagram Account', '10k Followers')
  }
];

const BentoGrid = () => {
  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem', fontWeight: 900 }}>
        MOBILE <span className="gold-text">TRADING HUB</span>
      </h2>
      <div className="bento-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: service.size === 'col-span-2' ? 'span 2' : 'span 1'
            }}
          >
            <div>
              <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: '#8892B0', fontSize: '0.9rem' }}>{service.desc}</p>
            </div>
            <a 
              href={generateWhatsAppLink(service.msg)}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: '900', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase' }}
            >
              Get Rates →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
