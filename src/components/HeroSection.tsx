
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ParticleBackground } from './ParticleBackground';
import { ThreeDIcons } from './ThreeDIcons';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github } from 'lucide-react';

export const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Bhuvanesh_S_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <ThreeDIcons />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <motion.img
            src="https://avatars.githubusercontent.com/u/150337133?v=4"
            alt="Bhuvanesh S"
            className="w-40 h-40 rounded-full border-4 border-neon-gold mx-auto mb-6 object-cover shadow-2xl cursor-pointer"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-fira-code font-bold mb-6 text-neon-gold">
            <span 
              className="glow-text cursor-pointer"
              style={{
                textShadow: '0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 30px #FF8C00'
              }}
            >
              BHUVANESH S
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8"
        >
          <div className="text-xl md:text-2xl font-fira-code text-neon-gold mb-4">
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
              className="typewriter-text cursor-pointer"
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
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-fira-code"
        >
          Aspiring Full Stack Developer & Ethical Hacker
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-transparent border-2 border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black font-fira-code text-lg px-8 py-4 group transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black font-fira-code text-lg px-8 py-4 group transition-all duration-300 bg-transparent cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Hire Me
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="text-neon-gold hover:bg-neon-gold hover:text-black font-fira-code text-lg px-8 py-4 group transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://github.com/BHUVANESH-SSN', '_blank')}
            >
              <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div 
          className="animate-bounce"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-neon-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
