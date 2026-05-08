import React from 'react';
import { Gamepad2, Smartphone, Music2, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const services = [
  {
    title: 'CODM CP Load',
    desc: 'Instant COD Points loading. 80 CP to 10,800 CP available now.',
    icon: <Gamepad2 size={32} color="#FF006E" />,
    size: 'col-span-2',
    msg: WHATSAPP_MSGS.CURRENCY('CODM CP', '10800')
  },
  {
    title: 'Elite Accounts',
    desc: 'Verified CODM Mythic & Legendary accounts for pro players.',
    icon: <Gamepad2 size={32} color="#00D9FF" />,
    size: 'col-span-1',
    msg: WHATSAPP_MSGS.BUY('CODM Mythic Account', 'Elite')
  },
  {
    title: 'Tech Swap',
    desc: 'Trade your iPhone or Laptop for the latest models instantly.',
    icon: <Smartphone size={32} color="#FF006E" />,
    size: 'col-span-1',
    msg: WHATSAPP_MSGS.SWAP('iPhone 13', 'iPhone 15 Pro')
  },
  {
    title: 'Social Assets',
    desc: 'Buy/Sell aged TikTok, Instagram, and Facebook accounts.',
    icon: <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Music2 size={24} color="#00D9FF" />
            <Globe size={24} color="#FF006E" />
            <Globe size={24} color="#00D9FF" />
          </div>,
    size: 'col-span-2',
    msg: WHATSAPP_MSGS.BUY('Instagram Account', '10k Followers')
  }
];

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="container" style={{ padding: '4rem 0' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem', fontWeight: 900 }}
      >
        MOBILE <span className="gold-text">TRADING HUB</span>
      </motion.h2>
      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={generateWhatsAppLink(service.msg)}
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: '0 15px 40px rgba(255, 0, 110, 0.25), 0 0 30px rgba(0, 217, 255, 0.15)' }}
            className="glass-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: service.size === 'col-span-2' ? 'span 2' : 'span 1',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <motion.div 
                style={{ marginBottom: '1rem' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: '#8892B0', fontSize: '0.9rem' }}>{service.desc}</p>
            </div>
            <motion.div 
              style={{ color: 'var(--pink)', fontWeight: '900', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase' }}
              whileHover={{ gap: '0.75rem' }}
              transition={{ duration: 0.3 }}
            >
              Get Rates <ArrowRight size={16} />
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoGrid;
