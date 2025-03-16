
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-isclub-blue-light/40 to-white/5 -z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-isclub-blue/10 mix-blend-multiply blur-3xl animate-slow-spin"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300/10 mix-blend-multiply blur-3xl animate-slow-spin animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-isclub-blue bg-isclub-blue-light/50 rounded-full">
            KUSOM Information Systems Club
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-isclub-dark leading-tight mb-6">
            <span className="block">Explore. Create.</span>
            <span className="text-isclub-blue">Innovate.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            A hub for students eager to explore the vast world of computing, design, coding, and web development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#about"
              className={cn(
                "px-6 py-3 rounded-lg bg-isclub-blue text-white font-medium",
                "transition-all duration-300 transform hover:translate-y-[-2px]",
                "shadow-lg shadow-isclub-blue/20 hover:shadow-xl hover:shadow-isclub-blue/30",
                "focus:outline-none focus:ring-2 focus:ring-isclub-blue/50"
              )}
            >
              Discover More
            </a>
            <a
              href="#focus-areas"
              className={cn(
                "px-6 py-3 rounded-lg bg-white text-isclub-dark font-medium",
                "border border-gray-200 hover:border-isclub-blue",
                "transition-all duration-300 hover:text-isclub-blue",
                "focus:outline-none focus:ring-2 focus:ring-gray-200"
              )}
            >
              Our Focus Areas
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-sm text-gray-500 hover:text-isclub-blue transition-colors"
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
