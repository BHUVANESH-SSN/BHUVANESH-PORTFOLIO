
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Languages",
    color: "electric-blue",
    skills: ["C", "C++", "JavaScript", "Python", "Java"]
  },
  {
    title: "Frameworks",
    color: "neon-green",
    skills: ["HTML", "CSS", "React Js", "Node Js", "Express Js", "Bootstrap"]
  },
  {
    title: "Tools",
    color: "neon-purple",
    skills: ["Git", "GitHub", "VS Code", "Postman", "MongoDB", "Metasploit", "Wireshark", "Nmap"]
  },
  {
    title: "Concepts",
    color: "neon-gold",
    skills: ["DSA", "OOP", "DBMS", "OS"]
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-fira-code font-bold mb-6">
          <span className="gradient-text glow-text">Skills & Tools</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto" />
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-fira-code">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={categoryVariants}>
            <Card className="glass-card p-6 neon-border cursor-pointer group hover:scale-105 transition-all duration-300">
              <h3 className={`text-2xl font-fira-code font-bold mb-6 text-${category.color} glow-text`}>
                {category.title}:
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg text-white font-fira-code border border-gray-600 hover:border-neon-gold transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating skill icons */}
      <div className="relative mt-16 h-32 overflow-hidden">
        {['💻', '🎨', '🚀', '⚡', '🔥', '⚛️'].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20 cursor-pointer"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(index) * 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + index * 15}%`,
              top: `${Math.random() * 50}%`,
            }}
            whileHover={{ scale: 1.5, opacity: 0.8 }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
