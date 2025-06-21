
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

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
          className="text-5xl md:text-6xl font-tech font-bold mb-6"
        >
          <span className="gradient-text glow-text">About Me</span>
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <h3 className="text-3xl font-tech text-electric-blue glow-text">
            Passionate Developer & Designer
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a full-stack developer with 5+ years of experience creating 
            innovative digital solutions. My passion lies in combining 
            cutting-edge technology with exceptional user experience design.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to deployment, I specialize in building scalable 
            applications using modern frameworks and tools. I believe in 
            clean code, responsive design, and creating experiences that 
            make a lasting impact.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Years Experience", value: "5+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Technologies", value: "20+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-tech font-bold text-neon-green glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <Card className="glass-card p-6 neon-border">
            <h4 className="text-xl font-tech text-neon-purple mb-4">What I Do</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Frontend Development (React, Vue, Angular)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                Backend Development (Node.js, Python, PHP)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                UI/UX Design & Prototyping
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-gold rounded-full mr-3"></div>
                3D Graphics & Animation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Database Design & Optimization
              </li>
            </ul>
          </Card>

          <Card className="glass-card p-6 neon-border">
            <h4 className="text-xl font-tech text-neon-gold mb-4">My Approach</h4>
            <p className="text-muted-foreground">
              I believe in user-centered design and agile development. 
              Every project starts with understanding the user's needs and 
              ends with a solution that exceeds expectations. I'm committed 
              to writing clean, maintainable code and staying updated with 
              the latest industry trends.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
