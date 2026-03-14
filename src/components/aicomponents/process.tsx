import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-16">
      <div className="flex-1 pr-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our AI Solution Development Process
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
              <span className="text-lg font-semibold text-gray-600">01</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Discovery & Data Strategy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We start by deeply understanding your business objectives and identifying 
                where AI can drive impact. This includes assessing data availability, defining 
                the problemand setting clear success metrics. We then source, cleanand 
                prepare the data to ensure quality and relevance for model training.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
              <span className="text-lg font-semibold text-gray-600">02</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Model Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Based on your specific needs, our AI experts select the right algorithms and 
                frameworks to design and build custom models. We focus on creating scalable, 
                accurateand explainable solutions aligned with your goals.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
              <span className="text-lg font-semibold text-gray-600">03</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Training, Testing & Deployment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The model is rigorously trained and evaluated for accuracy, performanceand 
                fairness. Once validated, it is seamlessly integrated and deployed into your 
                existing systems with strong security and minimal disruption.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
              <span className="text-lg font-semibold text-gray-600">04</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Monitoring & Continuous Optimization
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Post-deployment, we actively monitor the AI system's performance, provide 
                ongoing supportand fine-tune the model as needed—ensuring it evolves with 
                your business and continues to deliver value.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 w-96 relative">
        <img
          src="/assets/Process.png"
          alt="AI Solution Development Process"
          width={400}
          height={500}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/assets/Process2.png"
              alt="Process 2 overlay"
              width={140}
              height={140}
              className="h-auto"
            />
            <img
              src="/assets/Process1.png"
              alt="Process 1 overlay"
              width={140}
              height={140}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;