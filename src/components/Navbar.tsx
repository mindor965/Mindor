import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileServiceDropdownOpen, setMobileServiceDropdownOpen] = useState(false);

  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "#232D66" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 md:px-20 py-3 sm:py-2">
        <Link href="/" passHref>
          <div className="flex items-center">
            <div className="rounded-lg flex items-center justify-center">
              <img
                src="/assets/Logo.png"
                alt="Mindor Tech Logo"
                className="w-[100px] h-[24px] sm:w-[140px] sm:h-[34px] md:w-[180px] md:h-[44px] lg:w-[202px] lg:h-[48.51px] brightness-0 invert cursor-pointer"
              />
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex space-x-6 mr-36">
          <Link href="/" passHref>
            <span className="text-white font-medium hover:text-blue-200 transition-colors text-lg cursor-pointer">
              Home
            </span>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setServiceDropdownOpen(true)}
            onMouseLeave={() => setServiceDropdownOpen(false)}
          >
            <div className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors text-md cursor-pointer">
              <span>Service</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${serviceDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${serviceDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
              <div className="py-2">
                <Link href="/mobile-app-development-services">
                  <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/mobile-app-development-services') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                    Mobile App Development
                  </span>
                </Link>
                <Link href="/custom-web-development-services">
                  <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/custom-web-development-services') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                    Web Development
                  </span>
                </Link>
                <Link href="/blockchain-development-services">
                  <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/blockchain-development-services') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                    Blockchain Development
                  </span>
                </Link>
                <Link href="/digital-marketing-services">
                  <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/digital-marketing-services') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                    Digital Marketing
                  </span>
                </Link>
                <Link href="/ai-development-services">
                  <span className={`block px-4 py-3 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0 ${isActive('/ai-development-services') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                    AI Powered Solutions
                  </span>
                </Link>
                <Link href="/robotic-process-automation-services">
                  <span className={`block px-4 py-3 transition-colors cursor-pointer ${isActive('/robotic-process-automation-services') ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'}`}>
                    Robotic Process Automation
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* <Link href="/" passHref>
            <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">
              About
            </span>
          </Link> */}

          <Link href="/blog" passHref>
            <span className="text-white/80 hover:text-white transition-colors text-md cursor-pointer">
              Blog
            </span>
          </Link>
        </div>

        <a
          href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <button className="w-[180px] h-[50px] bg-white backdrop-blur-md border border-white/30 px-8 xl:px-12 py-1 rounded-full text-gray-900  transition-all text-lg font-bold shadow-lg flex items-center justify-center font-bold whitespace-nowrap">
            <span className="inline-flex items-center justify-center rounded-full mr-2" style={{ width: 20, height: 20 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487" />
              </svg>
            </span>
            Contact Us
          </button>
        </a>

        <button
          className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {navOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#232D66] z-[100] flex flex-col">
          <div className="max-w-7xl mx-auto w-full">
            <Link href="/" passHref>
              <div className="flex items-center justify-between px-3 py-3 border-b border-white/10">
                <img
                  src="/assets/Logo.png"
                  alt="Mindor Tech Logo"
                  className="w-[100px] h-[24px] brightness-0 invert"
                />
                <button
                  className="p-2 text-white"
                  aria-label="Close navigation menu"
                  onClick={() => setNavOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </Link>
          </div>

          <div className="max-w-7xl mx-auto w-full flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <Link href="/" passHref>
              <div className="text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setNavOpen(false)}>
                Home
              </div>
            </Link>

            <div className="py-1">
              <div
                className="flex items-center justify-between text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setMobileServiceDropdownOpen(!mobileServiceDropdownOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileServiceDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${mobileServiceDropdownOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 space-y-1">
                  <Link href="/mobile-app-development-services">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/mobile-app-development-services') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Mobile App Development
                    </div>
                  </Link>
                  <Link href="/custom-web-development-services">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/custom-web-development-services') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Web Development
                    </div>
                  </Link>
                  <Link href="/blockchain-development-services">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/blockchain-development-services') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Blockchain Development
                    </div>
                  </Link>
                  <Link href="/digital-marketing-services">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/digital-marketing-services') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      Digital Marketing
                    </div>
                  </Link>
                  <Link href="/ai-development-services">
                    <div className={`text-base py-2 px-2 rounded transition-colors cursor-pointer ${isActive('/ai-development-services') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`} onClick={() => setNavOpen(false)}>
                      AI Powered Solutions
                    </div>
                  </Link>
                  <Link href="/robotic-process-automation-services">
                    <span className={`block px-2 py-2 transition-colors cursor-pointer ${isActive('/robotic-process-automation-services') ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`}>
                      Robotic Process Automation
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <Link href="/" passHref>
              <div className="text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setNavOpen(false)}>
                About
              </div>
            </Link> */}

            <Link href="/blog" passHref>
              <div className="text-white font-medium text-lg py-3 px-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer" onClick={() => setNavOpen(false)}>
                Blog
              </div>
            </Link>
          </div>

          <div className="max-w-7xl mx-auto w-full p-4 border-t border-white/10">
            <a
              href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white hover:bg-white/30 transition-all text-base font-medium shadow-lg flex items-center justify-center w-full">
                <span className="inline-flex items-center justify-center bg-white rounded-full mr-3" style={{ width: 24, height: 24 }}>
                  <img src="/assets/whatsapp.png" alt="WhatsApp Icon" className="w-4 h-4" />
                </span>
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;