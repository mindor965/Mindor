export const SITE_NAME = "Mindor";
export const SITE_URL = "https://mindor.io";

export const defaultSEO = {
  title: "Technology & Digital Services Company | Mindor",
  description:
    "We design and build digital systems that help businesses grow. From web, mobile, AI, automation to marketing, Mindor delivers scalable technology solutions.",
};

export const pageSEO: Record<string, { title: string; description: string, image:string }> = {
  "/": {
    title: "Technology & Digital Services Company | Mindor",
    description:
      "We design and build digital systems that help businesses grow. From web, mobile, AI, automation to marketing, Mindor delivers scalable technology solutions.",
    image: "/og/homepage.webp",
  },
  "/mobile-app-development-services": {
    title: "Mobile App Development Services for iOS & Android",
    description:
      "End-to-end mobile app development services delivering secure, scalable, and user-focused applications.",
    image: "/og/mobile-app-development.webp",
  },
  "/custom-web-development-services": {
    title: "Custom Web Development Services for Businesses",
    description:
      "Custom web development services focused on performance, security, and scalable digital experience",
      image:"/og/custom-web-development.webp"
  },
  "/blockchain-development-services": {
    title: "Blockchain Development Services for Secure Solutions",
    description:
      "Custom blockchain development services for secure, transparent, and decentralized digital solutions",
      image:"/og/blockchain-development.webp"
  },
  "/digital-marketing-services": {
    title: "Digital Marketing Services for Business Growth",
    description:
      "Performance-driven digital marketing services focused on visibility, leads, and long-term business growth.",
      image:"/og/digital-marketing.webp"
  },
  "/ai-development-services": {
    title: "AI Development Services for Intelligent Systems",
    description:
      "Build intelligent, data-driven solutions with custom AI development services for modern businesses",
      image:"/og/ai-development.webp"
  },
  "/robotic-process-automation-services": {
    title: "Robotic Process Automation Services for Enterprises",
    description:
      "Automate repetitive processes and improve efficiency with scalable robotic process automation services.",
      image:"/og/robotic-process-automation.webp"
  }
};
