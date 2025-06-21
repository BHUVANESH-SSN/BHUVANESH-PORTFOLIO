
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Frontend",
    color: "electric-blue",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Vue.js", level: 88 },
      { name: "TypeScript", level: 92 },
      { name: "Three.js", level: 78 },
    ]
  },
  {
    title: "Backend",
    color: "neon-green",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
    ]
  },
  {
    title: "Design",
    color: "neon-purple",
    skills: [
      { name: "UI/UX Design", level: 92 },
      { name: "Figma", level: 90 },
      { name: "Adobe Creative", level: 78 },
      { name: "3D Modeling", level: 72 },
    ]
  },
  {
    title: "Tools",
    color: "neon-gold",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 82 },
    ]
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
  };

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-tech font-bold mb-6">
          <span className="gradient-text glow-text">My Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto" />
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
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
            <Card className="glass-card p-6 neon-border">
              <h3 className={`text-2xl font-tech font-bold mb-6 text-${category.color} glow-text`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className={`text-${category.color} font-tech font-bold`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full relative`}
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating skill icons */}
      <div className="relative mt-16 h-32 overflow-hidden">
        {['⚛️', '🎨', '🚀', '💻', '🔥', '⚡'].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
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
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
