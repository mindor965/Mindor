import React, { useRef } from 'react';

const SERVICES: { id: string; title: string; description: string }[] = [
    {
        id: 'ai-consulting',
        title: 'AI Consulting',
        description:
            'We help businesses adopt AI strategically and responsibly. Our consulting services guide you through planning, adoptionand implementation — ensuring AI becomes a valuable, integrated part of your operations, productsand services.',
    },
    {
        id: 'gen-ai',
        title: 'Generative AI Development',
        description:
            'We help businesses adopt AI strategically and responsibly. Our consulting services guide you through planning, adoptionand implementation — ensuring AI becomes a valuable, integrated part of your operations, productsand services.',
    },
    {
        id: 'chatbots',
        title: 'AI-Powered Chatbots & Smart Assistants',
        description:
            'We help businesses adopt AI strategically and responsibly. Our consulting services guide you through planning, adoptionand implementation — ensuring AI becomes a valuable, integrated part of your operations, productsand services.',
    },
];

const scrollAmount = 320;

const ArrowButton: React.FC<{
    direction: 'left' | 'right';
    onClick: () => void;
    className?: string;
}> = ({ direction, onClick, className }) => {
    return (
        <button
            type="button"
            aria-label={direction === 'left' ? 'Previous services' : 'Next services'}
            onClick={onClick}
            className={
                `group inline-flex items-center justify-center h-10 w-10 rounded-full 
         bg-slate-900 text-white shadow-lg ring-1 ring-black/10 
         hover:bg-slate-800 active:scale-95 transition 
         disabled:opacity-40 disabled:cursor-not-allowed ${className ?? ''}`
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`h-5 w-5 ${direction === 'left' ? '' : 'rotate-180'}`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
};

const Services: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        if (!trackRef.current) return;
        trackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const handleNext = () => {
        if (!trackRef.current) return;
        trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
        <section className="max-w-7xl mx-auto py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="text-gray-900">Our AI Development Services:</span>{' '}
                    <span className="text-gray-500 font-semibold">From Concept to Scalable Solutions</span>
                </h2>
            </div>

            <div className="relative w-full mt-8 md:mt-12 px-16 md:px-20">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowButton direction="left" onClick={handlePrev} />
                </div>

                <div
                    ref={trackRef}
                    className={
                        `flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory 
             px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]`
                    }

                    style={{ WebkitOverflowScrolling: 'touch' as any }}
                >
                    <style jsx>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            div::-webkit-scrollbar { display: none; }
          `}</style>
                    {SERVICES.map((item) => (
                        <article
                            key={item.id}
                            className={
                                `group relative min-w-[220px] sm:min-w-[240px] md:min-w-[280px]
                 snap-start rounded-2xl border border-gray-100 bg-white 
                 shadow-sm transition-transform duration-300 ease-out 
                 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer`
                            }
                        >
                            <div className="p-5">

                                <div className="inline-flex items-center rounded-md bg-violet-100 px-2.5 py-1">
                                    <span className="text-xs font-semibold text-violet-700">{item.title}</span>
                                </div>

                                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowButton direction="right" onClick={handleNext} />
                </div>
            </div>
        </section>
    );
};

export default Services;