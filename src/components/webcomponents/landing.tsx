import Head from 'next/head';
import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';
import type { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface LandingProps {
    variant?: 'web' | 'ai' | 'blockchain' | 'rpa' | 'digital' | 'app';
}

// Country-specific maximum phone number lengths (excluding country code)
const COUNTRY_PHONE_LENGTHS: Record<string, number> = {
    'IN': 10, // India: 10 digits
    'US': 10, // United States: 10 digits
    'GB': 10, // United Kingdom: 10 digits
    'CA': 10, // Canada: 10 digits
    'AU': 9,  // Australia: 9 digits
    'DE': 11, // Germany: 11 digits
    'FR': 9,  // France: 9 digits
    'IT': 10, // Italy: 10 digits
    'ES': 9,  // Spain: 9 digits
    'BR': 11, // Brazil: 11 digits
    'MX': 10, // Mexico: 10 digits
    'JP': 10, // Japan: 10 digits
    'CN': 11, // China: 11 digits
    'KR': 10, // South Korea: 10 digits
    'SG': 8,  // Singapore: 8 digits
    'AE': 9,  // UAE: 9 digits
    'SA': 9,  // Saudi Arabia: 9 digits
    'ZA': 9,  // South Africa: 9 digits
    'NZ': 9,  // New Zealand: 9 digits
    'NL': 9,  // Netherlands: 9 digits
    'BE': 9,  // Belgium: 9 digits
    'CH': 9,  // Switzerland: 9 digits
    'AT': 10, // Austria: 10 digits
    'SE': 9,  // Sweden: 9 digits
    'NO': 8,  // Norway: 8 digits
    'DK': 8,  // Denmark: 8 digits
    'FI': 9,  // Finland: 9 digits
    'PL': 9,  // Poland: 9 digits
    'PT': 9,  // Portugal: 9 digits
    'GR': 10, // Greece: 10 digits
    'TR': 10, // Turkey: 10 digits
    'RU': 10, // Russia: 10 digits
    'PK': 10, // Pakistan: 10 digits
    'BD': 10, // Bangladesh: 10 digits
    'PH': 10, // Philippines: 10 digits
    'ID': 11, // Indonesia: 9-11 digits (using 11 as max)
    'MY': 10, // Malaysia: 9-10 digits (using 10 as max)
    'TH': 9,  // Thailand: 9 digits
    'VN': 10, // Vietnam: 9-10 digits (using 10 as max)
};

const Landing: React.FC<LandingProps> = ({ variant = 'web' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        whatsappNumber: '' as string | undefined
    });
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>('US');

    const content = {
        web: {
            badge: {
                text: "Custom Web Development Services",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Transform Your Ideas with Expert{' '}
                    <span>Custom Web Development</span>{' '}
                    Services
                </>
            ),
            description: "Generic tools don't solve specific problems. We at Mindor specialize in crafting custom-built web platforms tailored precisely to your workflows, processesand customers, empowering businesses globally.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get Free Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        ai: {
            badge: {
                text: "AI Development Services",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    AI Development Services That Power Digital Transformation

                </>
            ),
            description: "AI isn’t the future; it’s the engine powering smarter, fasterand more efficient businesses today. At Mindor, we offer end-to-end AI Development Services that transform your vision into real-world intelligent solutions. Tired of guesswork? Our expert AI engineers and data scientists help you harness data-driven insights to gain a lasting competitive edge across any industry.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get AI Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        blockchain: {
            badge: {
                text: "Drive Innovation with Expert",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Blockchain Development Services
                </>
            ),
            description: "Ready to transform your business with cutting-edge technology? We provide expert blockchain development services that empower startups, enterprisesand visionary brands. Our secure, scalableand custom blockchain solutions are designed to drive innovation and build unparalleled trust in your operations.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get Blockchain Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        rpa: {
            badge: {
                text: "Streamline Business Operations with Smart Automation",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Robotic Process Automation Services
                </>
            ),
            description: "Tired of repetitive, manual tasks slowing down your team? Our Robotic Process Automation (RPA) services help streamline operations by automating routine processes and reducing costly errors. We use industry-leading RPA tools to free up your team for high-value work and fast-track your digital transformation — across any industry.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: null,
            cta: {
                text: "Get RPA Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        digital: {
            badge: {
                text: "Digital Marketing",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Digital Marketing Services That Drive Business Growth
                </>
            ),
            description: "At Mindor, we don't just “do” digital marketing. We help businesses like yours turn visibility into trust, clicks into customersand strategies into scalable growth. Whether you're launching, growing, or reinventing, we bring the right mix of creativity, dataand performance to move your brand forward with purpose and impact.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-white text-lg font-medium">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Strengthen Online Presence
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Increase Website Traffic
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Boost Brand Authority
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Drive Consistent Growth
                    </div>
                </div>
            ),
            cta: {
                text: "Get Free Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
        app: {
            badge: {
                text: "Mobile App Development",
                className: "backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30"
            },
            title: (
                <>
                    Mobile App Development Services That Drive Real Business Impact
                </>
            ),
            description: "We design and develop custom mobile apps that are intuitive, scalableand built to solve real-world problems trusted by startups and enterprises alike.",
            background: "linear-gradient(135deg, #232D62 0%, #4A5DB8 100%), url(/assets/background.png)",
            floatingElements: (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
            ),
            features: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-white text-lg font-medium">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Custom Mobile Apps
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Design-Driven Development
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Real-Time Collaboration
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                            <span className="text-green-400 text-xl font-bold">✓</span>
                        </span>
                        Serving Clients Globally
                    </div>
                </div>
            ),
            cta: {
                text: "Get Free Consultation",
                className: "bg-white text-black hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }
        },
    };

    const currentContent = content[variant];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // For name field, only allow alphabets and spaces
        if (name === 'name') {
            const alphabetsOnly = value.replace(/[^a-zA-Z\s]/g, ''); // Remove all non-alphabetic characters except spaces
            setFormData(prev => ({
                ...prev,
                [name]: alphabetsOnly
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate name: must contain only alphabets and spaces
        if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            alert('Name must contain only alphabets.');
            return;
        }

        // Validate phone number: must be a valid international phone number
        if (formData.whatsappNumber) {
            if (!isValidPhoneNumber(formData.whatsappNumber)) {
                alert('Please enter a valid phone number with country code.');
                return;
            }

            // Country-specific length validation
            try {
                const phoneNumber = parsePhoneNumber(formData.whatsappNumber);
                const country = phoneNumber?.country;

                if (country && COUNTRY_PHONE_LENGTHS[country]) {
                    const nationalNumber = phoneNumber.nationalNumber;
                    const maxLength = COUNTRY_PHONE_LENGTHS[country];

                    if (nationalNumber.length > maxLength) {
                        const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || country;
                        alert(`${countryName} phone numbers should not exceed ${maxLength} digits.`);
                        return;
                    }
                }
            } catch (error) {
                // If parsing fails, the isValidPhoneNumber check above should catch it
                console.error('Error parsing phone number:', error);
            }
        }

        await fetch(
            "https://script.google.com/macros/s/AKfycbwKzQ31giqIeLuOnFBjgtFhqy6Lvh4dfwvFrkDARJsjv2PJFZAe5edlxp09odSfVE1N1w/exec",
            {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    whatsappNumber: formData.whatsappNumber,
                    service: currentContent.badge.text,
                }),
            }
        );



        // Format the message
        const message = `New ${currentContent.badge.text} Inquiry:
        
Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsappNumber || 'Not provided'}

Service Interested: ${currentContent.badge.text}`;

        // WhatsApp number to send to
        const whatsappNumber = '918928210967'; // +91 89282 10967

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: '',
            whatsappNumber: ''
        });
    };

    return (
        <>
            <Head>
                <meta
                    property="og:title"
                    content="Technology & Digital Services Company | Mindor"
                />
                <meta
                    property="og:description"
                    content="We design and build digital systems that help businesses grow. From web, mobile, AI, automation to marketing, Mindor delivers scalable technology solutions."
                />
                <meta
                    property="og:url"
                    content="https://mindor.io/"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Mindor" />
                <meta
                    property="og:image"
                    content="/og/homepage.webp"
                />
            </Head>
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{
                    background: currentContent.background,
                    backgroundSize: 'cover, cover',
                    backgroundPosition: 'center, center',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundBlendMode: 'overlay'
                }}>

                <div className="absolute inset-0 bg-black/20"></div>

                {currentContent.floatingElements}

                <div className=" mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div className="text-white space-y-6">
                            <div className="inline-block">
                                <span className={currentContent.badge.className}>
                                    {currentContent.badge.text}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight">
                                {currentContent.title}
                            </h1>

                            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl font-medium">
                                {currentContent.description}
                            </p>

                            {currentContent.features && (
                                <div className="pt-2">
                                    {currentContent.features}
                                </div>
                            )}

                            <div className="pt-4">
                                <a href="https://calendar.app.google/c94YxYt7MYuphBsw6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block">
                                    <button className={currentContent.cta.className}>
                                        {currentContent.cta.text}
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm mb-10 lg:mb-0">
                            <div className="text-white px-6 py-4 rounded-t-xl -mx-8 -mt-8 mb-6" style={{ backgroundColor: '#4252AD' }}>
                                <p className="text-xl font-semibold text-center">Get in Touch with Us</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <h1>Name</h1>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <h1>Email</h1>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                        required
                                    />
                                </div>


                                <div>
                                    <h1>WhatsApp</h1>
                                    <PhoneInput
                                        international
                                        defaultCountry="US"
                                        value={formData.whatsappNumber}
                                        onChange={(value) => {
                                            setFormData(prev => ({ ...prev, whatsappNumber: value || '' }));
                                            // Extract country from phone number
                                            if (value) {
                                                try {
                                                    const phoneNumber = parsePhoneNumber(value);
                                                    if (phoneNumber?.country) {
                                                        setSelectedCountry(phoneNumber.country);
                                                    }
                                                } catch (error) {
                                                    // Ignore parsing errors during typing
                                                }
                                            }
                                        }}
                                        onCountryChange={(country) => {
                                            if (country) {
                                                setSelectedCountry(country);
                                            }
                                        }}
                                        placeholder="WhatsApp Number"
                                        className="phone-input-wrapper"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition-colors duration-200 transform hover:scale-[1.02] shadow-lg"
                                    style={{ backgroundColor: '#4252AD' }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
