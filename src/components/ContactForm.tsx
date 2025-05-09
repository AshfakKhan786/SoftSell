import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const licenseTypes = [
  "Microsoft 365",
  "Adobe Creative Cloud",
  "Salesforce",
  "Oracle",
  "SAP",
  "AutoCAD",
  "Other"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'License type is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Fill out the form below and one of our software resale experts will get back to you within 24 hours.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-8">
                  Have questions about our process? Get in touch and we'll help you understand how we can turn your unused software into cash.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-blue-100">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-blue-100">info@softsell.example</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-blue-100">123 Tech Plaza, San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-700 hover:bg-blue-800 rounded-full p-3 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Check className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Your message has been sent successfully. One of our experts will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.company ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="Acme Inc."
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          License Type *
                        </label>
                        <select
                          id="licenseType"
                          name="licenseType"
                          value={formData.licenseType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.licenseType ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="">Select License Type</option>
                          {licenseTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Tell us about the software licenses you'd like to sell..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Get Free Quote
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;