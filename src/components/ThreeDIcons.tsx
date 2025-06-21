
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ThreeDIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const icons = [
    { emoji: '💻', position: { x: '10%', y: '20%' }, delay: 0 },
    { emoji: '🚀', position: { x: '90%', y: '30%' }, delay: 0.2 },
    { emoji: '⚡', position: { x: '15%', y: '70%' }, delay: 0.4 },
    { emoji: '🎯', position: { x: '85%', y: '75%' }, delay: 0.6 },
    { emoji: '🔐', position: { x: '50%', y: '15%' }, delay: 0.8 },
    { emoji: '🧠', position: { x: '25%', y: '45%' }, delay: 1.0 },
    { emoji: '🎨', position: { x: '75%', y: '55%' }, delay: 1.2 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl cursor-pointer pointer-events-auto"
          style={{
            left: icon.position.x,
            top: icon.position.y,
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotateX: -90,
            z: -100
          }}
          animate={{ 
            opacity: 0.7, 
            scale: 1,
            rotateX: 0,
            z: 0
          }}
          transition={{ 
            duration: 1, 
            delay: icon.delay,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.5,
            rotateY: 180,
            z: 50,
            opacity: 1,
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))',
            transition: { duration: 0.3 }
          }}
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 5, -5, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {icon.emoji}
        </motion.div>
      ))}
    </div>
  );
};
