import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../src/components/Footer'));

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

interface ClientLogo {
  name: string;
  logo: string;
}

interface IndustryVertical {
  name: string;
  icon: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const AboutPage: React.FC = () => {
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
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Priya Sharma",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with 10+ years in tech innovation and business strategy. Passionate about empowering startups with intelligent technology solutions."
    },
    {
      name: "Rahul Kumar",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in cutting-edge AI technologies and scalable architecture solutions."
    },
    {
      name: "Anjali Patel",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Creative designer focused on user experience and modern interface design."
    },
    {
      name: "Arjun Singh",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack developer specializing in React, Node.js, and AI integration."
    }
  ];

  const techStack: TechStack[] = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "OpenAI", icon: "🤖", color: "text-green-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Flutter", icon: "📱", color: "text-blue-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" }
  ];

  const clientLogos: ClientLogo[] = [
    { name: "StartupX", logo: "🚀" },
    { name: "TechCorp", logo: "💻" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "DigitalFlow", logo: "🌊" },
    { name: "SmartBiz", logo: "📈" },
    { name: "FutureTech", logo: "🔮" }
  ];

  const industryVerticals: IndustryVertical[] = [
    { name: "E-commerce", icon: "🛒" },
    { name: "FinTech", icon: "💰" },
    { name: "HealthTech", icon: "🏥" },
    { name: "EdTech", icon: "📚" },
    { name: "SaaS", icon: "☁️" },
    { name: "AI/ML", icon: "🧠" }
  ];

  const values: Value[] = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We build long-term relationships with our clients, treating their success as our own."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project we undertake."
    },
    {
      icon: "💡",
      title: "Creativity",
      description: "We approach challenges with creative thinking to find unique solutions."
    }
  ];

  const stats: Stat[] = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section - New Design (Similar to Hero.tsx) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          {imageLoaded ? (
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ) : (
            /* Fallback gradient background */
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent" />
          )}
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-primary-dark/95 to-black/90"></div>
          
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>

          {/* Particles */}
          <div
            ref={particlesRef}
            className="absolute inset-0"
          ></div>
        </div>

        {/* Content */}
        <div className="container relative z-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're Building the{' '}
              <span className="text-primary-light">Future of Tech</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              To empower startups and businesses with intelligent tech—fast, affordable, and scalable. We're not just a dev shop—we're your growth tech partner.
            </motion.p>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To be India's most trusted AI + custom software partner for growth-stage companies.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl z-10"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl z-10"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0;
            }
            50% {
              transform: translateY(-20px) translateX(10px);
              opacity: 1;
            }
          }
        `}</style>
      </section>

      {/* Main Content */}
      <main className="py-24 bg-gradient-to-br from-background to-background-light">
        <div className="container">

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap justify-between items-center w-full gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Founder's Note Section */}
          <motion.section className="px-4 sm:px-8 md:px-16 lg:px-24 mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="flex flex-col lg:flex-row gap-32 lg:gap-x-32 lg:gap-y-0 mt-12">
              {/* Founder's Note */}
              <div className="flex-1 relative order-1 lg:order-1">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 md:p-10 text-white shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Founder's Note</h3>
                  <blockquote className="text-lg md:text-xl leading-relaxed italic">
                    "At Mindor Tech, we believe in agile execution, deep innovation, and results that speak louder than decks. We're not just a dev shop—we're your growth tech partner."
                  </blockquote>
                  <div className="mt-6">
                    <div className="font-semibold text-lg">Priya Sharma</div>
                    <div className="text-white/80 text-sm">CEO & Founder, Mindor Tech</div>
                  </div>
                </div>
              </div>
              {/* Our Story */}
              <div className="flex-1 order-2 lg:order-2 mt-12">
                <h2 className="text-4xl md:text-4xl font-bold text-text-primary lg:text-left mb-6 text-center">
                  Our Story                 </h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-5">
                  Founded in 2020, Mindor Tech emerged from a simple belief: that every business deserves access to world-class technology solutions without the enterprise price tag.
                </p>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-5">
                  We started as a small team of passionate developers and designers, united by the vision of democratizing technology for startups and growing businesses.
                </p>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  Today, we're proud to have helped over 30 companies transform their digital presence and scale their operations through intelligent technology solutions.
                </p>
              </div>
            </div>
          </motion.section>



          {/* Values Section */}
          <motion.section
            className="mb-20 py-16 bg-gradient-to-br from-background to-background-light rounded-3xl shadow-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mt-12">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="w-48 h-48 text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 flex flex-col items-center justify-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.07 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-light to-primary/80 mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <div className="text-lg font-bold text-text-primary mb-1">{value.title}</div>
                  <div className="text-xs text-gray-400">{value.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mt-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mt-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-semibold text-text-primary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-text-secondary text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            className="mb-20 py-16 bg-gradient-to-br from-background to-background-light rounded-3xl shadow-inner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mt-12">
              Our Tech Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center mt-12">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="w-48 h-48 text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 flex flex-col items-center justify-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.07 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-light to-primary/80 mb-4 shadow group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{tech.icon}</span>
                  </div>
                  <div className={`text-lg font-bold ${tech.color} mb-1`}>{tech.name}</div>
                  {/* Optional: <div className="text-xs text-gray-400">Description here</div> */}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Industry Verticals */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-text-primary text-center mt-12">
              Industries We Serve
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
              {industryVerticals.map((industry, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-[250px] h-[180px] text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-primary/20 flex flex-col justify-center items-center mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary">
                    {industry.icon}
                  </div>
                  <div className="font-medium text-text-primary text-base group-hover:text-primary transition-colors duration-300 truncate">
                    {industry.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>


          {/* CTA Section */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-12 text-white mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/services"
                  className="btn btn-secondary-large w-full sm:w-auto"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-primary-large w-full sm:w-auto"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage; 