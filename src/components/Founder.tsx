import React from 'react';

const Founder: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">

        <div className="  overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col items-center justify-center">
              <div className="mb-8 w-full">
                <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
                  The Force Behind the Code
                </h1>
              </div>
              <div className="w-full max-w-md">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-3xl">
                  <img src="/assets/Founder.jpg" alt="CEO Photo" className="object-cover w-full h-full rounded-xl shadow-lg border border-gray-50" />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Meet the CEO – Anupama Sarraf
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-medium text-base md:text-lg" style={{color: "#484848"}}>
                    Anupama Sarraf is the founder and CEO of Mindor, with 8+ years of experience in 
                    technology, product strategyand digital innovation. She leads with a mission to build 
                    smart, scalable digital solutions that solve real business challenges.
                  </p>
                  
                   <p className="font-medium text-base md:text-lg" style={{color: "#484848"}}>
                    Her expertise spans mobile apps, AI, automation, blockchainand digital marketing. 
                    Known for her clarity and execution, Anupama has helped startups and enterprises 
                    drive meaningful digital transformation.
                  </p>
                  
                  <p className="font-medium text-base md:text-lg" style={{color: "#484848"}}>
                    She's also an active mentor in India's startup ecosystem, empowering businesses to 
                    grow through purpose-driven tech.
                  </p>
                </div>
            
              </div>
            </div>
          </div>
        </div>

       </div>
    </div>
  )
}

export default Founder;