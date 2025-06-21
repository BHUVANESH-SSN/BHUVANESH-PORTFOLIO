
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
    color: "electric-blue"
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Interactive dashboard with real-time data visualization and AI insights",
    image: "/placeholder.svg",
    tags: ["Vue.js", "Python", "TensorFlow", "D3.js"],
    github: "#",
    demo: "#",
    color: "neon-purple"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "/placeholder.svg",
    tags: ["React Native", "Express", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
    color: "neon-green"
  },
  {
    id: 4,
    title: "3D Portfolio Website",
    description: "Creative portfolio with Three.js animations and interactive elements",
    image: "/placeholder.svg",
    tags: ["Three.js", "GSAP", "Blender", "WebGL"],
    github: "#",
    demo: "#",
    color: "neon-gold"
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-tech font-bold mb-6">
          <span className="gradient-text glow-text">Featured Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto" />
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Explore my latest work showcasing innovation, creativity, and technical excellence
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={projectVariants}
            className="perspective-1000"
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <Card 
              className={`glass-card overflow-hidden transition-all duration-500 transform-gpu group ${
                hoveredProject === project.id 
                  ? 'scale-105 rotate-y-5 shadow-2xl neon-border' 
                  : 'hover:scale-102'
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-electric-blue/20 hover:bg-electric-blue/40 text-electric-blue border border-electric-blue"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-neon-purple/20 hover:bg-neon-purple/40 text-neon-purple border border-neon-purple"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-tech font-bold mb-3 text-${project.color} glow-text`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/30 rounded-full text-electric-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-12"
      >
        <Button
          size="lg"
          className="neon-border bg-transparent hover:bg-electric-blue/20 text-electric-blue font-tech text-lg px-8 py-4"
        >
          View All Projects
        </Button>
      </motion.div>
    </section>
  );
};
