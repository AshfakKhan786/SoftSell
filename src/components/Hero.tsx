import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-36 overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-gray-900 dark:to-blue-900 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 mix-blend-multiply blur-3xl"></div>
        <div className="absolute top-24 -right-24 w-96 h-96 bg-sky-200 dark:bg-indigo-800 rounded-full opacity-20 mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
                Reclaim Value From Unused Software
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Turn Unused Software Into <span className="text-blue-600 dark:text-blue-400">Cash</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              SoftSell helps businesses quickly resell their unused software licenses for maximum value. Say goodbye to wasted IT budget.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a href="#contact" className="btn btn-primary flex items-center justify-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#how-it-works" className="btn btn-secondary flex items-center justify-center">
                How It Works
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="flex items-center">
                <span className="flex -space-x-2">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
                  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
                  <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
                </span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Trusted by 500+ companies</span>
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium">
                Save up to 70%
              </div>
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Software Dashboard" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Quick, hassle-free valuation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Best market rates guaranteed</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Get paid within 48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;