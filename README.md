# Raamona Parallax

A modern, visually stunning parallax scrolling website built with Next.js, featuring smooth GSAP animations, interactive sliders, and an immersive user experience.

## ✨ Features

- **Parallax Scrolling Effects** - Smooth parallax animations using GSAP (GreenSock Animation Platform)
- **Advanced Animations** - ScrollTrigger integration for scroll-based animations
- **Interactive Sliders** - Swiper.js for touch-enabled, responsive carousels
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Smooth Performance** - Optimized animations for 60fps experience
- **Modern UI/UX** - Contemporary design with engaging visual effects
- **SEO Optimized** - Built with Next.js for optimal search engine performance

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14.2.5
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** GSAP 3.12.5 (including ScrollTrigger)
- **Slider/Carousel:** Swiper 11.1.14

### Development Tools
- **ESLint:** Code quality and consistency
- **PostCSS:** CSS processing and optimization

## 📋 Prerequisites

Before you begin, ensure you have the following:
- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zahra-hsb/raamona-parallax.git
   cd raamona-parallax
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
raamona-parallax/
├── public/             # Static assets (images, fonts, icons)
├── src/
│   ├── app/           # Next.js app directory (pages, layouts)
│   ├── components/    # React components
│   ├── lib/           # Utility functions and helpers
│   └── styles/        # Global styles and CSS modules
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore rules
├── jsconfig.json      # JavaScript configuration
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.mjs # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Features Breakdown

### GSAP Animations
- **ScrollTrigger** - Trigger animations based on scroll position
- **Timeline animations** - Complex, sequenced animation effects
- **Parallax layers** - Multiple depth layers for immersive scrolling
- **Smooth scrolling** - Enhanced scroll behavior with GSAP
- **Performance optimized** - Hardware-accelerated animations

### Swiper Integration
- **Touch-enabled sliders** - Native mobile touch gestures
- **Responsive breakpoints** - Adaptive layouts for all devices
- **Navigation & pagination** - Built-in controls and indicators
- **Autoplay & loop** - Automatic slide progression
- **Custom animations** - Slide transitions and effects

### Responsive Design
- Fully responsive across all devices
- Mobile-first approach with Tailwind CSS
- Optimized images and assets
- Smooth performance on all screen sizes

## 🎨 Customization

### Animations
Edit animation configurations in your components:
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Customize your animations
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  },
  y: 100,
  opacity: 0.5
});
```

### Swiper Configuration
Customize slider behavior in your Swiper components:
```javascript
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper
  spaceBetween={30}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
>
  {/* Your slides */}
</Swiper>
```

### Tailwind CSS
Modify design tokens in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
      fontFamily: {
        // Your custom fonts
      }
    }
  }
}
```

## 🚀 Deployment

### Deploy to Vercel

The easiest deployment option for Next.js applications:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zahra-hsb/raamona-parallax)

1. Push your code to GitHub
2. Import repository to Vercel
3. Deploy with one click

Vercel automatically detects Next.js and configures the build settings.

### Deploy to Other Platforms

You can also deploy to:
- **Netlify** - Connect your GitHub repo and deploy
- **Railway** - One-click deployment for full-stack apps
- **AWS Amplify** - Scalable hosting with AWS infrastructure
- **DigitalOcean App Platform** - Simple cloud deployment

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.5 | React framework with SSR |
| react | ^18 | UI library |
| react-dom | ^18 | DOM rendering |
| gsap | ^3.12.5 | Animation library |
| swiper | ^11.1.14 | Touch slider/carousel |
| tailwindcss | ^3.4.1 | Utility-first CSS framework |
| eslint | ^8 | Code linting |
| eslint-config-next | 14.2.5 | Next.js ESLint configuration |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Animation Performance Issues
- Ensure you're using hardware-accelerated properties (transform, opacity)
- Use `will-change` CSS property sparingly
- Check browser DevTools Performance tab
- Reduce number of simultaneous animations

### Swiper Not Working
- Verify Swiper CSS is imported
- Check console for JavaScript errors
- Ensure Swiper version compatibility with React
- Import required Swiper modules

### Build Errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (18.0 or higher required)
- Clear npm cache: `npm cache clean --force`

### GSAP ScrollTrigger Issues
- Ensure ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- Check trigger element selectors are correct
- Verify scroll container is properly configured
- Use `markers: true` for debugging ScrollTrigger positions

## 📱 Browser Support

This project supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

GSAP and Swiper are fully compatible with all modern browsers.

## 🎓 Learning Resources

### GSAP
- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Guide](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Showcase](https://greensock.com/showcase/)

### Swiper
- [Swiper Documentation](https://swiperjs.com/react)
- [Swiper Demos](https://swiperjs.com/demos)

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## 🔒 Performance Optimization

- **Code Splitting** - Automatic code splitting with Next.js
- **Image Optimization** - Next.js Image component for optimized images
- **Lazy Loading** - Components loaded on demand
- **Animation Performance** - GPU-accelerated animations with GSAP
- **CSS Optimization** - PurgeCSS via Tailwind for minimal bundle size

## 📄 License

This project is private and not licensed for public use.

## 📞 Support

For support and questions:
- Open an issue on GitHub
- Contact the developer: [zahra-hsb](https://github.com/zahra-hsb)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations powered by [GSAP](https://greensock.com/)
- Sliders by [Swiper](https://swiperjs.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Font optimization with [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)

---

**Made with creativity by [zahra-hsb](https://github.com/zahra-hsb)**
