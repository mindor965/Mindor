'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';
import Logo from "../../public/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 rounded-2xl" style={{ backgroundColor: '#D9DDEA' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 lg:ml-3">
              <img src="/assets/Logo.png" alt="Mindor Tech Logo" className="w-[202px] h-[48.51px]" />
            </div>
            <p className="text-gray-600 text-sm mb-4 lg:ml-3">
              Innovative technology solutions for modern businesses. We create digital experiences that matter.
            </p>
            
            <div className="flex space-x-4 lg:ml-3">
              <Link href="https://wa.me/918928210967?text=Hi%20Mindor%20Team,%20I%20need%20assistance%20with%20your%20services." target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-green-600">
                <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/Mindor_Tech" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600 transition-colors duration-200">
                <img src="/assets/x.png" alt="Twitter" className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/mindor_tech/" target="_blank" rel="noopener noreferrer" className=" hover:text-pink-600 transition-colors duration-200">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/mindortech" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-700 transition-colors duration-200">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:ml-9">
            <h3 className="text-lg font-semibold mb-4" style={{color:'#2F2F2F'}}>Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4" style={{color:'#2F2F2F'}}>Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/custom-web-development-services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-development-services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/ai-development-services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/blockchain-development-services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing-services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/robotic-process-automation-services" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  RPA
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{color:'#2F2F2F'}}>More Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">
                  Terms and Condition
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4" style={{color:'#2F2F2F'}}>Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-[200px] h-8 rounded-[16px] items-center jsutify-center text-center"
              />
              <button
                className="flex flex-col justify-center items-center px-2 py-1.5 text-center outline-none no-underline text-white w-[200px] h-8 rounded-[16px] bg-[#0A66C2] font-sans"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Mindor Tech. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;