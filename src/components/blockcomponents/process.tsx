import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  variant?: 'blockchain' | 'rpa' | 'digital' | 'app';
}

const BlockchainProcess: React.FC<ProcessProps> = ({ variant = 'blockchain' }) => {
  const blockchainSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business objectives, identifying blockchain use casesand selecting the right platform. This phase includes requirement analysis, competitor researchand technical feasibility checks to align blockchain with your business goals."
    },
    {
      number: "02", 
      title: "Design and Development",
      description: "Our team creates comprehensive technical design, UI/UX wireframesand core development. This includes building smart contracts, decentralized apps (dApps), tokens, walletsand APIs — all tailored to your use case."
    },
    {
      number: "03",
      title: "Testing and Audit", 
      description: "Security and performance are top priorities. We perform comprehensive testing to identify bugs, check smart contract logic, ensure platform stabilityand run audits to eliminate vulnerabilities before launch."
    },
    {
      number: "04",
      title: "Deployment and Support",
      description: "After testing, we deploy your solution to the chosen network (mainnet or private). We also provide post-launch support, performance monitoring, version upgradesand long-term maintenance to keep your blockchain system optimized."
    }
  ];

  const rpaSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Process Discovery & Planning",
      description: "We start by identifying repetitive, rule-based processes ideal for automation. Through stakeholder interviews and workflow audits, we assess feasibility, define goalsand prioritize tasks to build a solid automation roadmap."
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team designs the automation workflow and selects the best-fit RPA tools. Bots are then developed and configured to execute tasks accurately - integrating with systems, following business logicand ensuring compliance."
    },
    {
      number: "03",
      title: "Testing & Deployment",
      description: "Each bot is rigorously tested in real-world scenarios to ensure accuracy and integration. After successful user acceptance, bots are deployed into your live environment with minimal disruption to your operations."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "Post-deployment, we provide ongoing monitoring to ensure performance and stability. As your business evolves, we continuously refine and scale the automation to maximize ROI and uncover new opportunities."
    }
  ];

  const digitalSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Process Discovery & Planning",
      description: "We start by understanding your business, goalsand target audience. Through market research, competitor analysisand audience insights, we identify growth opportunities and set clear KPIs to guide every campaign."
    },
    {
      number: "02",
      title: "Strategy & Setup",
      description: "Using the insights gathered, we design a tailored strategy covering SEO, social media, PPC, contentand email/Whatsapp marketing. Campaigns are set up with precise targeting, compelling creativesand optimized landing pages to ensure maximum impact."
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description: "Campaigns go live across Google, Instagram, LinkedInand TikTok. We continuously monitor performance, test different approachesand refine strategies to improve engagement, drive conversionsand maximize ROI."
    },
    {
      number: "04",
      title: "Report & Grow",
      description: "You receive transparent reports with key metrics and actionable insights. We use this data to refine campaigns, drive sustained growth, increase visibilityand help your business outperform competitors."
    }
  ];

   const appSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We begin with focused discussions to understand your business goals, target usersand technical needs. This helps us define the right features and product strategy before we write any code."
    },
    {
      number: "02",
      title: "UI/UX Wireframing",
      description: "Next, we create wireframes and interactive prototypes to map out the user experience. This stage gives you a visual feel of the app’s flow and helps validate key screens before design and development."
    },
    {
      number: "03",
      title: "Agile Development",
      description: "Our developers work in structured sprints, giving you regular updates, working buildsand room to iterate. We prioritize progress transparency and flexibility throughout the build."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "We test your app across devices, screen sizesand real-world scenarios. Our QA process ensures bug-free performance, smooth interactionsand secure architecture."
    },
    {
      number: "05",
      title: "Launch & Deployment",
      description: "We manage the entire release process from app store submissions to backend deployment, ensuring your app is production-ready and optimized at launch."
    },
    {
      number: "06",
      title: "Post-Launch Support",
      description: "After your app goes live, we stick around. From updates and bug fixes to feature enhancements and scaling, we provide ongoing support to help your app evolve with your users."
    }
  ];

const processSteps =
    variant === 'digital'
      ? digitalSteps
      : variant === 'rpa'
      ? rpaSteps
      : variant === 'app'
      ? appSteps
      : blockchainSteps;

  const title =
    variant === 'digital'
      ? 'Our Digital Marketing Service Process'
      : variant === 'rpa'
      ? 'Our RPA Implementation Process'
      : variant === 'app'
      ? 'Our Mobile App Development Process'
      : 'Our Blockchain Development Process';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div key={index} className=" rounded-lg p-6 shadow-sm " style={{backgroundColor:'#E8EAED'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 text-white text-sm font-semibold rounded-full" style={{ backgroundColor: '#D1D5DB' }}>
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainProcess;