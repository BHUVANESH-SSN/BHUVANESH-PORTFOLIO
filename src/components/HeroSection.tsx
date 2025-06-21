
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { StarGalaxyBackground } from './StarGalaxyBackground';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarGalaxyBackground />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <img
            src="https://avatars.githubusercontent.com/u/150337133?v=4"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full border-4 border-neon-gold mx-auto mb-6 object-cover shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-tech font-bold mb-6 text-neon-gold">
            <span 
              className="glow-text"
              style={{
                textShadow: '0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 30px #FF8C00'
              }}
            >
              JOHN DOE
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8"
        >
          <div className="text-xl md:text-2xl font-tech text-neon-gold mb-4">
            <TypeAnimation
              sequence={[
                'Machine Learning Enthusiast',
                2000,
                'Full Stack Developer',
                2000,
                'Ethical Hacker',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="typewriter-text"
              style={{
                borderRight: '2px solid #FFD700',
                paddingRight: '5px',
                textShadow: '0 0 10px #FFD700'
              }}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-tech"
        >
          Aspiring Full Stack Developer & Ethical Hacker
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-transparent border-2 border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black font-tech text-lg px-8 py-4 group transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
            }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Resume
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black font-tech text-lg px-8 py-4 group transition-all duration-300 bg-transparent"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Contact
          </Button>
          
          <Button
            size="lg"
            variant="ghost"
            className="text-neon-gold hover:bg-neon-gold hover:text-black font-tech text-lg px-8 py-4 group transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
            GitHub
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
