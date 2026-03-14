import React from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';
import FAQ from '@/components/webcomponents/faq';
import ChooseUs from '@/components/webcomponents/chooseus';
import Business from '@/components/Business';
import AIDevelopmentSuccess from '@/components/aicomponents/developement';
import Tech4 from 'svgs/tech-stacks/tech4';
import Head from 'next/head';

const RPA: React.FC = () => {
  return (
    <>
      <div className='mt-7'>
        <Navbar />
        <Landing variant="rpa" />
        <Mindor variant="rpa" />
        <AIDevelopmentSuccess variant="rpa" />
        <Slider variant="rpa" />
        <ChooseUs variant="rpa" />
        <Business variant="rpa" />
        <Process variant="rpa" />
        <Tech4 />
        <FAQ variant="rpa" />
      </div>
    </>
  )
}

export default RPA
