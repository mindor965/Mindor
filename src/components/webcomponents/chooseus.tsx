import React from 'react';

interface ChooseUsProps {
  variant?: 'web' | 'ai'| 'rpa'|'app';
}

interface Card {
  number: number;
  color: string;
  title: string;
  description: string;
  icon?: string;
}

const ChooseUs: React.FC<ChooseUsProps> = ({ variant = 'web' }) => {
  const content: { web: { title: string; subtitle: string; cards: Card[] }; ai: { title: string; subtitle: string; cards: Card[] }; rpa: { title: string; subtitle: string; cards: Card[] }; app: { title: string; subtitle: string; cards: Card[] } } = {
    web: {
      title: "Why Our Custom Web Development Services Stand Out",
      subtitle: "Choose Mindor for unparalleled dedication and expertise.",
      cards: [
        {
          number: 1,
          color: "bg-purple-500",
          title: "Tailored to Your Business Logic",
          description: "We don't force your business into a box. Every feature we build reflects your internal processes, user preferencesand operational needs. Whether it's a niche workflow or a unique customer flow, we custom-code it for clarity and control."
        },
        {
          number: 2,
          color: "bg-purple-500",
          title: "Seamless Ecosystem Integration",
          description: "We ensure your app communicates effortlessly with CRMs, ERPs, payment gateways, inventory systems, analytics tools, or even WhatsApp, email, SMS). This reduces manual work, minimizes errorsand creates a unified tech ecosystem."
        },
        {
          number: 3,
          color: "bg-pink-500",
          title: "Scalable, Secure & Maintainable Code",
          description: "From day one, we focus on performance and scalability. Our architecture ensures your web app can handle growing traffic and new features. We follow coding best practices and implement robust security layers – protecting your data and reputation."
        },
        {
          number: 4,
          color: "bg-teal-500",
          title: "Long-Term Partnership & Support",
          description: "We don't disappear after deployment. We monitor your app's performance, fix issues before they become problemsand plan out future rollouts – becoming your trusted tech partner for the long run."
        }
      ]
    },
    ai: {
      title: "Partner with Mindor for Reliable, Scalable AI Solutions",
      subtitle: "Choose Mindor for unparalleled dedication and expertise.",
      cards: [
        {
          number: 1,
          color: "bg-purple-500",
          title: "Proven Expertise",
          description: "Our team of seasoned AI engineers, data scientistsand ML specialists brings cross-industry experience to every project, ensuring high-impact outcomes.",
          icon: "🎯"
        },
        {
          number: 2,
          color: "bg-purple-500",
          title: "Innovation Driven",
          description: "We stay ahead of the curve by applying the latest advancements in AI research and technology to deliver future-ready, cutting-edge solutions.",
          icon: "💡"
        },
        {
          number: 3,
          color: "bg-pink-500",
          title: "Custom Built Solutions",
          description: "No generic templates. We work closely with you to design AI systems tailored to your unique goals, challengesand workflows.",
          icon: "🔧"
        },
        {
          number: 4,
          color: "bg-teal-500",
          title: "End to End Partnership",
          description: "From strategy and development to deployment and continuous improvement, we are with you at every stage of your AI journey.",
          icon: "🤝"
        }
      ]
    },
    rpa: {
      title: "Why Choose Us for Robotic Process Automation Services",
      subtitle: "Unlock the full potential of automation with our expert RPA services.",
      cards: [
        {
          number: 1,
          color: "bg-purple-500",
          title: "Built for Scale and Complexity",
          description: "We specialize in delivering automation solutions that work seamlessly across diverse systems and modern platforms. Our experience with enterprise-grade projects means your RPA initiatives are built to be secure, scalableand optimized to achieve your digital transformation goals."
        },
        {
          number: 2,
          color: "bg-purple-500",
          title: "Fast, Flexible Deployment",
          description: "Using agile methodologies, we create quick rollouts and smooth implementation timelines. Whether you're automating a single task or scaling across departments, our modular approach allows you to expand at your pace."
        },
        {
          number: 3,
          color: "bg-pink-500",
          title: "Tailored for Your Industry",
          description: "Every RPA solution is designed with a deep understanding of your business processes, compliance requirementsand human-specific workflows and compliance needs, we help you unlock greater efficiency and measurable impact."
        },
        {
          number: 4,
          color: "bg-teal-500",
          title: "Transparency at Every Step",
          description: "We believe in clear communication and measurable success. From planning through deployment, you'll receive regular updates, detailed reportsand performance metrics that show exactly how automation is driving value."
        }
      ]
    },
     app: {
      title: "What Sets Our Mobile App Development Services Apart",
      subtitle: "",
      cards: [
        {
          number: 1,
          color: "bg-purple-500",
          title: "Built Around Your Vision",
          description: "Every great product starts with a clear vision. That’s why we begin by listening. We take time to understand your goals, usersand market before writing a single line of code. By defining the core problem and aligning with your business model, we ensure every feature has purpose and drives meaningful results."
        },
        {
          number: 2,
          color: "bg-purple-500",
          title: "Obsessed With User Experience",
          description: "We don’t just design interfaces; we design experiences. Every screen, gestureand interaction is carefully crafted to feel natural, intuitiveand delightful. Our design process is backed by real user research, UI principlesand accessibility standards to ensure your app isn’t just usable but unforgettable."
        },
        {
          number: 3,
          color: "bg-pink-500",
          title: "Always in Sync",
          description: "You’ll never wonder what’s happening or where things stand. Our workflow is built on radical transparency and proactive communication. From weekly sprint reviews to shared project boards and real-time feedback loops, we keep you informed, involvedand in control at every step of the journey."
        },
        {
          number: 4,
          color: "bg-teal-500",
          title: "Launch Smart, Scale Fast",
          description: "We build for impact and speed. Using cross-platform frameworks like Flutter and React Native, we help you launch faster and reach a wider audience without sacrificing quality. Whether it’s an MVP or a full-scale product, our codebase is built to scale as your user base grows."
        }
      ]
    }
  };

  const currentContent = content[variant];
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg shadow-gray-300 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
              <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                {variant === 'ai' && card.icon ? card.icon : card.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;