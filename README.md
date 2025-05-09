# SoftSell - Software License Resale Platform

A modern, responsive single-page marketing website for SoftSell, a platform that helps businesses resell their unused software licenses.

![SoftSell Screenshot](https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=940)

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Built with React + Vite for optimal performance
- 🎭 Smooth animations using Framer Motion
- 💬 Interactive chat widget with FAQ support
- 📱 Fully mobile-responsive layout
- 🌙 Light/dark mode toggle
- ✨ SEO-optimized with meta tags

## Sections

- Hero section with clear value proposition
- How It Works (3-step process)
- Why Choose Us (key benefits)
- Customer Testimonials
- Contact Form with validation
- Interactive Chat Widget

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/softsell.git
cd softsell
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/        # React components
├── context/          # React context providers
├── App.tsx           # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Key Components

- `Navbar`: Responsive navigation with dark mode toggle
- `Hero`: Main landing section
- `HowItWorks`: Process explanation
- `WhyChooseUs`: Key benefits
- `Testimonials`: Customer reviews
- `ContactForm`: Lead capture form
- `ChatWidget`: Interactive FAQ widget
- `Footer`: Site footer with links

## Customization

### Styling

The project uses Tailwind CSS for styling. Main theme configuration can be found in `tailwind.config.js`.

### Content

Update the content in respective component files:

- Main copy: `src/components/Hero.tsx`
- Process steps: `src/components/HowItWorks.tsx`
- Benefits: `src/components/WhyChooseUs.tsx`
- Testimonials: `src/components/Testimonials.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Pexels](https://www.pexels.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
