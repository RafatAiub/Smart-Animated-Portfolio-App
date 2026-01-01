# 🚀 Advanced 3D Portfolio - Tanvir Mahtab Rafat

A cutting-edge, fully interactive 3D portfolio website showcasing professional expertise in Full Stack Development, Cloud Computing, AI/ML, and Blockchain technologies. Built with React, Three.js, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)

## ✨ Features

### 🎨 Advanced 3D Graphics
- **Custom Shader Materials**: Animated gradient shaders with real-time effects
- **Post-Processing Effects**: Bloom, Chromatic Aberration, and Vignette
- **Interactive 3D Elements**: Rotating spheres, floating orbs, particle fields
- **Dynamic Lighting**: Multiple light sources with realistic shadows
- **Performance Optimized**: Instanced rendering for 500+ particles

### 🎯 Modern UI/UX
- **Smooth Animations**: Framer Motion powered transitions
- **Dark/Light Theme**: Seamless theme switching with smooth transitions
- **Responsive Design**: Fully responsive across all devices
- **Intersection Observer**: Scroll-triggered animations for performance
- **Code Splitting**: Lazy loading for optimal performance

### 📱 Sections
1. **Hero Section**: 3D animated introduction with interactive scene
2. **About**: Career objective with animated value cards
3. **Skills**: Interactive skill categories with color-coded tags
4. **Experience**: Animated timeline with professional achievements
5. **Education**: Academic background showcase
6. **Certifications**: 2025 certifications with 3D cards
7. **Projects**: Project showcase with interactive 3D elements
8. **Publications**: Books in progress display
9. **Awards**: Honors and awards with animations
10. **Contact**: Interactive contact form and information

## 🛠️ Technologies

### Core
- **React 19.2.0** - Latest React with concurrent features
- **Vite 7.2.4** - Next-generation frontend tooling
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **@react-three/postprocessing** - Post-processing effects

### Animation & UI
- **Framer Motion** - Production-ready motion library
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Popular icons library
- **React Intersection Observer** - Scroll animations

### Performance
- **Code Splitting** - Lazy loading components
- **Suspense** - React Suspense for async components
- **Memoization** - Optimized re-renders
- **Instanced Rendering** - Efficient particle rendering

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/RafatAiub/smart-portfolio.git

# Navigate to project directory
cd smart-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
smart-portfolio/
├── src/
│   ├── components/
│   │   ├── three/              # 3D components
│   │   │   ├── AdvancedHeroScene.jsx
│   │   │   ├── Skill3DVisualization.jsx
│   │   │   └── Project3DCard.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   ├── Awards.jsx
│   │   ├── Contact.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── LoadingScreen.jsx
│   ├── hooks/
│   │   └── useTheme.js         # Theme context hook
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   ├── index.css               # Base styles
│   └── main.jsx                # Entry point
├── public/                     # Static assets
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
}
```

### 3D Scene
Modify `src/components/three/AdvancedHeroScene.jsx` to customize:
- Particle count
- Animation speeds
- Lighting setup
- Post-processing effects

### Content
Update component files in `src/components/` to modify:
- Personal information
- Skills
- Experience
- Projects
- etc.

## ⚡ Performance Optimizations

1. **Lazy Loading**: Components loaded on demand
2. **Code Splitting**: Automatic route-based splitting
3. **Memoization**: React.memo for expensive components
4. **Instanced Rendering**: Efficient particle systems
5. **Intersection Observer**: Animate only visible elements
6. **GPU Acceleration**: Hardware-accelerated 3D rendering

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Best Practices

- ✅ Component-based architecture
- ✅ Custom hooks for reusable logic
- ✅ Performance optimizations
- ✅ Accessibility considerations
- ✅ SEO-friendly structure
- ✅ Clean, maintainable code
- ✅ TypeScript-ready structure
- ✅ Responsive design patterns

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tanvir Mahtab Rafat**
- Email: tanvirmahtab1996@gmail.com
- LinkedIn: [linkedin.com/in/tanvir-mahtab-rafat](https://linkedin.com/in/tanvir-mahtab-rafat)
- GitHub: [github.com/RafatAiub](https://github.com/RafatAiub)
- Location: Dhaka, Bangladesh

## 🙏 Acknowledgments

- Three.js community for amazing 3D tools
- React Three Fiber for seamless React integration
- Framer Motion for smooth animations
- All open-source contributors

---

⭐ **Star this repo if you find it helpful!**
