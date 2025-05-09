import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "SoftSell turned our unused licenses into working capital overnight. The process was incredibly smooth and their valuation exceeded our expectations.",
    name: "Alex M.",
    title: "CTO at Innovatech",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "As a growing startup, we needed to optimize our software spend. SoftSell helped us recover over $50,000 from unused enterprise licenses with minimal effort.",
    name: "Sarah L.",
    title: "Operations Director at TechFlow",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "Working with SoftSell has been a game-changer for our IT budget management. Their expertise in the software resale market is unmatched.",
    name: "Michael R.",
    title: "IT Manager at GlobalCorp",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=120"
  }
];

const cardVariants = {
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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400 opacity-30">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6">
            <img src="https://images.pexels.com/photos/10646417/pexels-photo-10646417.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Company logo" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/10646418/pexels-photo-10646418.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Company logo" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/10646419/pexels-photo-10646419.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Company logo" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/10646420/pexels-photo-10646420.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Company logo" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/10646421/pexels-photo-10646421.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Company logo" className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;