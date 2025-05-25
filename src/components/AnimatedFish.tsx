import React, { useEffect, useState, useRef } from 'react';

interface FishProps {
  id: number;
  initialX: number;
  initialY: number;
  sizeFactor: number; // Para variar o tamanho
  speedFactor: number; // Para variar a velocidade
  opacity: number; // Para variar a opacidade individual
}

const Fish = ({ id, initialX, initialY, sizeFactor, speedFactor, opacity: fishOpacity }: FishProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 1.5 * speedFactor, // Ajustado por speedFactor
    y: (Math.random() - 0.5) * 1.0 * speedFactor, // Ajustado por speedFactor
  });
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const fishWidth = 50 * sizeFactor;
  const fishHeight = 30 * sizeFactor; // Ajustado para nova proporção do SVG

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = Math.min(32, currentTime - lastTimeRef.current) / 16.67; // Normalize to 60fps, com clamp
      lastTimeRef.current = currentTime;

      setPosition(prev => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        const boundaryPadding = 20; // Quão longe da borda começa a virar

        // Comportamento de virada suave nas bordas
        const turnStrength = 0.05 * speedFactor;
        if (prev.x < boundaryPadding && newVelX < 0) {
          newVelX += turnStrength * Math.abs(newVelX) + 0.1 * speedFactor; // Vira mais suavemente
        } else if (prev.x > screenWidth - fishWidth - boundaryPadding && newVelX > 0) {
          newVelX -= turnStrength * Math.abs(newVelX) + 0.1 * speedFactor;
        }

        if (prev.y < boundaryPadding && newVelY < 0) {
          newVelY += turnStrength * Math.abs(newVelY) + 0.1 * speedFactor;
        } else if (prev.y > screenHeight - fishHeight - boundaryPadding && newVelY > 0) {
          newVelY -= turnStrength * Math.abs(newVelY) + 0.1 * speedFactor;
        }
        
        // Comportamento de nado mais sutil - mudanças de direção menos frequentes/intensas
        if (Math.random() < 0.005) { // Reduzida a frequência
          newVelX += (Math.random() - 0.5) * 0.15 * speedFactor; // Reduzida a intensidade
          newVelY += (Math.random() - 0.5) * 0.1 * speedFactor;
        }

        // Limite de velocidade
        const maxSpeed = 1.2 * speedFactor;
        const currentSpeed = Math.sqrt(newVelX * newVelX + newVelY * newVelY);
        if (currentSpeed > maxSpeed) {
          newVelX = (newVelX / currentSpeed) * maxSpeed;
          newVelY = (newVelY / currentSpeed) * maxSpeed;
        }
        
        // Mínima velocidade para evitar que parem completamente
        const minSpeed = 0.1 * speedFactor;
        if (currentSpeed < minSpeed && currentSpeed > 0) { // Evita divisão por zero se já parado
            newVelX = (newVelX / currentSpeed) * minSpeed;
            newVelY = (newVelY / currentSpeed) * minSpeed;
        } else if (currentSpeed === 0 && Math.random() < 0.01) { // Se parado, dá um empurrãozinho
            newVelX = (Math.random() - 0.5) * minSpeed * 2;
            newVelY = (Math.random() - 0.5) * minSpeed * 2;
        }


        // Arrasto leve
        newVelX *= 0.995;
        newVelY *= 0.995;

        setVelocity({ x: newVelX, y: newVelY });

        let newX = prev.x + newVelX * deltaTime;
        let newY = prev.y + newVelY * deltaTime;

        // Garantir que não saiam da tela (como um fallback para a virada suave)
        newX = Math.max(0, Math.min(screenWidth - fishWidth, newX));
        newY = Math.max(0, Math.min(screenHeight - fishHeight, newY));
        
        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = 0; // Resetar para o próximo mount se necessário
    };
  }, [velocity.x, velocity.y, fishWidth, fishHeight, speedFactor]); // Adicionar dependências relevantes

  // Ângulo de rotação mais suave e natural
  const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);
  // O flip agora é baseado apenas na direção X da velocidade.
  // Se velocity.x for positivo, ele nada para a direita (scaleX(1)).
  // Se velocity.x for negativo, ele nada para a esquerda (scaleX(-1)).
  const flipX = velocity.x < 0;

  const fishStyle: React.CSSProperties = {
    position: 'absolute', // Mudado de fixed para absolute dentro do container
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${fishWidth}px`,
    height: `${fishHeight}px`,
    transform: ` ${flipX ? 'scaleX(-1)' : 'scaleX(1)'} rotate(${angle}deg)`,
    willChange: 'transform, left, top', // Otimização de performance
    opacity: fishOpacity, // Opacidade individual
    // filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' // Sombra bem sutil ou remover
  };

  // SVG Simplificado e Monocromático
  // Usaremos um azul escuro semi-transparente como exemplo
  // A cor pode ser passada como prop para maior customização
  const fishColor = "rgba(50, 70, 90, 0.7)"; // Exemplo: Azul acinzentado

  return (
    <div style={fishStyle}>
      <svg width="100%" height="100%" viewBox="0 0 50 30" fill="none" preserveAspectRatio="xMidYMid meet">
        <path 
          d="M50 15C50 15 30 25 20 20C10 15 0 15 0 15C0 15 10 5 20 10C30 5 50 15 50 15Z" 
          fill={fishColor} 
        />
        {/* Barbatana dorsal sutil */}
        <path d="M22 10 Q 25 4 28 10" stroke={fishColor} strokeWidth="1" fill="transparent" opacity="0.5"/> 
        {/* Barbatana caudal (rabo) mais integrada */}
         <path d="M0 15 Q 5 12 5 8 L 0 8" fill={fishColor} opacity="0.8"/>
         <path d="M0 15 Q 5 18 5 22 L 0 22" fill={fishColor} opacity="0.8"/>
      </svg>
    </div>
  );
};

const AnimatedFishBackground = () => {
  const [fishes, setFishes] = useState<FishProps[]>([]);

  useEffect(() => {
    const fishCount = 5; // Pode ajustar conforme necessário
    const newFishes = Array.from({ length: fishCount }, (_, i) => {
      const randomSizeFactor = Math.random() * 0.4 + 0.7; // entre 0.7 e 1.1
      const randomSpeedFactor = Math.random() * 0.5 + 0.8; // entre 0.8 e 1.3
      const randomOpacity = Math.random() * 0.3 + 0.4; // entre 0.4 e 0.7
      return {
        id: i,
        initialX: Math.random() * (window.innerWidth - 100) + 50,
        initialY: Math.random() * (window.innerHeight - 100) + 50,
        sizeFactor: randomSizeFactor,
        speedFactor: randomSpeedFactor,
        opacity: randomOpacity,
      };
    });
    setFishes(newFishes);

    // Lidar com redimensionamento da janela
    // (Pode ser mais complexo, mas para este exemplo, apenas recriamos os peixes
    //  para evitar que fiquem presos fora da tela em encolhimentos drásticos.
    //  Uma solução melhor seria reposicioná-los dentro dos novos limites.)
    const handleResize = () => {
       setFishes(prevFishes => prevFishes.map(fish => ({
          ...fish,
          initialX: Math.min(fish.initialX, window.innerWidth - (50 * fish.sizeFactor) - 20), // 50 é a largura base, 20 é padding
          initialY: Math.min(fish.initialY, window.innerHeight - (30 * fish.sizeFactor) - 20), // 30 é a altura base
        })));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10" // -z-10 para garantir que fique atrás de outros conteúdos
      style={{ 
        // opacity: 0.8 // Opacidade geral no container pode ser removida se a opacidade individual for suficiente
      }}
    >
      {fishes.map(fish => (
        <Fish
          key={fish.id}
          id={fish.id}
          initialX={fish.initialX}
          initialY={fish.initialY}
          sizeFactor={fish.sizeFactor}
          speedFactor={fish.speedFactor}
          opacity={fish.opacity}
        />
      ))}
    </div>
  );
};

export default AnimatedFishBackground;
