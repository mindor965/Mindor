import { color } from 'framer-motion';
import React, { useState } from 'react';

interface ServiceTab {
    id: string;
    title: string;
    content: {
        title: string;
        description: string;
    }[];
}

const services: React.FC = () => {
    const [activeTab, setActiveTab] = useState('comprehensive');

    const leftMenuItems = [
        { id: 'comprehensive', label: 'Comprehensive Website Development' },
        { id: 'ecommerce', label: 'Robust E-commerce Development Solutions' },
        { id: 'applications', label: 'Powerful Web Applications' },
        { id: 'frontend', label: 'Expert Front-End Development' },
        { id: 'backend', label: 'Secure Back-End Development' },
        { id: 'fullstack', label: 'Complete Full-Stack Solutions' },
        { id: 'tools', label: 'Custom Internal Tools & Systems for Business Efficiency' }
    ];

    const tabContent: Record<string, ServiceTab> = {
        comprehensive: {
            id: 'comprehensive',
            title: 'Comprehensive Website Development',
            content: [
                {
                    title: 'Business & Corporate Websites',
                    description: 'Build a professional online presence that enhances credibility and communicates your brand effectively.'
                },
                {
                    title: 'Portfolio & Personal Sites',
                    description: 'Showcase your work or story through visually appealing, easy-to-navigate designs that highlight your strengths.'
                },
                {
                    title: 'Product Landing Pages',
                    description: 'Designed to convert - perfect for launching a new product or campaign with focused messaging and calls-to-action.'
                },
                {
                    title: 'Blog & News Platforms',
                    description: 'Custom publishing platforms tailored for writers, journalists and businesses to publish regularly and grow readership.'
                },
                {
                    title: 'SEO-Optimized Pages',
                    description: 'We ensure fast-loading, schema-integrated, mobile-optimized websites that rank better on search engines, helping your business reach a wider audience.'
                }
            ]
        },
        ecommerce: {
            id: 'ecommerce',
            title: 'Robust E-commerce Development Solutions',
            content: [
                {
                    title: 'Custom Online Stores',
                    description: 'From design to checkout – we create intuitive online stores tailored to your unique business model, helping you sell effectively.'
                },
                {
                    title: 'Payment Gateway Integration',
                    description: 'Secure and seamless payment experiences integrated with major providers like Razorpay, Stripeand more.'
                },
                {
                    title: 'Product & Inventory Management',
                    description: 'Easily manage stock levels, variantsand product details with custom dashboards'
                },
                {
                    title: 'Cart Systems, Coupons & Order Tracking',
                    description: 'Smooth user journey with intelligent cart flows, discount systemsand real-time order status tracking.'
                },
            ]
        },
        applications: {
            id: 'applications',
            title: 'Powerful Web Applications',
            content: [
                {
                    title: 'Progressive Web Apps',
                    description: 'Fast, reliableand engaging web applications that work offline and provide native app-like experience.'
                },
                {
                    title: 'Real-time Applications',
                    description: 'Live chat systems, collaboration toolsand real-time dashboards for dynamic user interactions.'
                },
                {
                    title: 'API Development',
                    description: 'RESTful and GraphQL APIs for seamless integration with third-party services and mobile apps.'
                },
                {
                    title: 'Database Solutions',
                    description: 'Scalable database architecture design and optimization for high-performance applications.'
                },
                {
                    title: 'Cloud Integration',
                    description: 'AWS, Google Cloudand Azure integration for scalable, reliable cloud-based solutions.'
                }
            ]
        },
        frontend: {
            id: 'frontend',
            title: 'Expert Front-End Development',
            content: [
                {
                    title: 'Modern UI/UX Design',
                    description: 'Cutting-edge user interfaces built with React, Vue.jsand Angular for exceptional user experiences.'
                },
                {
                    title: 'Responsive Design',
                    description: 'Mobile-first, cross-browser compatible designs that look perfect on any device or screen size.'
                },
                {
                    title: 'Interactive Elements',
                    description: 'Engaging animations, micro-interactionsand dynamic content that keeps users engaged.'
                },
                {
                    title: 'Performance Optimization',
                    description: 'Lightning-fast loading times through code splitting, lazy loadingand advanced optimization techniques.'
                },
                {
                    title: 'Accessibility Standards',
                    description: 'WCAG compliant development ensuring your website is accessible to users with disabilities.'
                }
            ]
        },
        backend: {
            id: 'backend',
            title: 'Secure Back-End Development',
            content: [
                {
                    title: 'Server Architecture',
                    description: 'Robust server-side solutions built with Node.js, Python, PHPand other modern technologies.'
                },
                {
                    title: 'Security Implementation',
                    description: 'Advanced security measures including encryption, authenticationand protection against common vulnerabilities.'
                },
                {
                    title: 'Database Management',
                    description: 'Efficient database design and management with MySQL, PostgreSQL, MongoDBand other systems.'
                },
                {
                    title: 'API Integration',
                    description: 'Seamless integration with third-party services, payment gatewaysand external data sources.'
                },
                {
                    title: 'Scalability Solutions',
                    description: 'Microservices architecture and load balancing for applications that grow with your business.'
                }
            ]
        },
        fullstack: {
            id: 'fullstack',
            title: 'Complete Full-Stack Solutions',
            content: [
                {
                    title: 'End-to-End Development',
                    description: 'Complete web solutions from concept to deployment, handling both frontend and backend development.'
                },
                {
                    title: 'Technology Stack Selection',
                    description: 'Expert guidance in choosing the right technology stack for your specific business requirements.'
                },
                {
                    title: 'DevOps & Deployment',
                    description: 'Automated deployment pipelines, continuous integrationand infrastructure management.'
                },
                {
                    title: 'Maintenance & Support',
                    description: 'Ongoing technical support, updatesand maintenance to keep your application running smoothly.'
                },
                {
                    title: 'Performance Monitoring',
                    description: 'Real-time monitoring, error trackingand performance optimization for maximum uptime.'
                }
            ]
        },
        tools: {
            id: 'tools',
            title: 'Custom Internal Tools & Systems for Business Efficiency',
            content: [
                {
                    title: 'Business Process Automation',
                    description: 'Custom tools to automate repetitive tasks and streamline your business operations.'
                },
                {
                    title: 'CRM & Management Systems',
                    description: 'Tailored customer relationship management and internal management systems for your workflow.'
                },
                {
                    title: 'Data Analytics Dashboards',
                    description: 'Custom reporting and analytics dashboards to visualize your business data and make informed decisions.'
                },
                {
                    title: 'Employee Management Tools',
                    description: 'Internal systems for HR, project managementand team collaboration to boost productivity.'
                },
                {
                    title: 'Integration Solutions',
                    description: 'Connect your existing tools and systems for seamless data flow and improved efficiency.'
                }
            ]
        }
    };

    return (
        <div className="bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Scalable Web Development Services Built for Your Growth
                </h1>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3  rounded-lg p-6">
                        <div className="space-y-2">
                            {leftMenuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${activeTab === item.id
                                        ? ' shadow-lg text-white'
                                        : ' hover:text-white'
                                        }`}

                                    style={activeTab === item.id ? { backgroundColor: '#232D62' } : { color: "#102D47" }}
                                >
                                    <span className="text-sm font-regular leading-relaxed">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>
                    <div className="lg:w-2/3">
                        <div className=" p-8">

                            <div className="grid gap-6 md:grid-cols-2">
                                {tabContent[activeTab].content.map((service, index) => (
                                    <div
                                        key={index}
                                        className="rounded-lg p-6 hover:shadow-md transition-shadow duration-200 border" style={{ backgroundColor: '#f4f4f7ff', borderColor: '#000000' }}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ color: '#102D47' }}>
                                            {service.title}
                                        </h3>
                                        <p className="font-regular text-sm leading-relaxed" style={{ color: '#102D47' }}>
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default services;