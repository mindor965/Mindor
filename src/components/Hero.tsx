import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';
  }, []);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      // Random animation
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;

      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;

      particlesRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 300);

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24"
>
  {/* Background */}
  <div className="absolute inset-0 z-0">
    {imageLoaded ? (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />
    )}

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary-dark/95 to-black/90"></div>

    {/* Pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>

    {/* Particles */}
    <div ref={particlesRef} className="absolute inset-0"></div>
  </div>

  {/* Content */}
  <div className="container relative z-20 px-4 sm:px-6">
    <motion.div
      className="text-center max-w-3xl md:max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat text-white mb-6 md:mb-8 leading-snug md:leading-tight break-words"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Transform Your Business with{" "}
        <span className="text-accent">Digital Innovation</span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Partner with Mindor Tech to unlock your business potential through
        cutting-edge technology solutions. From mobile apps to AI automation,
        we deliver results that drive growth and competitive advantage.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          className="btn btn-secondary-large w-full sm:w-auto"
          onClick={() => scrollToSection("contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Strategy Call
        </motion.button>
      </motion.div>
    </motion.div>
  </div>

  {/* Floating elements */}
  <motion.div
    className="absolute top-8 sm:top-16 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl z-10"
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-8 sm:bottom-16 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-primary-light/20 rounded-full blur-xl z-10"
    animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
</section>

  );
};

export default Hero; 