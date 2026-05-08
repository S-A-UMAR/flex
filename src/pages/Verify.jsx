import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, UserCheck, Globe, Youtube, Instagram, Music2 } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_MSGS } from '../utils/whatsapp';

const steps = [
  {
    icon: <Globe size={32} color="#0052CC" />,
    title: 'Platform Selection',
    desc: 'Choose Instagram, YouTube, FB, or TikTok for verification.'
  },
  {
    icon: <UserCheck size={32} color="#D4AF37" />,
    title: 'Profile Audit',
    desc: 'Our experts perform a professional audit of your account.'
  },
  {
    icon: <ShieldCheck size={32} color="#0052CC" />,
    title: 'Secure Submission',
    desc: 'We handle all documentation and direct platform filing.'
  },
  {
    icon: <CheckCircle2 size={32} color="#D4AF37" />,
    title: 'Badge Secured',
    desc: 'Receive your verified badge and elite status.'
  }
];

const Verify = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container"
      style={{ paddingTop: '120px', paddingBottom: '80px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem' }}>GET <span className="gold-text">VERIFIED</span></h1>
        <p style={{ color: '#8892B0', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Stop waiting for the algorithm. Secure your blue tick through our elite professional verification services.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="glass-card" 
            style={{ padding: '2.5rem', textAlign: 'center', position: 'relative' }}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
             <div style={{ 
               position: 'absolute', 
               top: '-15px', 
               left: '50%', 
               transform: 'translateX(-50%)',
               background: 'var(--navy)',
               padding: '0 15px',
               color: 'var(--gold)',
               fontWeight: '900',
               fontSize: '1.8rem',
               border: '1px solid rgba(212, 175, 55, 0.2)',
               borderRadius: '8px'
             }}>
               0{index + 1}
             </div>
             <div style={{ marginBottom: '1.5rem' }}>{step.icon}</div>
             <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem', fontWeight: 'bold' }}>{step.title}</h3>
             <p style={{ color: '#8892B0', fontSize: '0.95rem', lineHeight: 1.5 }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(rgba(0, 82, 204, 0.15), transparent)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', fontWeight: '900' }}>START YOUR VERIFICATION</h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { name: 'Instagram', icon: <Instagram size={18} /> },
            { name: 'YouTube', icon: <Youtube size={18} /> },
            { name: 'TikTok', icon: <Music2 size={18} /> },
            { name: 'Facebook', icon: <Globe size={18} /> }
          ].map(platform => (
            <a
              key={platform.name}
              href={generateWhatsAppLink(WHATSAPP_MSGS.VERIFY(platform.name))}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
              style={{ minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderRadius: '4px' }}
            >
              {platform.icon} Verify {platform.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Verify;
