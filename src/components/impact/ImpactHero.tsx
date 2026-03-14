import React from 'react';
import { ArrowRight } from 'lucide-react';

const ImpactHero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] bg-[#f2f2f2] px-6 py-20 text-center font-sans gap-y-10">
      <div className="max-w-4xl mb-10">
        <h1 className="text-4xl md:text-6xl tracking-tight leading-tight">
          <span className="font-bold text-[#1a1a1a]">Digital</span>
          <span className="font-semibold text-[#3b59ff]">Support</span>
          <br />
          <span className="font-medium text-[#666666]">for </span>
          <span className="font-bold text-[#1a1a1a]">Organisations</span>
          <br />
          <span className="font-semibold text-[#666666]">That Create </span>
          <span className="font-bold text-[#1a1a1a]">Real Impact</span>
        </h1>
      </div>

      <div className="max-w-5xl space-y-6 mb-12">
        <p className="text-[#666666] text-md ">
          We work with selected non-profit organisations and social initiatives to
          strengthen their digital presence and communication. This initiative
          reflects our commitment to ensuring that meaningful work is not slowed
          down by digital limitations.
        </p>
        <p className="text-[#555555] font-semibold text-md max-w-4xl mx-auto">
          When digital gaps slow down meaningful work, we step in with strategy,
          design, and reliable systems that remove those barriers.
        </p>
      </div>

      <button className="group flex items-center gap-2 bg-[#333333] text-white px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:bg-[#000000] shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
        Request Consideration
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
};

export default ImpactHero;