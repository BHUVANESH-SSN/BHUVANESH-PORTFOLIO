
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/BHUVANESH-SSN",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    color: "electric-blue"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhuvanesh-cse",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    color: "neon-green"
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/bhuvanesh27/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/512px-GeeksforGeeks.svg.png",
    color: "neon-purple"
  },
  {
    name: "Email",
    url: "mailto:bhuvaneshcsessn@gmail.com",
    icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    color: "neon-gold"
  }
];

export const ContactSection = () => {
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

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-fira-code font-bold mb-6">
          <span className="gradient-text glow-text">Get In Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto" />
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-fira-code">
          Let's connect and build something amazing together!
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {socialLinks.map((link, index) => (
          <motion.div key={link.name} variants={itemVariants}>
            <Card 
              className="glass-card p-6 neon-border group hover:scale-105 transition-all duration-300 cursor-pointer text-center"
              onClick={() => window.open(link.url, '_blank')}
            >
              <div className="flex flex-col items-center space-y-4">
                <motion.img
                  src={link.icon}
                  alt={link.name}
                  className="w-12 h-12 group-hover:animate-bounce"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
                  }}
                  whileHover={{ scale: 1.2 }}
                />
                <div>
                  <h4 className="font-fira-code text-lg text-foreground font-bold">{link.name}</h4>
                  {link.name === 'Email' && (
                    <p className="text-sm text-neon-gold mt-1">bhuvaneshcsessn@gmail.com</p>
                  )}
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
        <Card className="glass-card p-8 neon-border max-w-2xl mx-auto">
          <h3 className="text-2xl font-fira-code text-neon-gold glow-text mb-4">
            Let's Collaborate!
          </h3>
          <p className="text-muted-foreground font-fira-code leading-relaxed">
            I'm always interested in new opportunities, challenging projects, and 
            innovative collaborations. Whether you have a project in mind or just 
            want to connect, feel free to reach out!
          </p>
        </Card>
      </motion.div>
    </section>
  );
};
