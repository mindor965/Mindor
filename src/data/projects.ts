export interface Project {
  id: string;
  title: string;
  tag: string;
  category: 'All' | 'Non-Profit & Honors' | 'Lifestyle & Brands' | 'Specialized Services';
  url: string;
  displayUrl: string;
  image: string;
  description: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'sammantiranga',
    title: 'Samman Tiranga Foundation',
    tag: 'Civic Initiative & Non-Profit',
    category: 'Non-Profit & Honors',
    url: 'https://sammantiranga.com',
    displayUrl: 'sammantiranga.com',
    image: '/portfolio/sammantiranga.png',
    description: 'A nationwide civic platform dedicated to educating citizens on the Flag Code of India and facilitating certified, dignified flag exchanges across 30+ cities.',
    featured: true,
  },
  {
    id: 'kashicosmos',
    title: 'Kashi Cosmos',
    tag: 'Astronomy Tourism & Education',
    category: 'Specialized Services',
    url: 'https://kashicosmos.com',
    displayUrl: 'kashicosmos.com',
    image: '/portfolio/kashicosmos.png',
    description: 'Astronomy tourism and space education platform in Varanasi, offering night-sky telescope sessions along the historic ghats, workshops, and school programs.',
    featured: true,
  },
  {
    id: 'riseforsuccess',
    title: 'Rise For Success (RFS.ORG)',
    tag: 'Website, Non-Profit, Next.js',
    category: 'Non-Profit & Honors',
    url: 'https://www.riseforsuccess.org/',
    displayUrl: 'riseforsuccess.org',
    image: '/portfolio/riseforsuccess.png',
    description: 'Website for a registered non-profit training young refugee women and girls in photography and storytelling in Bidi-Bidi Settlement, Uganda, to help them reclaim their voices and build self-reliance.',
    featured: true,
  },
  {
    id: 'gcpawards',
    title: 'Global Child Prodigy Awards',
    tag: 'Global Honors & Talent Recognition',
    category: 'Non-Profit & Honors',
    url: 'https://gcpawards.com',
    displayUrl: 'gcpawards.com',
    image: '/portfolio/gcpawards.png',
    description: 'The official digital portal for the premier global initiative recognizing and honoring extraordinary child prodigies across arts, sciences, and innovation worldwide.',
    featured: true,
  },
  {
    id: 'omkailash',
    title: 'OM Kailash',
    tag: 'Pilgrimage & Expedition Travel',
    category: 'Specialized Services',
    url: 'https://omkailash.com',
    displayUrl: 'omkailash.com',
    image: '/portfolio/omkailash.png',
    description: 'Specialized pilgrimage expedition operator portal managing Kailash Mansarovar Yatra packages, sacred Himalayan itineraries, and international traveler logistics.',
    featured: false,
  },
  {
    id: 'samanthajagan',
    title: 'Samantha Jagan',
    tag: 'Luxury Bridal & Celebrity Artistry',
    category: 'Lifestyle & Brands',
    url: 'https://samanthajagan.com',
    displayUrl: 'samanthajagan.com',
    image: '/portfolio/samanthajagan.png',
    description: 'Digital portfolio and consultation portal for celebrity makeup artist Samantha Jagan, highlighting high-profile bridal collections, workshops, and bookings.',
    featured: false,
  },
  {
    id: 'londonpandit',
    title: 'London Pandit',
    tag: 'Professional Ceremonial Services',
    category: 'Specialized Services',
    url: 'https://londonpandit.com',
    displayUrl: 'londonpandit.com',
    image: '/portfolio/londonpandit.png',
    description: 'Ceremonial booking and consultation platform for UK-based Vedic priest Pandit Neeraj Dixit, providing traditional religious services and consultations.',
    featured: false,
  },
  {
    id: 'nivedithanaaidu',
    title: 'Niveditha Naaidu',
    tag: 'Personal Brand & Creative Studio',
    category: 'Lifestyle & Brands',
    url: 'https://nivedithanaaidu.com',
    displayUrl: 'nivedithanaaidu.com',
    image: '/portfolio/nivedithanaaidu.png',
    description: 'Personal brand experience and client appointment platform for custom tattoo artist Niveditha Naaidu, featuring creative portfolios and direct scheduling.',
    featured: false,
  },
];
