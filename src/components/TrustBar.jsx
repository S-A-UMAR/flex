import React from 'react';
import { CheckCircle, ShieldCheck, Zap, Award } from 'lucide-react';

const badges = [
  { icon: <CheckCircle size={18} />, text: 'Verified Dealer' },
  { icon: <ShieldCheck size={18} />, text: 'Instant Payment' },
  { icon: <Zap size={18} />, text: 'Fast Delivery' },
  { icon: <Award size={18} />, text: 'Top Rated 2024' },
];

const TrustBar = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...badges, ...badges, ...badges].map((badge, index) => (
          <div key={index} className="marquee-item gold-text">
            {badge.icon}
            <span style={{ marginLeft: '0.5rem' }}>{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
