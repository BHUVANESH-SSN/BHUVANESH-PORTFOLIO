
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const certifications = [
  {
    title: "Algorithms by Stanford University",
    image: "https://github.com/BHUVANESH-SSN/JPMorgan-Chase-Virtual-Internship/blob/main/assets/Algorithms_Stanford_Bhuvanesh_S.png?raw=true",
    link: "https://coursera.org/share/39b61ca4a6fa2c828d16ac36a7ad95c8"
  },
  {
    title: "GitHub Foundations Certification",
    image: "https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
    link: "https://www.credly.com/badges/9dcfc63f-4456-41bc-8994-824ea8904ee2"
  },
  {
    title: "Postman Student Expert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33eafBOCSMv7PqvjOJUtxbrX7bmoFOe1ivFU7kdl-Cttk1vU1Q6LEuwVRCgqMXmSn4_g&usqp=CAU",
    link: "https://badgr.com/public/assertions/2fv5vfLWTe6odsycqRYqAA"
  },
  {
    title: "DSA Using C (Udemy)",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-ebc580ed-d632-4832-8c5a-508c5ce75253.jpg",
    link: "https://www.udemy.com/certificate/UC-ebc580ed-d632-4832-8c5a-508c5ce75253/"
  },
  {
    title: "JPMorgan Virtual Job Simulation",
    image: "https://github.com/BHUVANESH-SSN/JPMorgan-Chase-Virtual-Internship/raw/main/assets/JP_MORGAN_CERTIFICATE.png",
    link: "https://www.theforage.com/simulations/jpmorgan/advanced-software-engineering-r0fm"
  },
  {
    title: "CommonWealth Software Job Simulation",
    image: "https://media.licdn.com/dms/image/v2/D4E2DAQGToA2jwqA0MA/profile-treasury-document-cover-images_480/B4EZVLVJXHG0A0-/0/1740725591250?e=1750611600&v=beta&t=Ogsv77owzA19snNKX3NWUB7lxWYY28cMkKqu_5nYfc0",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2sNmYuurxgpFYawco/wJMjCSKFhuj97x6F3_2sNmYuurxgpFYawco_eRo6GTpvFupPGkoJd_1740725182820_completion_certificate.pdf"
  }
];

export const CertificationsSection = () => {
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

  const certVariants = {
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
        <h2 className="text-5xl md:text-6xl font-fira-code font-bold mb-6">
          <span className="gradient-text glow-text">Certifications</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto" />
        <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-fira-code">
          Professional certifications and achievements in technology
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={certVariants}
            className="perspective-1000"
          >
            <Card 
              className="glass-card overflow-hidden transition-all duration-500 transform-gpu group hover:scale-105 neon-border cursor-pointer"
              onClick={() => window.open(cert.link, '_blank')}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-fira-code font-bold text-neon-gold glow-text mb-3">
                  {cert.title}
                </h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
