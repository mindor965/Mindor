import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Choose from '@/components/webcomponents/chooseus';
import Business from '@/components/Business';
import Process from '@/components/aicomponents/process';
import FAQ from '@/components/webcomponents/faq';
import Services from '@/components/aicomponents/services';
import AIDevelopmentSuccess from '@/components/aicomponents/developement';
import Tech3 from 'svgs/tech-stacks/tech3';

const AI: React.FC = () => {
    return (
        <>
            <div className='mt-7'>
                <Navbar />
                <Landing variant="ai" />
                <AIDevelopmentSuccess />
                <Services />
                <Choose variant="ai" />
                <Business variant="ai" />
                <Process />
                <Tech3 />
                <FAQ variant="ai" />
            </div>
        </>
    );
};

export default AI;
