import React, { useEffect, useState, useRef } from 'react';

interface FishProps {
  id: number;
  initialX: number;
  initialY: number;
}

const Fish = ({ id, initialX, initialY }: FishProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity, setVelocity] = useState({ 
    x: (Math.random() - 0.5) * 2, 
    y: (Math.random() - 0.5) * 1.5 
  });
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 16.67; // Normalize to 60fps
      lastTimeRef.current = currentTime;

      setPosition(prev => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const fishWidth = 50;
        const fishHeight = 35;

        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Smooth boundary collision with damping
        if (prev.x <= 0 && newVelX < 0) {
          newVelX = Math.abs(newVelX) * 0.8;
        } else if (prev.x >= screenWidth - fishWidth && newVelX > 0) {
          newVelX = -Math.abs(newVelX) * 0.8;
        }

        if (prev.y <= 0 && newVelY < 0) {
          newVelY = Math.abs(newVelY) * 0.8;
        } else if (prev.y >= screenHeight - fishHeight && newVelY > 0) {
          newVelY = -Math.abs(newVelY) * 0.8;
        }

        // Natural swimming behavior - subtle random movements
        if (Math.random() < 0.008) {
          newVelX += (Math.random() - 0.5) * 0.3;
          newVelY += (Math.random() - 0.5) * 0.2;
        }

        // Speed limiting for natural movement
        const maxSpeed = 1.5;
        const speed = Math.sqrt(newVelX * newVelX + newVelY * newVelY);
        if (speed > maxSpeed) {
          newVelX = (newVelX / speed) * maxSpeed;
          newVelY = (newVelY / speed) * maxSpeed;
        }

        // Apply slight drag for more natural movement
        newVelX *= 0.999;
        newVelY *= 0.999;

        setVelocity({ x: newVelX, y: newVelY });

        const newX = Math.max(0, Math.min(screenWidth - fishWidth, prev.x + newVelX * deltaTime));
        const newY = Math.max(0, Math.min(screenHeight - fishHeight, prev.y + newVelY * deltaTime));

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity]);

  // Calculate rotation based on velocity for natural swimming angle
  const angle = Math.atan2(velocity.y, Math.abs(velocity.x)) * (180 / Math.PI);
  const flipX = velocity.x < 0;

  const fishStyle = {
    transform: `translate(${position.x}px, ${position.y}px) ${flipX ? 'scaleX(-1)' : 'scaleX(1)'} rotate(${flipX ? -angle : angle}deg)`,
    filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
  };

  return (
    <div 
      className="fixed pointer-events-none z-10"
      style={fishStyle}
    >
      <svg width="50" height="35" viewBox="0 0 50 35" fill="none">
        {/* Main body with gradient */}
        <defs>
          <linearGradient id={`goldGradient${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          <linearGradient id={`finGradient${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#DAA520" />
          </linearGradient>
        </defs>
        
        {/* Fish body */}
        <ellipse 
          cx="20" 
          cy="17.5" 
          rx="15" 
          ry="8" 
          fill={`url(#goldGradient${id})`}
          stroke="#B8860B" 
          strokeWidth="0.5"
        />
        
        {/* Tail fin */}
        <path 
          d="M35 17.5L45 10L42 17.5L45 25L35 17.5Z" 
          fill={`url(#finGradient${id})`}
          stroke="#B8860B" 
          strokeWidth="0.5"
        />
        
        {/* Top fin */}
        <path 
          d="M18 9C18 9 22 5 25 9C22 11 18 9 18 9Z" 
          fill={`url(#finGradient${id})`}
          stroke="#B8860B" 
          strokeWidth="0.3"
        />
        
        {/* Bottom fin */}
        <path 
          d="M18 26C18 26 22 30 25 26C22 24 18 26 18 26Z" 
          fill={`url(#finGradient${id})`}
          stroke="#B8860B" 
          strokeWidth="0.3"
        />
        
        {/* Eye */}
        <circle cx="15" cy="14" r="2" fill="white" />
        <circle cx="15" cy="14" r="1.2" fill="#333" />
        <circle cx="15.5" cy="13.5" r="0.4" fill="white" />
        
        {/* Gill detail */}
        <path 
          d="M10 15C10 15 12 13 13 17.5C12 22 10 20 10 15Z" 
          fill="#DAA520"
          opacity="0.6"
        />
        
        {/* Body scales pattern */}
        <circle cx="18" cy="15" r="1" fill="#DAA520" opacity="0.4" />
        <circle cx="22" cy="18" r="1" fill="#DAA520" opacity="0.4" />
        <circle cx="25" cy="16" r="1" fill="#DAA520" opacity="0.4" />
      </svg>
    </div>
  );
};

const AnimatedFish = () => {
  const [fishes, setFishes] = useState<FishProps[]>([]);

  useEffect(() => {
    const fishCount = 4;
    const newFishes = Array.from({ length: fishCount }, (_, i) => ({
      id: i,
      initialX: Math.random() * (window.innerWidth - 100) + 50,
      initialY: Math.random() * (window.innerHeight - 100) + 50
    }));
    setFishes(newFishes);

    // Handle window resize
    const handleResize = () => {
      setFishes(prevFishes => 
        prevFishes.map(fish => ({
          ...fish,
          initialX: Math.min(fish.initialX, window.innerWidth - 100),
          initialY: Math.min(fish.initialY, window.innerHeight - 100)
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ opacity: 0.6 }}>
      {fishes.map(fish => (
        <Fish 
          key={fish.id} 
          id={fish.id} 
          initialX={fish.initialX} 
          initialY={fish.initialY} 
        />
      ))}
    </div>
  );
};

export default AnimatedFish;
