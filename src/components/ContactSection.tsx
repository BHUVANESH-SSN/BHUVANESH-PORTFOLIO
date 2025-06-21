
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "john.doe@example.com",
      color: "electric-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "neon-green"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      color: "neon-purple"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-tech font-bold mb-6">
          <span className="gradient-text glow-text">Get In Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto" />
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Ready to work together? Drop me a message and let's create something amazing!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-card p-8 neon-border">
              <h3 className="text-2xl font-tech text-electric-blue glow-text mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-dark-card border-dark-border focus:border-electric-blue transition-colors"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-dark-card border-dark-border focus:border-electric-blue transition-colors"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-muted-foreground">Subject</label>
                  <Input
                    type="text"
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-dark-card border-dark-border focus:border-electric-blue transition-colors"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-dark-card border-dark-border focus:border-electric-blue transition-colors resize-none"
                    required
                  />
                </motion.div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full neon-border bg-transparent hover:bg-electric-blue/20 text-electric-blue font-tech text-lg py-4 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div key={info.title} variants={itemVariants}>
              <Card className="glass-card p-6 neon-border group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-${info.color}/20 border border-${info.color}/50`}>
                    <info.icon className={`h-6 w-6 text-${info.color} group-hover:animate-pulse`} />
                  </div>
                  <div>
                    <h4 className="font-tech text-lg text-foreground">{info.title}</h4>
                    <p className={`text-${info.color} glow-text`}>{info.value}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card p-6 neon-border">
              <h4 className="font-tech text-xl text-neon-gold glow-text mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Instagram', 'YouTube'].map((social, index) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 border border-electric-blue/50 flex items-center justify-center hover:from-electric-blue/40 hover:to-neon-purple/40 transition-all duration-300"
                  >
                    <span className="text-electric-blue font-tech text-xs">
                      {social.slice(0, 2)}
                    </span>
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
