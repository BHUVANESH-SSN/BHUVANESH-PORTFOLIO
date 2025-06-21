
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { TypeAnimation } from 'react-type-animation';
import { ParticleBackground } from './ParticleBackground';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github } from 'lucide-react';

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00D9FF"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-tech font-bold mb-6">
            <span className="gradient-text glow-text">
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
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'UI/UX Designer',
              2000,
              'Creative Technologist',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-4xl font-modern text-electric-blue glow-text"
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Crafting digital experiences with cutting-edge technologies and innovative design solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="neon-border bg-transparent hover:bg-electric-blue/20 text-electric-blue font-tech text-lg px-8 py-4 group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 font-tech text-lg px-8 py-4 group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Hire Me
          </Button>
          
          <Button
            size="lg"
            variant="ghost"
            className="text-neon-green hover:bg-neon-green/20 font-tech text-lg px-8 py-4 group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
            View Projects
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
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
