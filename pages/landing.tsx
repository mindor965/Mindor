import React from "react";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Technology & Digital Services Company | Mindor',
  description: 'We design and build digital systems that help businesses grow. From web, mobile, AI, automation to marketing, Mindor delivers scalable technology solutions.',
}

const MindorTechHomepage: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #2E386E 0%, #2D3A87 100%), url(/assets/background.png)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 md:top-32 md:right-32 w-56 h-56 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 md:bottom-32 md:left-32 w-48 h-48 md:w-80 md:h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto pt-20">
        <div className="grid grid-cols-1 gap-16 md:gap-24 items-center min-h-[80vh]">
          {/* left section */}
          <div className="space-y-8 md:space-y-10 pt-6 md:pt-16">
            <div className="inline-block backdrop-blur-md border border-white/25 px-4 py-1 rounded-full lg:ml-8">
              <span className="text-white text-sm font-medium">
                One Partner. Infinite Possibilities.
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-5 gap-12">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-snug md:leading-tight tracking-tight lg:max-w-[55%] text-white lg:ml-8">
                Web, Mobile, AI & Digital Solutions to power smarter enterprises.
              </h1>

              <div className="mt-6 lg:mt-0 lg:max-w-[50%]">
                <p className="text-base md:text-lg text-white leading-relaxed font-medium">
                  Great apps, seamless websites, intelligent automation and digital
                  growth. Mindor delivers scalable digital solutions that transform
                  ideas into results. We don't just build tech, we build what your
                  business truly needs to grow.
                </p>
                <a
                  href="https://calendar.app.google/c94YxYt7MYuphBsw6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-end">
                    <button className="bg-white text-blue-900 px-6 md:px-10 py-2 rounded-full font-bold text-lg md:text-xl hover:bg-white/90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 mt-6">
                      Get Free Consultation
                    </button>
                  </div>

                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <img
              src="/assets/hero4.png"
              alt="Dashboard preview"
              className="relative z-20 w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] h-auto rounded-2xl md:rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindorTechHomepage;