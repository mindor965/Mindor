import React from 'react';

interface MindorProps {
    variant?: 'default' | 'service' | 'blockchain' | 'rpa' | 'app';
}

const PillLabel: React.FC<{ x: number; y: number; text: string }> = ({ x, y, text }) => (
    <foreignObject x={x} y={y} width={90} height={32}>
        <div className="w-[90px] h-8 bg-white text-[11px] font-semibold tracking-wide text-[#5B5BD6] rounded-md shadow-sm border border-[#E8E7FF] flex items-center justify-center">
            {text}
        </div>
    </foreignObject>
);

const RadialGraphic: React.FC = () => {
    const size = 320; 
    const center = size / 2;

    return (
        <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${size} ${size}`}
            className="max-w-[260px] md:max-w-[300px] lg:max-w-[340px]"
        >
            <circle cx={center} cy={center} r={120} fill="#F3F2FF" />
            <circle cx={center} cy={center} r={135} fill="none" stroke="#E6E5FF" strokeWidth={14} />

            {/* Accent segmented arcs */}
            {/* Bottom-left arc */}
            <path
                d="M 80 220 A 120 120 0 0 0 220 260"
                fill="none"
                stroke="#6E6AE8"
                strokeLinecap="round"
                strokeWidth={18}
            />
            {/* Bottom-right arc */}
            <path
                d="M 220 260 A 120 120 0 0 0 280 200"
                fill="none"
                stroke="#8B88F1"
                strokeLinecap="round"
                strokeWidth={18}
            />
            {/* Top-right faint arc */}
            <path
                d="M 260 160 A 120 120 0 0 0 240 100"
                fill="none"
                stroke="#CFCDFB"
                strokeLinecap="round"
                strokeWidth={16}
            />

            {/* Inner ring accent */}
            <circle cx={center} cy={center} r={78} fill="#EDEBFF" />
            <circle cx={center} cy={center} r={78} fill="none" stroke="#D7D4FF" strokeWidth={8} />

            {/* Center label */}
            <g>
                {/* small decorative dots */}
                <circle cx={center - 18} cy={center - 20} r={3} fill="#6E6AE8" />
                <circle cx={center} cy={center - 24} r={3} fill="#8B88F1" />
                <circle cx={center + 18} cy={center - 20} r={3} fill="#B0AEFF" />
                <text
                    x={center}
                    y={center + 4}
                    textAnchor="middle"
                    className="fill-[#2A2A2A]"
                    style={{ fontSize: 18, fontWeight: 700 }}
                >
                    Mindor Tech
                </text>
            </g>

            {/* Floating pill labels */}
            <PillLabel x={222} y={84} text="CODE" />
            <PillLabel x={46} y={188} text="CREATIVITY" />
            <PillLabel x={210} y={206} text="STRATEGY" />

            {/* Thin outer highlight ring */}
            <circle cx={center} cy={center} r={150} fill="none" stroke="#EFEFFF" strokeWidth={6} />
        </svg>
    );
};

const Mindor: React.FC<MindorProps> = ({ variant = 'default' }) => {
    const content = {
        default: {
            title: 'Driven by Digital. Defined by Impact',
            description:
                'Mindor is where innovation meets execution. We blend creativity, codeand strategy to build next-gen digital solutions from mobile apps and web platforms to AI systems, automationand blockchain technology. With a sharp focus on scalability and impact, we help businesses stay ahead in an ever-evolving digital world.',
            image: '/assets/Mindor.png',
            alt: 'Mindor Tech',
        },
        service: {
            title: 'Tailored Web Applications Designed for Your Business Needs Perfectly',
            description:
                "Most off-the-shelf solutions force companies to compromise, leading to workarounds, limitationsand inefficiencies that become part of the daily workflow. At Mindor, we build bespoke web platforms that align perfectly with your unique business, not someone else's template. We empower businesses with solutions that drive growth.",
            image: '/assets/web.png',
            alt: 'Mindor Services',
        },
        blockchain: {
            title: 'Unlock the Potential of Decentralized Applications with Blockchain Development',
            description:
                'In the era of digital transformation, blockchain stands out as a revolutionary technology. At Mindor, we offer comprehensive blockchain development services that empower businesses to leverage the benefits of decentralization, transparencyand security.',
            image: '/assets/block.png',
            alt: 'Mindor Blockchain',
        },
        rpa: {
            title: 'Streamline Business Operations with Smart Automation',
            description:
                'Tired of repetitive, manual tasks slowing down your team? Our Robotic Process Automation (RPA) services help streamline operations by automating routine processes and reducing costly errors. We use industry-leading RPA tools to free up your team for high-value work and fast-track your digital transformation — across any industry.',
            image: '/assets/block.png',
            alt: 'Mindor RPA',
        },
        app: {
            title: 'End to End Mobile App Development Services',
            description:
                'Bringing a mobile app idea to life takes more than just writing code. It requires smart strategy, thoughtful designand strong technical execution. Every stage, from the first sketch to the final launch, is handled by our in-house team. This includes product planning, UI/UX design, development, testing, deploymentand long-term support. Whether you\'re building a new product or upgrading an existing one, we create solutions tailored to your goals and your users. Each app is built to be scalable, secureand high-performing. It works seamlessly across both iOS and Android platforms. We use modern technologies like Flutter and React Native to ensure your app is future-ready. With agile sprints and real-time updates, you\'ll always know what\'s happening. Our process is transparent, collaborativeand designed to keep you involved every step of the way.',
            image: '/assets/App.png',
            alt: 'Mobile App Development',
        },
    } as const;

    const currentContent = content[variant];

    return (
        <section className="px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 flex items-center justify-center" style={{ backgroundColor: '#F1F0FF' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 max-w-7xl w-full items-center">
                <div className="order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute -right-2 -top-2 w-[96%] h-[92%] insert-0" style={{
                            background: 'linear-gradient(135deg, rgba(198,193,255,0.75), rgba(243,242,255,0.55))',
                           
                        }} />
                        <div className="relative bg-gradient-to-b from-[#E6E4FF] to-[#F1F0FF] p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-white/40 backdrop-blur-sm">
                            <div className="">
                                <div className="p-1 sm:p-1.5 md:p-2">
                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] leading-snug font-semibold text-[#2A2A2A] mb-3 sm:mb-4">
                                        {currentContent.title}
                                    </h2>
                                    <p className="text-xs sm:text-[13px] md:text-sm lg:text-[15px] leading-5 sm:leading-6 text-[#3A3A3A] max-w-none sm:max-w-[48ch]">
                                        {currentContent.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <img
                            src={currentContent.image}
                            alt={currentContent.alt}
                            className="w-full h-auto object-contain drop-shadow-2xl max-h-64 sm:max-h-80 lg:max-h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mindor;