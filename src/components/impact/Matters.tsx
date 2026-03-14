import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

const Matters = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"] // Adjusts when the "painting" starts and ends
  });

  const text = "Many organisations doing important work face challenges such as unclear messaging, outdated websites, or poorly structured digital systems. These gaps can limit reach, trust, and operational effectiveness. Our role is to help build clear, dependable digital foundations so organisations can focus on their mission without technical friction.";
  
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="bg-[#e5e5e5] min-h-[100vh] flex flex-col items-center justify-center px-6 py-24"
    >
      <span className="text-[#3b59ff] text-sm font-medium mb-12">
        Why This Matters
      </span>

      <div className="max-w-3xl text-center">
        <p className="flex flex-wrap justify-center gap-x-[0.35em] gap-y-2 text-lg md:text-2xl font-bold ">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
};

const Word = ({ children, progress, range }:{children:React.ReactNode, progress:MotionValue<number>, range: any}) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  
  return (
    <motion.span style={{ opacity }} className="text-[#1a1a1a]">
      {children}
    </motion.span>
  );
};

export default Matters;