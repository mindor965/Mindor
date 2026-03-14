import React from 'react';

interface CardData {
  title: string;
  description: string;
}

interface DevelopmentProps {
  variant?: 'ai' | 'rpa' | 'blockchain' | 'app';
}

const AIDevelopmentSuccess: React.FC<DevelopmentProps> = ({ variant = 'ai' }) => {
  const aiCards: CardData[] = [
    {
      title: "Automate Repetitive Task",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiriesand report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Enhance Decision-Making",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiriesand report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Improve Efficiency & Productivity",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiriesand report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Personalize Customer Experiences",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiriesand report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Unlock New Revenue Streams",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiriesand report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    },
    {
      title: "Mitigate Risks",
      description: "Deploy AI automation to handle time-consuming, rule-based activities such as data entry, basic customer inquiriesand report generation. This not only reduces manual workload but also minimizes errors and increases overall efficiency, allowing teams to focus on strategic, goals and high-value innovation.",
    }
  ];

  const rpaCards: CardData[] = [
    {
      title: "Automates Repetitive Tasks",
      description: "RPA bots handle routine, rule-based tasks like data entry, invoice processingand report generation more efficiently than manual efforts. This allows teams to focus on strategic and creative work, improving overall efficiency.",
    },
    {
      title: "Reduces Operational Costs and Time",
      description: "By minimizing manual involvement, RPA lowers labor costs and virtually eliminates human error while speeding up processes from faster turnaround times and improved process accuracy.",
    },
    {
      title: "Enhances Compliance and Audit Readiness",
      description: "Every action performed by an RPA bot is recorded in detail, making it easier to demonstrate compliance with industry regulations. Automated processes ensure consistency and transparency for audit purposes.",
    },
    {
      title: "Enables 24/7 Task Execution",
      description: "Unlike human workers, RPA bots don't need breaks or sleep and can work around the clock, ensuring critical processes continue uninterrupted, even outside business hours.",
    },
    {
      title: "Improves Employee Productivity and Customer Experience",
      description: "With bots taking care of mundane tasks, employees can focus on higher-value activities. This leads to a more engaged workforce and better service for customers.",
    }
  ];

  const blockchainCards: CardData[] = [
    {
      title: "Custom Blockchain App Development",
      description: "Tailored mobile applications built from scratch to meet your unique business model, goalsand technical requirements. We focus on creating scalable, secureand user-friendly solutions that grow with your business.",
    },
    {
      title: "Smart Contract Development and Audit",
      description: "We create smart contracts that execute automatically without human intervention and are thoroughly tested and audited. All developed with a strong focus on accuracy and security. Every smart contract goes through rigorous testing protocols to identify vulnerabilities, prevent bugsand ensure blockchain compliance.",
    },
    {
      title: "Private Blockchain Development",
      description: "For businesses that require more control over access, dataand transactions, we offer private or consortium blockchain solutions. These permissioned blockchain networks that provide enterprises-level security, efficiencyand privacy, making them ideal for healthcare, supply chainand finance.",
    },
    {
      title: "Cryptocurrency Wallet Development",
      description: "We develop secure, user-friendly cryptocurrency wallets for storing and managing digital assets. Our wallets support multi-currency storage, two-factor authentication, real-time notifications and seamless integration with blockchain networks for both web and mobile platforms.",
    },
    {
      title: "NFT Marketplace Development",
      description: "We help you launch full-featured NFT marketplaces for digital assets such as art, music, gaming itemsand collectibles. Our NFT platforms include minting tools, listing and trading features, secure payment gateways, social integrationand support for multiple blockchain networks like Ethereum and Polygon.",
    },
    {
      title: "DeFi Application Development",
      description: "We build decentralized finance (DeFi) platforms that support core functionalities like lending, borrowingand yield farming, token swappingand liquidity mining. These applications use innovative smart contract architecture, liquidity managementand user-friendly dashboards for seamless financial operations and services.",
    }
  ];

  const appCards: CardData[] = [
    {
      title: "Custom App Development",
      description: "Tailored mobile applications built from scratch to meet your unique business needs, goalsand technical requirements. We focus on creating scalable, secureand future-ready apps that grow with your business.",
    },
    {
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere. We use modern frameworks to create apps that run smoothly on both iOS and Android with a single codebase. This approach helps reduce development time and cost while ensuring consistent user experiences.",
    },
    {
      title: "iOS / Android Native Apps",
      description: "For projects that need platform-specific performance or features, we develop fully native apps using Swift, Kotlinand Java. Native apps provide better speed, hardware accessand integration with device-specific functionalities.",
    },
    {
      title: "Custom App Development",
      description: "Tailored mobile applications built from scratch to meet your unique business needs, goalsand technical requirements. We focus on creating scalable, secureand future-ready apps that grow with your business.",
    },
    {
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere. We use modern frameworks to create apps that run smoothly on both iOS and Android with a single codebase. This approach helps reduce development time and cost while ensuring consistent user experiences.",
    },
    {
      title: "iOS / Android Native Apps",
      description: "For projects that need platform-specific performance or features, we develop fully native apps using Swift, Kotlinand Java. Native apps provide better speed, hardware accessand integration with device-specific functionalities.",
    }
  ];

  const getCardsAndTitle = () => {
    switch (variant) {
      case 'rpa':
        return {
          cards: rpaCards,
          title: 'Driving Growth with Robotic Process Automation'
        };
      case 'app':
        return {
          cards: appCards,
          title: 'Our Mobile App Development Capabilities'
        };
      case 'blockchain':
        return {
          cards: blockchainCards,
          title: 'Our Blockchain Development Services Include'
        };
      default:
        return {
          cards: aiCards,
          title: 'How AI Development Accelerates Success'
        };
    }
  };

  const { cards: currentCards, title } = getCardsAndTitle();

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{
        background: 'linear-gradient(108.05deg, #FBFCFF 7.09%, #FFFFFF 68.38%, #C6CDF4 114.73%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIDevelopmentSuccess;