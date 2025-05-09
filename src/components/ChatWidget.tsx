import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatWidgetProps {
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Sample FAQs with responses
const faqs = [
  {
    question: "How long does the license valuation process take?",
    answer: "Our license valuation process typically takes 24-48 hours. We'll analyze your software type, version, and current market conditions to provide you with the most competitive quote possible."
  },
  {
    question: "What types of software licenses do you buy?",
    answer: "We purchase a wide range of enterprise software licenses including Microsoft, Adobe, Oracle, SAP, Salesforce, Autodesk, and many others. If you're unsure about your specific software, please contact us for a custom evaluation."
  },
  {
    question: "How do you ensure secure transactions?",
    answer: "We use bank-level encryption for all communications and transactions. Our process includes secure license transfer protocols, compliance verification, and escrow services for large transactions to ensure both parties are protected."
  }
];

const ChatWidget = ({ onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm SoftSell's AI assistant. How can I help you today? You can ask me about our software resale process, license valuation, or payment methods.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const findFaqMatch = (text: string): string | null => {
    // Simple keyword matching
    const lowercaseText = text.toLowerCase();
    
    if (lowercaseText.includes('valuation') || lowercaseText.includes('how long')) {
      return faqs[0].answer;
    } else if (lowercaseText.includes('what type') || lowercaseText.includes('software') || lowercaseText.includes('licenses')) {
      return faqs[1].answer;
    } else if (lowercaseText.includes('secure') || lowercaseText.includes('transaction') || lowercaseText.includes('safe')) {
      return faqs[2].answer;
    }
    
    return null;
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const faqMatch = findFaqMatch(userMessage.text);
      
      const responseText = faqMatch || 
        "Thanks for your message! This is a demo chat. In a real implementation, I'd connect to an AI service like OpenAI to provide more accurate responses. For specific questions about SoftSell services, please contact us through the form above.";
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  return (
    <motion.div 
      className="fixed bottom-20 right-6 w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Chat Header */}
      <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-1 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold">SoftSell Support</h3>
            <span className="text-xs opacity-75">Online | Typically replies instantly</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors duration-300"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      
      {/* Chat Messages */}
      <div className="p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`mb-4 max-w-[85%] ${
              message.sender === 'user' ? 'ml-auto' : ''
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
            <div
              className={`text-xs mt-1 ${
                message.sender === 'user'
                  ? 'text-right text-gray-500 dark:text-gray-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center mb-4 max-w-[85%]">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="w-full pr-12 pl-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            disabled={!inputValue.trim()}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        
        {/* FAQ Quick Links */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setInputValue("How long does the valuation take?")}
            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Valuation time?
          </button>
          <button
            type="button"
            onClick={() => setInputValue("What software licenses do you buy?")}
            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            License types
          </button>
          <button
            type="button"
            onClick={() => setInputValue("How do you ensure secure transactions?")}
            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Security
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ChatWidget;