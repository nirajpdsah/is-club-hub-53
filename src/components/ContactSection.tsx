import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
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

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-isclub-blue-light/70 p-3 rounded-md">
                  <Mail className="w-6 h-6 text-isclub-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and membership info</p>
                  <a href="mailto:informationsystemclub@kusom.edu.np" className="text-isclub-blue hover:underline">
                  informationsystemclub@kusom.edu.np
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-isclub-blue-light/70 p-3 rounded-md">
                  <Phone className="w-6 h-6 text-isclub-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-2">Sunday to Friday, 7AM - 2PM</p>
                  <a href="tel:+9779840037381" className="text-isclub-blue hover:underline">
                    +977 9840037381
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-isclub-blue-light/70 p-3 rounded-md">
                  <MapPin className="w-6 h-6 text-isclub-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Find us at the KU Central Campus</p>
                  <p className="text-isclub-dark">
                    Block 10, KU Central Campus, Dhulikhel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow">
              <iframe
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=department of management, informatics and communication&amp;t=h&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="IS Club Location"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
