import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [showChat, setShowChat] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
        
        if (isVisible) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        <main className="relative">
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        
        <Footer />
        
        {/* Chat Widget Button */}
        <button 
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-6 right-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white p-4 shadow-lg transition-all duration-300 z-50"
          aria-label="Open chat"
        >
          {showChat ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          )}
        </button>
        
        {/* Chat Widget */}
        {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
      </div>
    </ThemeProvider>
  );
}

export default App;