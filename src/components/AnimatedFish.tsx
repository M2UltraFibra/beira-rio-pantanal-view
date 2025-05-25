
import React, { useEffect, useState } from 'react';

interface FishProps {
  id: number;
  initialX: number;
  initialY: number;
}

const Fish = ({ id, initialX, initialY }: FishProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [direction, setDirection] = useState({ x: 1, y: 0.5 });

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + direction.x * 0.5;
        let newY = prev.y + direction.y * 0.3;
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        // Bounce off edges and change direction
        if (newX <= 0 || newX >= window.innerWidth - 50) {
          newDirectionX = -newDirectionX;
        }
        if (newY <= 0 || newY >= window.innerHeight - 50) {
          newDirectionY = -newDirectionY;
        }

        // Random direction changes for natural movement
        if (Math.random() < 0.02) {
          newDirectionX += (Math.random() - 0.5) * 0.5;
          newDirectionY += (Math.random() - 0.5) * 0.5;
        }

        setDirection({ x: newDirectionX, y: newDirectionY });

        return {
          x: Math.max(0, Math.min(window.innerWidth - 50, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 50, newY))
        };
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, [direction]);

  const fishStyle = {
    transform: `translate(${position.x}px, ${position.y}px) ${direction.x > 0 ? 'scaleX(1)' : 'scaleX(-1)'}`,
    transition: 'transform 0.05s linear'
  };

  return (
    <div 
      className="fixed pointer-events-none z-10 opacity-20"
      style={fishStyle}
    >
      <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
        <path 
          d="M5 12.5C5 12.5 15 5 25 12.5C15 20 5 12.5 5 12.5Z" 
          fill="#FFD700" 
          stroke="#FFA500" 
          strokeWidth="1"
        />
        <path 
          d="M25 12.5L35 8L30 12.5L35 17L25 12.5Z" 
          fill="#FFD700" 
          stroke="#FFA500" 
          strokeWidth="1"
        />
        <circle cx="18" cy="10" r="1.5" fill="#FF6B35" />
        <path 
          d="M8 12.5C8 12.5 12 10 15 12.5C12 15 8 12.5 8 12.5Z" 
          fill="#FFA500"
        />
      </svg>
    </div>
  );
};

const AnimatedFish = () => {
  const [fishes, setFishes] = useState<FishProps[]>([]);

  useEffect(() => {
    const fishCount = 3;
    const newFishes = Array.from({ length: fishCount }, (_, i) => ({
      id: i,
      initialX: Math.random() * (window.innerWidth - 100),
      initialY: Math.random() * (window.innerHeight - 100)
    }));
    setFishes(newFishes);
  }, []);

  return (
    <>
      {fishes.map(fish => (
        <Fish 
          key={fish.id} 
          id={fish.id} 
          initialX={fish.initialX} 
          initialY={fish.initialY} 
        />
      ))}
    </>
  );
};

export default AnimatedFish;
