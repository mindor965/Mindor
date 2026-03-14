'use client';

import Link from 'next/link';
import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section
            className="w-full py-16 px-6 lg:py-20 flex justify-center"
        >
            <div 
                className="w-full max-w-[1139px] min-h-[337px] lg:h-[337px] mx-auto rounded-2xl p-8 md:p-12 relative overflow-hidden"
                style={{
                    background: '#232D62',
                    backgroundImage: 'linear-gradient(90deg, rgba(24, 34, 86, 0.59) 0%, rgba(28, 34, 61, 0.99) 100%)'
                }}
            >

                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                    style={{
                        backgroundImage: 'url(/assets/rectan.png)',
                        mixBlendMode: 'normal'
                    }}
                />
                
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style={{
                        backgroundImage: 'url(/assets/Rectangle.png)',
                        mixBlendMode: 'normal'
                    }}
                />
                
                <div className="absolute inset-0 bg-black/10" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left min-h-full">
                    <div className="flex-1 lg:mt-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Great ideas deserve great attention.
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Have an idea or challenge? Let's shape it into a solution that works for you.
                        </p>
                    </div>

                    <div className="flex-shrink-0 lg:mt-8">
                        <Link
                            href="https://calendar.app.google/c94YxYt7MYuphBsw6"
                            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                        >
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;