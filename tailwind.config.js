/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        
        primary: {
          DEFAULT: '#6E59A5',
          dark: '#1A1F2C',
          light: '#9b87f5',
        },
        accent: '#0EA5E9',
        text: {
          primary: '#1A1F2C',
          secondary: '#64748b',
          light: '#94a3b8',
        },
        background: {
          light: '#f8fafc',
          white: '#ffffff',
          darkblue: '#3c3788',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        primary: ['Pacifico', 'system-ui', '-apple-system', 'sans-serif'],
        secondary: ['Pacifico', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'light': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'primary': '0 20px 25px -5px rgba(110, 89, 165, 0.25)',
        'primary-hover': '0 25px 30px -5px rgba(110, 89, 165, 0.35)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundImage: {
        // Current active background - Modern tech workspace
        'custom-bg': "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        
        // Alternative background options (comment/uncomment to switch)
        // 'custom-bg': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", // Digital network
        // 'custom-bg': "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", // Team collaboration
        // 'custom-bg': "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", // Creative workspace
        
        'gradient-primary': 'linear-gradient(135deg, #1e326e, #1e326e)',
        'gradient-hero': 'linear-gradient(135deg, rgba(110, 89, 165, 0.1), rgba(155, 135, 245, 0.1))',
        'gradient-tech': 'linear-gradient(135deg, rgba(30, 50, 110, 0.9), rgba(110, 89, 165, 0.8))',
        'tech-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'circuit-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%236E59A5\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
} 