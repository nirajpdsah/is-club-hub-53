
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-isclub-blue bg-isclub-blue-light/50 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to join IS Club? We'd love to hear from you! Reach out to us through any of the channels below.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-isclub-blue-light/70 p-3 rounded-md">
                  <Mail className="w-6 h-6 text-isclub-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and membership info</p>
                  <a href="mailto:isclub@kusom.edu" className="text-isclub-blue hover:underline">isclub@kusom.edu</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-isclub-blue-light/70 p-3 rounded-md">
                  <Phone className="w-6 h-6 text-isclub-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-2">Monday to Friday, 9AM - 5PM</p>
                  <a href="tel:+1234567890" className="text-isclub-blue hover:underline">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-isclub-blue-light/70 p-3 rounded-md">
                  <MapPin className="w-6 h-6 text-isclub-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Find us at the KUSOM campus</p>
                  <p className="text-isclub-dark">Room 302, Technology Building, KUSOM Campus</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-display font-bold mb-6">Send us a message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300",
                      "focus:ring-2 focus:ring-isclub-blue focus:border-isclub-blue",
                      "transition-colors focus:outline-none"
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300",
                      "focus:ring-2 focus:ring-isclub-blue focus:border-isclub-blue",
                      "transition-colors focus:outline-none"
                    )}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us what you need"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300",
                      "focus:ring-2 focus:ring-isclub-blue focus:border-isclub-blue",
                      "transition-colors focus:outline-none"
                    )}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "w-full px-6 py-3 rounded-lg bg-isclub-blue text-white font-medium",
                    "transition-all duration-300 transform hover:translate-y-[-2px]",
                    "shadow-lg shadow-isclub-blue/20 hover:shadow-xl hover:shadow-isclub-blue/30",
                    "focus:outline-none focus:ring-2 focus:ring-isclub-blue/50"
                  )}
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
