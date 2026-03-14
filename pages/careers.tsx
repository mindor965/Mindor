import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../src/components/Footer'));

interface JobPosition {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {
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

  const jobPositions: JobPosition[] = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "3-5 years",
      description: "We're looking for a passionate Full-Stack Developer to join our team and help build cutting-edge web applications using React, Node.js, and modern cloud technologies.",
      requirements: [
        "Strong experience with React.js, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices",
        "Strong problem-solving skills and attention to detail"
      ],
      benefits: [
        "Competitive salary with equity options",
        "Flexible work hours and remote work options",
        "Health insurance and wellness programs",
        "Professional development and learning budget",
        "Modern tech stack and latest tools"
      ]
    },
    {
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "2-4 years",
      description: "Join our AI team to develop innovative machine learning solutions and integrate cutting-edge AI technologies into our products.",
      requirements: [
        "Strong background in Python and machine learning frameworks",
        "Experience with OpenAI APIs, LangChain, or similar tools",
        "Knowledge of NLP, computer vision, or recommendation systems",
        "Experience with MLOps and model deployment",
        "Strong mathematical and statistical skills"
      ],
      benefits: [
        "Work on cutting-edge AI projects",
        "Access to latest AI tools and platforms",
        "Conference and training opportunities",
        "Collaborative and innovative work environment",
        "Competitive compensation package"
      ]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "2-4 years",
      description: "Create beautiful and intuitive user experiences for web and mobile applications that delight our clients and their users.",
      requirements: [
        "Strong portfolio showcasing web and mobile design work",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries",
        "Knowledge of accessibility standards and best practices"
      ],
      benefits: [
        "Creative freedom and ownership of design decisions",
        "Work with diverse clients and industries",
        "Latest design tools and resources",
        "Design community and networking opportunities",
        "Competitive salary and benefits"
      ]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Bangalore, India (Hybrid)",
      experience: "2-4 years",
      description: "Help us build and maintain robust, scalable infrastructure and deployment pipelines for our applications.",
      requirements: [
        "Experience with AWS, Docker, and Kubernetes",
        "Knowledge of CI/CD tools (Jenkins, GitHub Actions, etc.)",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Understanding of monitoring and logging tools",
        "Strong scripting skills (Python, Bash, etc.)"
      ],
      benefits: [
        "Work with modern cloud infrastructure",
        "Opportunity to shape DevOps practices",
        "Continuous learning and skill development",
        "Competitive salary and benefits",
        "Collaborative team environment"
      ]
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We encourage creative thinking and experimentation with new technologies."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Work with talented individuals in a supportive and inclusive environment."
    },
    {
      icon: "📈",
      title: "Growth",
      description: "Continuous learning opportunities and career development support."
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible hours and policies that respect your personal time."
    }
  ];

  const perks = [
    "Competitive salary with equity options",
    "Health insurance and wellness programs",
    "Flexible work hours and remote options",
    "Professional development budget",
    "Modern office with latest equipment",
    "Team events and social activities",
    "Unlimited coffee and snacks",
    "Annual company retreats"
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
              Join Our{' '}
              <span className="text-primary-light">Innovation Team</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build the future of technology with us. We're looking for passionate individuals who want to make a real impact in the world of AI and software development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#openings" className="btn btn-primary-large w-full sm:w-auto">
                  View Open Positions
                </a>
              </motion.div>

              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn btn-secondary-large w-full sm:w-auto">
                  Get In Touch
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
      <main className="py-24 bg-gradient-to-br from-background to-background-light">
        <div className="container">

          {/* Values Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Perks Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-12 text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                Perks & Benefits
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {perks.map((perk, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-white/90 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                      {perk}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Job Openings Section */}
          <motion.section
            id="openings"
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
              {jobPositions.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 overflow-hidden relative h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-medium">
                        {job.type}
                      </span>
                      <span className="bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-medium">
                        {job.location}
                      </span>
                      <span className="bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 font-medium">
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm mb-5 leading-relaxed line-clamp-3">
                    {job.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Key Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-xs text-text-secondary">
                            <span className="text-primary mt-1 text-xs">✓</span>
                            <span className="line-clamp-2">{req}</span>
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-xs text-primary font-medium pl-4">+{job.requirements.length - 3} more requirements</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-primary to-primary-light text-white py-3 px-4 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 group-hover:from-primary-dark group-hover:to-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                    </motion.button>
                    <motion.button
                      className="px-4 py-3 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
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
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
              <p className="text-xl mb-8 text-white/90">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
              </p>
              <Link href="/contact" className="btn btn-secondary-large">
                Send Your Resume
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage; 