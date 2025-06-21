
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
    type: 'tween',
    ease: 'anticipate',
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
        className="min-h-screen bg-dark-bg"
      >
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-dark-border"
        >
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-tech text-2xl font-bold gradient-text glow-text"
              >
                JD.DEV
              </motion.div>
              
              <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-electric-blue transition-colors font-tech"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main>
          <HeroSection />
          
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
          className="py-12 px-4 border-t border-dark-border bg-dark-card/50"
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {['GitHub', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground font-tech">
              © 2024 John Doe. Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </motion.footer>

        {/* Floating scroll indicator */}
        <motion.div
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex flex-col space-y-2">
            {['Hero', 'About', 'Projects', 'Skills', 'Contact'].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="w-3 h-3 rounded-full bg-muted-foreground/30 hover:bg-electric-blue transition-colors"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
