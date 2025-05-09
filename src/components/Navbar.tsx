import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MonitorSmartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MonitorSmartphone className="h-8 w-8 text-blue-600 dark:text-blue-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">SoftSell</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium">
              How It Works
            </a>
            <a href="#why-choose" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium">
              Contact
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                  <path d="m4.93 4.93 1.41 1.41"/>
                  <path d="m17.66 17.66 1.41 1.41"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="m6.34 17.66-1.41 1.41"/>
                  <path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              )}
            </button>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                  <path d="m4.93 4.93 1.41 1.41"/>
                  <path d="m17.66 17.66 1.41 1.41"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="m6.34 17.66-1.41 1.41"/>
                  <path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-5 space-y-4">
            <a 
              href="#how-it-works" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="block w-full text-center btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;