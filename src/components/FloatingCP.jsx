import React, { useEffect, useState } from 'react';
import { Gem } from 'lucide-react';

const FloatingCP = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newIcon = {
        id,
        left: Math.random() * 100 + '%',
        size: Math.random() * 20 + 10 + 'px',
        duration: Math.random() * 10 + 5 + 's',
      };
      setIcons(prev => [...prev, newIcon]);
      
      // Cleanup
      setTimeout(() => {
        setIcons(prev => prev.filter(icon => icon.id !== id));
      }, 15000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
      {icons.map(icon => (
        <div
          key={icon.id}
          className="floating-cp"
          style={{
            left: icon.left,
            fontSize: icon.size,
            animationDuration: icon.duration,
            bottom: '-50px'
          }}
        >
          <Gem size={parseInt(icon.size)} />
        </div>
      ))}
    </div>
  );
};

export default FloatingCP;
