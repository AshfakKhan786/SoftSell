import { motion } from 'framer-motion';
import { Clock, CheckSquare, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Fast, Hassle-Free Process',
    description: 'Get valuations within 24 hours and complete transactions in days, not weeks.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Highest Payout Guaranteed',
    description: 'Our rate-matching guarantee ensures you always get the best possible price for your software.'
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Trusted by 500+ Companies',
    description: 'From startups to Fortune 500s, businesses trust SoftSell for reliable software reselling.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Secure Transactions',
    description: 'Bank-level encryption and compliance with all software licensing regulations.'
  }
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    }
  })
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Why SoftSell
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We've built our business on making software reselling simple, secure, and profitable for our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to unlock the value of your unused software?</h3>
              <p className="text-blue-100 mb-8">
                Join hundreds of companies that have reclaimed thousands in IT budget through SoftSell.
              </p>
              <a href="#contact" className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Get Started Today
              </a>
            </div>
            <div className="hidden md:block relative h-full">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Business team celebrating" 
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;