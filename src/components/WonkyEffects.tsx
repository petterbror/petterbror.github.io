import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const WonkyEffects: React.FC = () => {
  const { theme } = useTheme();
  const [raindrops, setRaindrops] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (theme === 'wonky') {
      // Create raindrop elements
      const drops: JSX.Element[] = [];
      for (let i = 0; i < 50; i++) {
        drops.push(
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        );
      }
      setRaindrops(drops);
    } else {
      setRaindrops([]);
    }
  }, [theme]);

  if (theme !== 'wonky') {
    return null;
  }

  return <>{raindrops}</>;
};
