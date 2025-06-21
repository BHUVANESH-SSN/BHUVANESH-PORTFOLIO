
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const aboutPoints = [
    "🎓 3rd-year Computer Science Engineering student committed to continuous growth and excellence in the tech domain.",
    "💡 Passionate Problem Solver with regular activity on LeetCode, GeeksForGeeks, and Codeforces.",
    "🧠 Deep understanding of Data Structures & Algorithms — continuously sharpening my skills with competitive challenges.",
    "🌐 Exploring Full-Stack Web Development with hands-on experience in both frontend and backend technologies.",
    "🚀 Quick learner who embraces new technologies and thrives in fast-paced environments."
  ];

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-fira-code font-bold mb-6"
        >
          <span className="gradient-text glow-text">About Me</span>
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto"
        />
      </motion.div>

      <div className="grid lg:grid-cols-1 gap-12 items-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <Card className="glass-card p-8 neon-border">
            <ul className="space-y-6 text-lg text-muted-foreground font-fira-code">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4 cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-neon-gold font-bold">
                    {point.split(' ')[0]}
                  </span>
                  <span>
                    {point.split(' ').slice(1).join(' ')}
                  </span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
