import React from 'react';
import { Briefcase, Zap, Heart, BookOpen, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col space-y-2 p-6 rounded-lg">
      <div className="">
        <div className="w-10 h-10 rounded ">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold" style={{ color: '#232D62' }}>{title}</h3>
      <p className="text-sm leading-relaxed font-medium" style={{ color: '#484848' }}>{description}</p>
    </div>
  );
};

interface BusinessProps {
  variant?: 'business' | 'services' | 'ai' | 'blockchain' | 'rpa' | 'app';
}

const Business: React.FC<BusinessProps> = ({ variant = 'business' }) => {
  const businessData = [
    {
      icon: <img src="/assets/Brief.png" alt="Briefcase" className="w-5 h-5" />,
      title: "Startups & Scaleups",
      description: "Bold ideas turn into powerful digital products built fast, leanand ready to scale. From concept to launch, every phase is guided with clarity, speedand precision."
    },
    {
      icon: <img src="/assets/Shopping.png" alt="Zap" className="w-5 h-5" />,
      title: "E-Commerce & Retail",
      description: "Mobile-first shopping experiences designed to convert, retainand impress customers. Smart UX, AI-powered recommendationsand smooth checkouts help drive real revenue."
    },
    {
      icon: <img src="/assets/Health.png" alt="Heart" className="w-5 h-5" />,
      title: "Healthcare & Wellness",
      description: "Platforms that simplify care, automate operationsand protect patient data. From telehealth to wellness apps, everything is built with empathy, securityand impact in mind."
    },
    {
      icon: <img src="/assets/Education.png" alt="BookOpen" className="w-5 h-5" />,
      title: "Education & eLearning",
      description: "Learning platforms that engage learners and make teaching easier. Interactive tools and real-time progress tracking deliver better learning outcomes at scale."
    },
    {
      icon: <img src="/assets/Finance.png" alt="BarChart3" className="w-5 h-5" />,
      title: "Finance & Fintech",
      description: "Modern fintech tools that are fast, secureand built for trust. From payments to blockchain, solutions are made for transparency, complianceand scale."
    }
  ];

  const servicesData = [
    {
      icon: <img src="/assets/Brief.png" alt="Web Development" className="w-5 h-5" />,
      title: "Small & Medium Businesses (SMBs)",
      description: "We help SMBs establish a professional online presence and streamline operations. Our custom websites and web apps improve customer engagement, simplify sales or booking processesand support digital marketing efforts — all with scalability and cost-efficiency in mind."
    },
    {
      icon: <img src="/assets/fare.png" alt="Mobile Development" className="w-5 h-5" />,
      title: "Enterprises & Corporates",
      description: "For larger organizations, we develop secure, scalable web solutions tailored to complex workflows. This includes enterprise-level portals, internal tools, ERP/CRM integrations, automation systemsand custom dashboards that improve operational control and data-driven decision-making."
    },
    {
      icon: <img src="/assets/Education.png" alt="UI/UX Design" className="w-5 h-5" />,
      title: "Educational Institutions",
      description: "We build digital solutions for schools, collegesand training centers – such as student portals, LMS platforms, online admission systemsand content delivery modules. These solutions help institutions enhance learning, enable remote educationand manage administrative tasks efficiently."
    },
    {
      icon: <img src="/assets/Event.png" alt="Cloud Services" className="w-5 h-5" />,
      title: "Event, Sports & Service Providers",
      description: "We create mobile-optimized, user-friendly websites and booking systems for gyms, turfs, studios, beauty salonsand event organizers. Our solutions help manage appointments, handle payments, promote servicesand provide real-time customer updates or notifications."
    },
    {
      icon: <img src="/assets/Professional.png" alt="Data Analytics" className="w-5 h-5" />,
      title: "Creatives & Independent Professionals",
      description: "We design powerful digital portfolios and personal branding websites for photographers, designers, writers, coachesand consultants. These platforms highlight their expertise, enable content monetization (blogs, courses, e-books)and offer lead capture or inquiry forms to grow their clientele."
    }
  ];

  const aiData = [
    {
      icon: <img src="/assets/Brief.png" alt="Healthcare AI" className="w-5 h-5" />,
      title: "Healthcare & Wellness",
      description: "Platforms that simplify care, automate operationsand protect patient data. From telehealth to wellness apps, everything is built with empathy, securityand impact in mind."
    },
    {
      icon: <img src="/assets/Finance.png" alt="Financial AI" className="w-5 h-5" />,
      title: "Finance & Fintech",
      description: "Modern fintech tools that are fast, secureand built for trust. From payments to blockchain, solutions are made for transparency, complianceand scale."
    },
    {
      icon: <img src="/assets/Shopping.png" alt="Retail AI" className="w-5 h-5" />,
      title: "E-Commerce & Retail",
      description: "Mobile-first shopping experiences designed to convert, retainand impress customers. Smart UX, AI-powered recommendationsand smooth checkouts help drive real revenue."
    },
    {
      icon: <img src="/assets/Professional.png" alt="Manufacturing AI" className="w-5 h-5" />,
      title: "Manufacturing",
      description: " AI boosts productivity with predictive maintenance, defect detectionand supply chain intelligence. Automation and robotics drive precision, efficiencyand scalability across industrial operations."
    },
    {
      icon: <img src="/assets/Transport.png" alt="Education AI" className="w-5 h-5" />,
      title: "Logistics & Transportation",
      description: "AI streamlines logistics with dynamic route optimization, real-time fleet trackingand warehouse automation. It also enables demand prediction and powers the development of autonomous vehicles."
    },
    {
      icon: <img src="/assets/Call.png" alt="Customer Service AI" className="w-5 h-5" />,
      title: "Customer Service",
      description: " AI-driven chatbots handle high volumes of queries with human-like responses. Sentiment analysis, intelligent ticket routingand personalized support help elevate customer satisfaction and reduce response time."
    },
    {
      icon: <img src="/assets/HR.png" alt="HR AI" className="w-5 h-5" />,
      title: "HR & Recruitment",
      description: " AI automates resume screening and candidate matching, improving hiring efficiency. It supports talent analytics, employee engagement strategiesand delivers more personalized workplace experiences."
    }
  ];

  const blockchain = [
    {
      icon: <img src="/assets/Finance.png" alt="Blockchain Development" className="w-5 h-5" />,
      title: "Finance & Banking",
      description: "Blockchain enables secure and transparent financial solutions like DeFi platforms, real-time settlementsand digital asset tracking. Our team specializes in building custom systems that reduce fraud and enhance transactional efficiency for banks and fintechs."
    },
    {
      icon: <img src="/assets/Transport.png" alt="Blockchain Consulting" className="w-5 h-5" />,
      title: "Supply Chain & Logistics",
      description: "End-to-end supply chain visibility is made possible through blockchain applications. From verifying product origin to real-time shipment tracking, we implement solutions that boost operational trust and prevent counterfeit risks."
    },
    {
      icon: <img src="/assets/Health.png" alt="Blockchain Auditing" className="w-5 h-5" />,
      title: "Healthcare & Wellness",
      description: "Medical data security and interoperability are critical in healthcare. Blockchain-based solutions developed by us allow for tamper-proof patient records, streamlined claims managementand regulatory compliance for health systems and providers."
    },
    {
      icon: <img src="/assets/Real.png" alt="Blockchain Integration" className="w-5 h-5" />,
      title: "Real Estate",
      description: "Smart contracts bring automation to property transactions, leasesand ownership transfers. Our blockchain implementations help real estate firms eliminate paperwork, reduce fraudand build trust in high-value transactions."
    },
    {
      icon: <img src="/assets/Shopping.png" alt="Blockchain Development" className="w-5 h-5" />,
      title: "E-Commerce & Retail",
      description: "Product authenticity, loyalty programsand digital payments are strengthened through blockchain. We create scalable solutions that elevate customer trust and improve backend transparency for retailers and marketplaces."
    },
    {
      icon: <img src="/assets/Game.png" alt="Blockchain Consulting" className="w-5 h-5" />,
      title: "Gaming & Entertainment",
      description: "Blockchain is reshaping digital ownership in gaming and media. From NFT marketplaces to token economies, we help creators and studios launch immersive, monetized experiences with full control over intellectual property."
    },
    {
      icon: <img src="/assets/Home.png" alt="Blockchain Auditing" className="w-5 h-5" />,
      title: "Government & Public Sector",
      description: "Digital identity verification, voting systemsand land registry platforms are being transformed through blockchain. Our solutions support transparency, reduce corruptionand improve the efficiency of public services."
    },
    {
      icon: <img src="/assets/Education.png" alt="Blockchain Integration" className="w-5 h-5" />,
      title: "Education & eLearning",
      description: "Forgery-proof academic credentials and decentralized certificate verification are made possible with blockchain. We work with institutions and EdTech platforms to build secure systems that simplify authentication and improve employer trust."
    }
  ];

  const rpa = [
    {
      icon: <img src="/assets/Finance.png" alt="Finance & Banking" className="w-5 h-5" />,
      title: "Finance & Banking",
      description: "Automate loan processing, compliance like KYC verification, regulatory compliance checks, loan disbursement and transaction verification. RPA helps financial institutions streamline operations, reduce processing timesand improve accuracy with audit trail capabilities."
    },
    {
      icon: <img src="/assets/Health.png" alt="Healthcare & Wellness" className="w-5 h-5" />,
      title: "Healthcare & Wellness",
      description: "Streamline patient processes such as appointment scheduling, billing, insurance claim processing, medical record management. This not only improves operational efficiency but also enhances patient satisfaction by reducing wait times and improving data flow."
    },
    {
      icon: <img src="/assets/Shopping.png" alt="E-Commerce & Retail" className="w-5 h-5" />,
      title: "E-Commerce & Retail",
      description: "Handle order processing, customer inquiries, inventory management, price updatesand return processing. RPA ensures accurate, real-time updates and helps retailers respond swiftly to market shifts and customer demands."
    },
    {
      icon: <img src="/assets/Real.png" alt="Real Estate" className="w-5 h-5" />,
      title: "Real Estate",
      description: "Automation can assist in lead management, property transaction, leasesand ownership transfers. Our blockchain implementations help real estate firms eliminate paperwork, reduce fraudand build trust in high-value transactions."
    },
    {
      icon: <img src="/assets/Insurance.png" alt="Insurance" className="w-5 h-5" />,
      title: "Insurance",
      description: "Automate claims processing, policy administrationand customer onboarding. With RPA, insurers can handle high-volume document processing and analysis of repetitive tasks with consistent accuracy and reduced operational costs."
    },
    {
      icon: <img src="/assets/Call.png" alt="Telecom" className="w-5 h-5" />,
      title: "Telecom",
      description: "Automate lines like subscriber onboarding, service provisioning, usage trackingand customer query resolution. RPA provides delivery boost service automation and improves customer experience."
    },
    {
      icon: <img src="/assets/HR.png" alt="HR & Recruitment" className="w-5 h-5" />,
      title: "HR & Recruitment",
      description: "Simplify resume screening, candidate shortlisting, employee onboardingand payroll processing. RPA allows HR teams to focus on strategic talent management while bots handle time-consuming admin tasks efficiently."
    }
  ];

  const appData = [
    {
      icon: <img src="/assets/Health.png" alt="Healthcare & Wellness" className="w-7 h-7" />,
      title: "Healthcare & Wellness",
      description: "Platforms that simplify care, automate operationsand protect patient data. From telehealth to wellness apps, everything is built with empathy, securityand impact in mind."
    },
    {
      icon: <img src="/assets/Finance.png" alt="Finance & Fintech" className="w-7 h-7" />,
      title: "Finance & Fintech",
      description: "Modern fintech tools that are fast, secureand built for trust. From payments to blockchain, solutions are made for transparency, complianceand scale."
    },
    {
      icon: <img src="/assets/Shopping.png" alt="E-Commerce & Retail" className="w-7 h-7" />,
      title: "E-Commerce & Retail",
      description: "Mobile-first shopping experiences designed to convert, retainand impress customers. Smart UX, AI-powered recommendationsand smooth checkouts help drive real revenue."
    },
    {
      icon: <img src="/assets/Vector.png" alt="SaaS & Internal Tools" className="w-7 h-7" />,
      title: "SaaS & Internal Tools",
      description: "Have a workflow problem? We solve it with mobile-first tools — CRMs, dashboards, reporting appsand task managers built to fit your process, your dataand your team's daily rhythm."
    },
    {
      icon: <img src="/assets/Transport.png" alt="Logistics & Transportation" className="w-7 h-7" />,
      title: "Logistics & Transportation",
      description: "AI streamlines logistics with dynamic route optimization, real-time fleet trackingand warehouse automation. It also enables demand prediction and powers the development of autonomous vehicles."
    },
    {
      icon: <img src="/assets/Education.png" alt="Education & eLearning" className="w-7 h-7" />,
      title: "Education & eLearning",
      description: "We build engaging learning platforms for educators, startupsand institutions. Whether it’s live classes, quizzes, course management, or progress tracking — we help turn passive learning into active growth."
    },
    {
      icon: <img src="/assets/Media.png" alt="Media & Content Platforms" className="w-7 h-7" />,
      title: "Media & Content Platforms",
      description: "We help creators and publishers deliver engaging content on the go. From streaming apps and podcast players to subscriber models and event platforms — we build for scale, performanceand seamless media delivery."
    }
  ];



  const currentData =
    variant === 'app'
      ? appData
      : variant === 'ai'
        ? aiData
        : variant === 'services'
          ? servicesData
          : variant === 'blockchain'
            ? blockchain
            : variant === 'rpa'
              ? rpa
              : businessData;

  const headingData = {
    business: {
      title: "Built for Every Business",
      description: "Mindor creates digital solutions tailored to each industry's pace, challengesand potential. Whether launching something new or scaling what works, every product is built to solve real-world problems and unlock growth."
    },
    services: {
      title: "Custom Web Solutions for Every Industry",
      description: "We at Mindor tailor digital solutions to meet the unique demands of various sectors."
    },
    ai: {
      title: "Real-World AI Applications Across Industries",
      description: "We at Mindor tailor digital solutions to meet the unique demands of various sectors."
    },
    blockchain: {
      title: "Blockchain Services Tailored for Every Industry",
      description: "We at Mindor leverage blockchain technology to create secure, transparentand efficient solutions for businesses across various industries."
    },
    rpa: {
      title: "RPA Services Tailored for Every Industry",
      description: ""
    },
    app: {
      title: "Industries We Serve",
      description:
        "We turn ideas into impactful mobile apps — no matter what industry you're in. You bring the domain expertise. We bring the design, developmentand delivery. From customer-facing products to internal tools, we've helped businesses across sectors build mobile experiences that drive results."
    }
  };

  return (
<section className="py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#F9FBFF' }}>
  <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 space-y-6 lg:space-y-0">
          <div className="lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2A2A2A' }}>
              {headingData[variant].title}
            </h2>
            <p className="font-medium text-base sm:text-md leading-relaxed" style={{ color: '#484848' }}>
              {headingData[variant].description}
            </p>
          </div>
          <div className="flex-shrink-0 py-10">
            <a href="https://calendar.app.google/c94YxYt7MYuphBsw6" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200" style={{ backgroundColor: "#232D62" }}>
                Get Free Consultation
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-200 pb-2 pt-4">
          {currentData.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/Ellipse.png"
          alt="Ellipse decoration"
          className="w-32 h-32 sm:w-48 sm:h-48 lg:w-80 lg:h-80 opacity-50"
        />
      </div>
    </section>
  );
};

export default Business;