# Mindor Tech - React Website

A modern, responsive website for Mindor Tech built with React and Tailwind CSS. This project converts the original HTML/CSS/JavaScript website into a React application with enhanced animations and modern development practices.

## Features

- 🚀 **React 18** with modern hooks and functional components
- 🎨 **Tailwind CSS** for utility-first styling
- ✨ **Framer Motion** for smooth animations and transitions
- 📱 **Fully Responsive** design for all devices
- 🎯 **Interactive Components** with smooth scrolling and animations
- 📧 **Contact Form** with FormSubmit.co integration
- 🔧 **Modern Development** with hot reloading and build optimization

## Sections

1. **Hero Section** - Animated background with particles and call-to-action buttons
2. **Services** - Interactive tabs showcasing different service offerings
3. **FAQ** - Expandable questions and answers
4. **Contact** - Contact form with validation and FormSubmit integration
5. **Footer** - Links and copyright information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mindor-tech-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section with particles
│   ├── Services.js     # Services with interactive tabs
│   ├── FAQ.js          # FAQ section
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer component
│   └── SuccessModal.js # Success modal for form submission
├── App.js              # Main App component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Technologies

### React
- Functional components with hooks
- State management with useState
- Side effects with useEffect
- Event handling and form management

### Tailwind CSS
- Utility-first CSS framework
- Custom color palette matching the original design
- Responsive design utilities
- Custom animations and transitions

### Framer Motion
- Smooth page transitions
- Interactive animations
- Scroll-triggered animations
- Modal animations

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#6E59A5',
    dark: '#1A1F2C',
    light: '#9b87f5',
  },
  accent: '#0EA5E9',
  // ... more colors
}
```

### Fonts
The project uses Inter and Poppins fonts from Google Fonts, configured in `tailwind.config.js`.

### Animations
Custom animations are defined in the Tailwind config and can be extended as needed.

## Form Integration

The contact form integrates with FormSubmit.co for email delivery. The form includes:

- Client-side validation
- AJAX submission with fallback
- Success modal display
- Form data reset after submission

## Performance Optimizations

- Lazy loading of images
- Optimized animations with Framer Motion
- Efficient React rendering with proper key props
- CSS-in-JS for better performance
- Responsive images with proper sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use the gh-pages package
- **AWS S3**: Upload the build folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact:
- Email: info@mindor.tech
- Phone: +91 8928210967

---

Built with ❤️ by Mindor Tech
# Mindor
# Mindor
