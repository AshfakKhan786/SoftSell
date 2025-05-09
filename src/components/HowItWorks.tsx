import { motion } from 'framer-motion';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Upload Your License',
    description: 'Share basic details about your software licenses through our secure portal.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Get a Free Valuation',
    description: 'Our experts analyze the market value and provide you with a competitive quote.',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: 'Get Paid Instantly',
    description: 'Accept our offer and receive payment directly to your preferred account.',
  }
];

const fadeInUpVariants = {
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

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Our streamlined process makes it easy to convert your unused software into cash, with minimal effort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center absolute -mt-24">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary inline-flex items-center">
            Start the Process
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;