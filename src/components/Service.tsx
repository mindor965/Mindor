import React, { useState } from 'react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: <img src='/assets/mob.png' className="w-6 h-6 text-white" />,
    description: 'Launch powerful, scalable mobile apps that users love and businesses rely on. We create high-performance Android, iOS.',
    bgColor: 'bg-blue-600'
  },
  {
    id: 'website',
    title: 'Website Development',
    icon: <img src='/assets/website.png' className="w-6 h-6 text-white" />,
    description: 'Build responsive, modern websites that convert visitors into customers. Custom responsive designs optimized for all devices with fast loading speeds and SEO optimization.',
    bgColor: 'bg-purple-600'
  },
  {
    id: 'ai',
    title: 'AI-Powered Solutions',
    icon: <img src='/assets/AI.png' className="w-6 h-6 text-white" />,
    description: 'Harness the power of artificial intelligence to automate and optimize your business processes with machine learning models and intelligent automation.',
    bgColor: 'bg-green-600'
  },
  {
    id: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    icon: <img src='/assets/rpa.png' className="w-6 h-6 text-white" />,
    description: 'Automate repetitive tasks to increase efficiency and reduce human error through intelligent workflow automation and system integration.',
    bgColor: 'bg-orange-600'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    icon: <img src='/assets/chain.png' className="w-6 h-6 text-white" />,
    description: 'Secure, transparent blockchain solutions for modern business challenges including smart contracts and decentralized applications.',
    bgColor: 'bg-indigo-600'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <img src='/assets/Mark.png' className="w-6 h-6 text-white" />,
    description: 'Drive growth with data-driven marketing strategies, SEO, social media managementand performance analytics.',
    bgColor: 'bg-pink-600'
  }
];

export default function ServicesAccordion() {
  const [expandedCard, setExpandedCard] = useState<number>(0);

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What We Build. How You Grow.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div key={service.id} className="group cursor-pointer w-full max-w-sm" onClick={() => handleCardClick(index)}>

              {index === 0 && (
                <div className="transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 overflow-visible sm:overflow-hidden h-auto sm:h-64">
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="w-full sm:w-32 h-32 sm:h-full flex items-center justify-center p-2">
                        <div className="relative h-full w-full sm:w-40 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #E6EDF9 0%, #F0F6FF 100%)' }}>
                          <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg" style={{ background: '#DEE7F7' }}>
                            {React.cloneElement(service.icon as React.ReactElement, {
                              className: "w-6 h-6 text-gray-700"
                            })}
                          </div>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-6 h-0.5 bg-gray-300 rotate-45"></div>
                            <div className="absolute bottom-4 right-4 w-4 h-0.5 bg-gray-300 -rotate-45"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-center">
                        <h3 className="text-base font-semibold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {index !== 0 && (
                <>
                  <div className={`${expandedCard === index ? 'hidden md:group-hover:hidden' : 'block'} md:group-hover:hidden transition-all duration-300`}>
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative overflow-visible sm:overflow-hidden h-auto sm:h-64">
                      <div className="relative h-24 sm:h-32 rounded-xl mb-4 sm:mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #E6EDF9 0%, #F0F6FF 100%)' }}>
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center shadow-lg" style={{ background: '#DEE7F7' }}>
                          {React.cloneElement(service.icon as React.ReactElement, {
                            className: "w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                          })}
                        </div>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-6 sm:w-8 h-0.5 bg-gray-300 rotate-45"></div>
                          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-4 sm:w-6 h-0.5 bg-gray-300 -rotate-45"></div>
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-center mb-2 sm:mb-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`${expandedCard === index ? 'block md:block' : 'hidden'} md:hidden md:group-hover:block transition-all duration-300`}>
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible sm:overflow-hidden h-auto sm:h-64 p-4 sm:p-6">
                      <div className="relative h-full flex flex-col rounded-lg p-4 sm:p-7 overflow-visible sm:overflow-hidden">
                        <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200 to-transparent rounded-tl-lg" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tl from-blue-200 to-transparent rounded-br-lg" />

                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 relative z-10">
                          {service.title}
                        </h3>
                        <div className="flex items-center mb-2 sm:mb-4 relative z-10">
                          <p className="text-gray-700 text-sm leading-relaxed flex-1">
                            {service.description}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}