import React from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';
import FAQ from '@/components/webcomponents/faq';
import Chooseus from '@/components/digitalcomponents/Chooseus';
import Need from '@/components/digitalcomponents/Need';
import Home from '@/components/digitalcomponents/Solution';
import Head from 'next/head';

const Digital: React.FC = () => {
  return (
    <>
      <div className='mt-7'>
        <Navbar />
        <Landing variant='digital' />
        <Need />
        <Home />
        <Slider variant='digital' />
        <Process variant='digital' />
        <Chooseus />
        <FAQ variant='digital' />
      </div>
    </>
  );
};

export default Digital;
