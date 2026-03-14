import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';


interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  results: string[];
  challenges: string[];
  solutions: string[];
  duration: string;
  budget: string;
  team: string[];
}

const CaseStudyDetailPage: React.FC = () => {
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
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

  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-chatbot-ecommerce',
      title: 'AI-Powered Customer Support Chatbot',
      client: 'TechRetail Pro',
      industry: 'E-commerce',
      description: 'Developed an intelligent chatbot that handles customer inquiries, order tracking, and product recommendations, reducing support tickets by 70%.',
      fullDescription: 'TechRetail Pro, a growing e-commerce platform, was struggling with customer support scalability. Their support team was overwhelmed with repetitive inquiries about order status, product information, and return policies. We developed an AI-powered chatbot that seamlessly integrated with their existing systems to provide instant, accurate responses to customer queries.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      technologies: ['OpenAI GPT-4', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      results: [
        '70% reduction in support tickets',
        '24/7 customer support availability',
        '95% customer satisfaction rate',
        '50% faster response times',
        '$50,000 annual cost savings',
        'Improved customer retention by 25%'
      ],
      challenges: [
        'Integration with existing e-commerce platform',
        'Handling complex product queries',
        'Maintaining context across conversations',
        'Ensuring data security and privacy'
      ],
      solutions: [
        'Custom API integration with Shopify',
        'Advanced NLP for product understanding',
        'Conversation state management',
        'End-to-end encryption implementation'
      ],
      duration: '6 weeks',
      budget: '$15,000',
      team: ['1 Senior AI Engineer', '1 Full-stack Developer', '1 DevOps Engineer', '1 Project Manager']
    },
    {
      id: 'mobile-app-startup',
      title: 'Cross-Platform Mobile App',
      client: 'HealthTrack',
      industry: 'HealthTech',
      description: 'Built a comprehensive health tracking mobile application with real-time data synchronization and AI-powered insights.',
      fullDescription: 'HealthTrack wanted to create a mobile application that could track various health metrics, provide personalized insights, and sync data across multiple devices. The app needed to be user-friendly, secure, and provide valuable health recommendations based on collected data.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'TensorFlow', 'Google Cloud', 'Dart', 'MongoDB', 'Redis'],
      results: [
        '50,000+ downloads in first month',
        '4.8/5 app store rating',
        '90% user retention rate',
        'Real-time health insights',
        'Cross-platform compatibility',
        'Secure data encryption'
      ],
      challenges: [
        'Cross-platform development complexity',
        'Real-time data synchronization',
        'Health data security compliance',
        'AI model integration for insights'
      ],
      solutions: [
        'Flutter for native performance',
        'Firebase real-time database',
        'HIPAA-compliant security measures',
        'Custom ML models for health analysis'
      ],
      duration: '12 weeks',
      budget: '$25,000',
      team: ['2 Flutter Developers', '1 Backend Developer', '1 AI Engineer', '1 UI/UX Designer', '1 Project Manager']
    }
  ];

  useEffect(() => {
    if (router.query.id) {
      const foundCaseStudy = caseStudies.find(cs => cs.id === router.query.id);
      setCaseStudy(foundCaseStudy || null);
      setLoading(false);
    }
  }, [router.query.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Case Study Not Found</h1>
          <Link href="/case-studies" className="btn btn-primary">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
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
                {(() => {
                  const words = caseStudy.title.split(' ');
                  return (
                    <>
                      <span className="text-white">{words.slice(0, 2).join(' ')}</span>{' '}
                      <span className="text-primary-light">{words.slice(2).join(' ')}</span>
                    </>
                  );
                })()}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {caseStudy.description}
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  {caseStudy.client}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  {caseStudy.industry}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  {caseStudy.duration}
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/case-studies" className="btn btn-primary-large w-full sm:w-auto">
                    View All Cases
                  </Link>
                </motion.div>
                
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn btn-secondary-large w-full sm:w-auto">
                    Start Your Project
                  </Link>
                </motion.div>
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
        <div className="py-24 bg-gradient-to-br from-background to-background-light">
          <div className="container max-w-6xl space-y-24">

            {/* Project Overview */}
            <motion.section
              className="mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center rounded-2xl p-10 ">
                <div>
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <span>📋</span> Project Overview
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    {caseStudy.fullDescription}
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {/* <div className="flex items-center gap-3">
                      <span className="text-primary text-2xl">⏳</span>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">Duration</h3>
                        <p className="text-text-secondary text-sm">{caseStudy.duration}</p>
                      </div>
                    </div> */}
                    {/* <div className="flex items-center gap-3">
                      <span className="text-primary text-2xl">💰</span>
                      <div>
                        <h3 className="font-semibold text-text-primary mb-1">Budget</h3>
                        <p className="text-text-secondary text-sm">{caseStudy.budget}</p>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full max-w-md rounded-2xl shadow-lg border-4 border-primary-light"
                  />
                </div>
              </div>
            </motion.section>

            {/* Technologies Used */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-text-primary text-center mt-12">Technologies Used</h2>
              <div className="flex gap-6 overflow-x-auto pb-2 mt-12">
                {caseStudy.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[160px] flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl mb-2">💻</div>
                    <div className="font-semibold text-text-primary">{tech}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h2 className="text-4xl text-center font-bold text-text-primary mt-12">Challenges</h2>
                <div className="space-y-4 max-w-2xl mx-auto px-2 mt-12">
                  {caseStudy.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold flex-shrink-0">
                        !
                      </div>
                      <p className="text-text-secondary">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-4xl text-center font-bold text-text-primary mb-8">Solutions</h2>
                <div className="space-y-4 max-w-2xl mx-auto px-2">
                  {caseStudy.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">
                        ✓
                      </div>
                      <p className="text-text-secondary">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary text-center mt-12">Results & Impact</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-3xl mb-4">📈</div>
                    <p className="text-text-secondary leading-relaxed">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Team */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary text-center mt-12">Project Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {caseStudy.team.map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                      {index + 1}
                    </div>
                    <p className="text-text-primary font-medium">{member}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white py-12 mt-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl mb-8 text-white/90">
                  Let's discuss how we can help you achieve similar results for your business.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Link href="/contact" className="btn btn-secondary-large">
                    Get Started Today
                  </Link>
                  <Link href="/case-studies" className="btn btn-primary-large">
                    View More Case Studies
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage; 