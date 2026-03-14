import React from 'react';

interface PromiseItem {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

interface PromiseProgressProps {
  variant?: 'web' | 'ai' | 'blockchain' | 'rpa' | 'digital';
}

const PromiseProgress: React.FC<PromiseProgressProps> = ({ variant = 'web' }) => {
  const webItems: PromiseItem[] = [
    {
      id: 1,
      title: "Full-Spectrum Digital Expertise",
      description: "We cover the entire digital ecosystem, from mobile app development and responsive web design to advanced AI, RPA, blockchainand digital marketing. With one team managing everything, your digital journey stays seamless and efficient.",
      bgColor: "bg-purple-200"
    },
    {
      id: 2,
      title: "Scalable, Future-Ready Tech",
      description: "Our solutions are designed not just for today but for tomorrow. Whether you're a startup or scaling enterprise, we build digital products that grow with your business using modern, secureand cloud-compatible technologies.",
      bgColor: "bg-red-200"
    },
    {
      id: 3,
      title: "Speed Without Compromise",
      description: "As a lean, agile team, we deliver high-quality products with shorter turnaround times. By streamlining development processes and using automation where it counts, we help you launch faster without sacrificing quality or stability.",
      bgColor: "bg-green-200"
    },
    {
      id: 4,
      title: "Tailored Solutions, Not Templates",
      description: "Every business is different, so are our solutions. We dive deep into your specific needs, challengesand goals to build digital products that align with your long-term vision. Nothing cookie-cutter, everything custom.",
      bgColor: "bg-yellow-200"
    },
    {
      id: 5,
      title: "Radical Transparency & Communication",
      description: "We believe trust is built on clarity. From day one, you'll have full visibility into timelines, scope, progressand performance. No hidden costs, no jargon, just clear and honest communication.",
      bgColor: "bg-blue-200"
    },
    {
      id: 6,
      title: "Purpose-Driven Innovation",
      description: "We combine the latest technologies with strategic thinking to solve real-world business problems. Whether it's reducing manual effort through automation or enhancing customer experience with AI, innovation at Mindor always serves a purpose.",
      bgColor: "bg-purple-200"
    }
  ];

  const blockchainItems: PromiseItem[] = [
    {
      id: 1,
      title: "Expertise Across Top Platforms",
      description: "Our experienced team can develop DeFi smart contracts, create blockchain platforms such as Ethereum, Solana, Binance Smart Chain, Polygonand Hyperledgerand help you choose the right platform according to your business requirements. We also provide multi-chain development services for your enterprise use, or on-off-based platforms.",
      bgColor: "bg-blue-200"
    },
    {
      id: 2,
      title: "Full-Cycle Development Support",
      description: "We provide end-to-end blockchain development services under one roof. This includes ideation, conceptualization, technical architecture, smart design, smart contract development, testing, deploymentand maintenance. With a single, dedicated team managing your project, you can have harmonized and coherent accountability.",
      bgColor: "bg-purple-200"
    },
    {
      id: 3,
      title: "Business-Focused Customization",
      description: "We ensure that you receive the business advantage from technology. We prioritize business objectives above all others and ensure our systems meet business requirements. We make all of our solutions feature both your company brand and can be implemented into any existing application, giving you a unique business advantage over your competition.",
      bgColor: "bg-green-200"
    },
    {
      id: 4,
      title: "Secure by Built from the Ground Up",
      description: "Security is a non-negotiable priority. We follow industry-standard best practices to design and develop a fully secured and audited blockchain architecture. From data encryption to multi-factor authentication, access controland contract verification, our development approach ensures that your product is secure and protected.",
      bgColor: "bg-yellow-200"
    },
    {
      id: 5,
      title: "Future-Proof Technology Stack",
      description: "Built with adaptable evolving application, networks and latest emerging technologies, we ensure that our blockchain frameworks and technologies are fully future-proofed. From interoperability protocols to emerging consensus mechanisms, we stay ahead of trends and threats through continuous improvement and development. Our solutions are equipped with the latest functionality for success in the future.",
      bgColor: "bg-red-200"
    },
    {
      id: 6,
      title: "Agile and Transparent Process",
      description: "Our developers implement accurate agile methodology, ensuring easy work progress and system development to present. You'll receive regular updates, participate in planning sessionsand have full visibility into the development progress. Get peace of mind about your budget and deadlines.",
      bgColor: "bg-indigo-200"
    },
    {
      id: 7,
      title: "Proven Multi-Industry Experience",
      description: "We've delivered blockchain solutions across industries such as finance, logistics, healthcare, gaming, real estateand more. From multi-party transaction tracking to supply chain optimization, from tokenization to dApps, we utilize it across various insights to your project.",
      bgColor: "bg-pink-200"
    },
    {
      id: 8,
      title: "Flexible Engagement Models",
      description: "Whether you're a startup with a limited budget or an enterprise with a large team, we offer a full range of engagement options to suit your project. Choose from fixed pricing, hourly development, or dedicated team solutions. Our goal is to be a technological partner you can rely on at every stage.",
      bgColor: "bg-cyan-200"
    }
  ];

  const aiItems: PromiseItem[] = [
    {
      id: 1,
      title: "Intelligent Automation Solutions",
      description: "We develop AI-powered automation systems that streamline your business processes, reduce manual effortand increase operational efficiency. From chatbots to complex workflow automation, we make your business smarter.",
      bgColor: "bg-cyan-200"
    },
    {
      id: 2,
      title: "Custom Machine Learning Models",
      description: "Our team builds tailored ML models that solve your specific business challenges. Whether it's predictive analytics, recommendation systems, or data classification, we create AI solutions that deliver measurable results.",
      bgColor: "bg-teal-200"
    },
    {
      id: 3,
      title: "Data-Driven Insights",
      description: "Transform your raw data into actionable insights with our AI analytics solutions. We help you uncover patterns, predict trendsand make informed decisions that drive business growth and competitive advantage.",
      bgColor: "bg-emerald-200"
    },
    {
      id: 4,
      title: "Scalable AI Infrastructure",
      description: "Built for growth, our AI solutions scale seamlessly with your business needs. We design robust architectures that handle increasing data volumes and user demands while maintaining optimal performance.",
      bgColor: "bg-lime-200"
    },
    {
      id: 5,
      title: "Ethical AI Development",
      description: "We prioritize responsible AI development with transparency, fairnessand privacy at the core. Our solutions are designed to be explainable, unbiasedand compliant with industry standards and regulations.",
      bgColor: "bg-orange-200"
    },
    {
      id: 6,
      title: "Continuous Learning Systems",
      description: "Our AI solutions don't just work—they improve over time. We implement continuous learning mechanisms that adapt to new data and changing business requirements, ensuring long-term value and relevance.",
      bgColor: "bg-pink-200"
    }
  ];

  const rpaItems: PromiseItem[] = [
    {
      id: 1,
      title: "Process Automation Strategy",
      description: "Thoroughly analyze current workflows to identify repetitive, rule-based tasks that are ripe for automation. We then design efficient business logic, configure RPAand implement intelligent bots to streamline operations and boost productivity.",
      bgColor: "bg-violet-200"
    },
    {
      id: 2,
      title: "RPA Consulting & Roadmapping",
      description: "Our expert guidance on identifying the right RPA tools, building a realistic deploymentand fostering a successful automation. The roadmap includes time frames in addition to the budget and expected ROI, so you know what to expect from day one to analytics.",
      bgColor: "bg-indigo-200"
    },
    {
      id: 3,
      title: "Custom Bot Design & Development",
      description: "We create intelligent automation bots tailored to your specific business processes. From simple task automation to AI and integration, every bot is programmed for reliability, scalabilityand seamless integration business tools.",
      bgColor: "bg-purple-200"
    },
    {
      id: 4,
      title: "Intelligent Document Processing (IDP)",
      description: "Elevate document-heavy tasks with intelligent document processing that automatically extracts, reads, processesand analyzes data from invoices, emails, formsand contracts, eliminating the need for manual data entry.",
      bgColor: "bg-pink-200"
    },
    {
      id: 5,
      title: "RPA Implementation & Integration",
      description: "Seamlessly deploy bots into your ecosystem, live ERP, CRM, HRISand other business applications. Our approach ensures smooth integration with your existing processes and systems, with optimizations for process workflows.",
      bgColor: "bg-fuchsia-200"
    },
    {
      id: 6,
      title: "Ongoing Support & Maintenance",
      description: "Your RPA infrastructure requires consistent monitoring and optimization to keep your automation processes running smoothly. We provide ongoing maintenance, updatesand 24/7 support to keep your automation programs within your business needs.",
      bgColor: "bg-rose-200"
    }
  ];

    const digitalItems: PromiseItem[] = [
    {
      id: 1,
      title: "Small Businesses and Startups",
      description: "With limited budgets and high competition, small businesses and startups can leverage digital marketing to level the playing field. Digital channels provide cost-effective ways to build brand awareness, attract local customersand generate leads quickly. From local SEO to social media marketing, startups can create strong initial momentum without overspending.",
      bgColor: "bg-purple-100"
    },
    {
      id: 2,
      title: "E-Commerce Companies",
      description: "Online retailers rely heavily on digital marketing to drive traffic and conversions. Paid ads, retargeting campaignsand email marketing help e-commerce businesses reach shoppers at different stages of the buying journey, increase average order valueand build customer loyalty. With detailed analytics, e-commerce brands can continuously optimize their marketing efforts for maximum ROI.",
      bgColor: "bg-purple-200"
    },
    {
      id: 3,
      title: "Professional Services",
      description: "Doctors, lawyers, consultantsand other professionals can use digital marketing to showcase their expertise and connect with potential clients. Content marketing, SEOand LinkedIn advertising can build credibility, educate audiencesand generate high-quality inquiries.",
      bgColor: "bg-purple-300"
    },
    {
      id: 4,
      title: "Established Businesses and Enterprises",
      description: "Even established companies need to adapt to evolving consumer behaviors. Digital marketing helps these businesses enter new markets, launch new productsand maintain customer engagement. Advanced strategies such as data-driven advertising and influencer collaborations support sustained growth.",
      bgColor: "bg-purple-200"
    },
    {
      id: 5,
      title: "Nonprofits and Educational Institutions",
      description: "Organizations that rely on public support or enrollment benefit from digital marketing by spreading their messaging, raising awarenessand encouraging action. Storytelling through social media, email campaignsand search marketing enables nonprofits and schools to connect emotionally and build supportive communities.",
      bgColor: "bg-purple-100"
    },
    {
      id: 6,
      title: "Local Brick and Mortar Stores",
      description: "Physical stores that depend on local foot traffic can benefit greatly from digital marketing techniques such as local SEO, Google My Business optimizationand targeted social media advertising. These help attract nearby customers searching for relevant products or services, improving visibility and driving in-store visits.",
      bgColor: "bg-purple-200"
    }
  ];

  const getContent = () => {
    switch (variant) {
      case 'blockchain':
        return {
          items: blockchainItems,
          title: "Why Choose Us for Blockchain Development Services",
          subtitle: "We deliver secure, scalable blockchain solutions that transform businesses with transparency, trustand innovation at every step."
        };
      case 'ai':
        return {
          items: aiItems,
          title: "AI Innovation. Your Transformation.",
          subtitle: "We create intelligent AI solutions that automate processes, unlock insightsand drive innovation across your entire business ecosystem."
        };
      case 'rpa':
        return {
          items: rpaItems,
          title: "End-to-End RPA Development Services to Transform Your Business",
          subtitle: ""
        };
      case 'digital':
        return {
          items: digitalItems,
          title: "Who Can Benefit from Digital Marketing Services?",
          subtitle: "Digital marketing is no longer a luxury reserved for large corporations — it's an essential strategy for any business or organization aiming to grow, competeand stay relevant in today's digital-first world."
        };
      default:
        return {
          items: webItems,
          title: "Our Promise. Your Progress.",
          subtitle: "We cover the entire digital ecosystem, from mobile app development and responsive web design to advanced AI, RPA, blockchainand digital marketing solutions."
        };
    }
  };

  const content = getContent();

  return (
    <div className=" bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          <div className="lg:sticky lg:top-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-12">
              {content.title}
            </h1>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="relative ">
            {content.items.map((item, index) => (
              <div
                key={item.id}
                className={`sticky rounded-2xl p-8 mb-4 shadow-lg transition-all duration-300 hover:shadow-xl ${item.bgColor}`}
                style={{
                  top: `${4 + index * 1.5}rem`,
                  zIndex: index + 1
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-gray-900 font-bold text-lg shadow-sm">
                      {item.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseProgress;