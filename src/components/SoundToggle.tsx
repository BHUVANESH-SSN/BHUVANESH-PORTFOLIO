
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const playSound = () => {
    if (soundEnabled) {
      // Create a simple beep sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Button
        onClick={() => {
          setSoundEnabled(!soundEnabled);
          playSound();
        }}
        variant="outline"
        size="sm"
        className="bg-transparent border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black transition-all duration-300"
      >
        {soundEnabled ? '🔊' : '🔇'}
      </Button>
    </motion.div>
  );
};
