import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import FAQ from '@/components/webcomponents/faq';
import Business from '@/components/Business';
import Process from '@/components/blockcomponents/process';
import Slider from '@/components/Slider';
import AIDevelopmentSuccess from '@/components/aicomponents/developement';
import Tech5 from 'svgs/tech-stacks/tech5';
import Head from 'next/head';

const Block: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 500);
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <div className='mt-7'>
        <Navbar />
        <Landing variant="blockchain" />
        <Mindor variant="blockchain" />
        <Slider variant="blockchain" />
        <AIDevelopmentSuccess variant="blockchain" />
        <Process />
        <Business variant="blockchain" />
        <Tech5 />
        <FAQ variant="blockchain" />
      </div>
    </>
  );
};

export default Block;
