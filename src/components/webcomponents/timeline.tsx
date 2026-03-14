import React, { useState } from 'react';
import { FiFileText, FiXCircle, FiSettings, FiCheckCircle } from 'react-icons/fi';

const timelineData = [
  {
    id: 1,
    title: 'Requirement Gathering & Planning',
    description: 'We begin with deep-dive discussions to understand your business model, user personasand workflow expectations. This phase includes competitor research, feature mappingand building a strategic roadmap that aligns with your operational goals.',
    icon: FiFileText,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-100',
  },
  {
    id: 2,
    title: 'UI/UX Design & Wireframing',
    description: 'Our design team crafts intuitive wireframes and modern interfaces focused on clarity, usabilityand responsiveness. We ensure the experience is accessible, conversion-friendlyand seamless across devices and platforms.',
    icon: FiXCircle,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-100',
  },
  {
    id: 3,
    title: 'Application Development & Integration',
    description: 'Using modern front-end and back-end frameworks, we develop scalable, secureand modular applications. This includes API integrations, automation workflowsand custom features like CRM, ERP, payment gatewaysand messaging tools such as WhatsApp and email.',
    icon: FiSettings,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
  },
  {
    id: 4,
    title: 'Testing, Deployment & Ongoing Support',
    description: 'Every component undergoes end-to-end testing—performance, functionalityand security. Post-deployment, we handle server setup, monitoringand ongoing optimization to keep your app reliable and aligned with your evolving business needs.',
    icon: FiCheckCircle,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100',
  },
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div style={{ background: 'linear-gradient(107.02deg, #EAEDFB 7.12%, #FFFFFF 59.63%, #CDD4F6 99.34%)' }} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Web Development Process
          </h2>
          <p className="mt-3 text-xl md:text-2xl text-gray-600">
            From Concept to Launch
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-indigo-500 transition-all duration-300"
            style={{ width: `${((activeStep - 1) / (timelineData.length - 1)) * 100}%` }}
          />
          <div className="relative flex justify-between items-center">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 cursor-pointer transition-colors duration-300 ${
                  item.id === activeStep
                    ? 'bg-indigo-900 text-white'
                    : item.id < activeStep
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
                onClick={() => handleStepClick(item.id)}
              >
                {item.id}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-6 rounded-lg shadow-lg transform transition-transform duration-300 cursor-pointer ${
                  item.id === activeStep
                    ? 'scale-105 bg-indigo-900'
                    : 'bg-white'
                }`}
                onClick={() => handleStepClick(item.id)}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  item.id === activeStep ? 'bg-indigo-500' : item.iconBg
                }`}>
                  <Icon className={`w-6 h-6 transition-colors duration-300 ${
                    item.id === activeStep ? 'text-white' : item.iconColor
                  }`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                  item.id === activeStep ? 'text-white' : 'text-gray-900'
                }`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  item.id === activeStep ? 'text-gray-200' : 'text-gray-600'
                }`}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;