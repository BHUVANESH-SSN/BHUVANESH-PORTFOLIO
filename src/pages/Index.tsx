
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.2,
    },
  };

  const pageTransition = {
    duration: 0.8,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="portfolio"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
        style={{ backgroundColor: '#2b2525' }}
      >
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800"
          style={{ backgroundColor: 'rgba(17, 17, 17, 0.95)' }}
        >
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-center">
              <div className="flex space-x-6 md:space-x-8">
                {[
                  { name: 'Welcome', href: '#welcome' },
                  { name: 'About', href: '#about' }, 
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Contact', href: '#contact' }
                ].map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-neon-gold hover:bg-gray-800 transition-all duration-300 font-fira-code font-bold px-4 py-2 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main>
          <div id="welcome">
            <HeroSection />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <div id="skills">
            <SkillsSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-6 px-4 text-center"
          style={{ backgroundColor: '#0d0d0d' }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-500 font-fira-code">
              © 2025 John Doe | Font: Fira Code inspired by freeCodeCamp
            </p>
          </div>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
