import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const events = [
  {
    id: "web-dev-workshop",
    title: "VR Experience Session",
    date: "April 18, 2025",
    time: "TBD",
    location: "KUSOM",
    description: "Explore the world of virtual reality.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: "design-thinking",
    title: "Business Hackathon",
    date: "May 23-25, 2025",
    time: "48 Hours",
    location: "Multipurpose Hall, KU",
    description: "A 48-hour hackathon event where participants will work in teams to develop innovative business solutions.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: "tech-symposium",
    title: "IS Fair",
    date: "June 22-27, 2025",
    time: "All Day",
    location: "KUSOM",
    description: "A fair where students can showcase their projects and ideas.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  },
  {
    id: "ai-bootcamp",
    title: "AI Innovation Bootcamp",
    date: "August 1, 2025",
    time: "TBD",
    location: "KUSOM",
    description: "A 1 day bootcamp on AI and its applications.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcc9e20d"
  }
];

export default function EventTimeline() {
  return (
    <section className="section-padding px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-isclub-teal/10"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-emerald-600 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200">
            Coming Up
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Upcoming Events Timeline
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events and activities
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-200/50 to-emerald-100/30 z-0"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={cn(
                  "relative z-10 flex items-center",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm"></div>
                
                {/* Content card */}
                <div className={cn(
                  "w-5/12 bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300",
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                )}>
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold mb-2 text-isclub-navy">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-2 text-isclub-teal" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-2 text-isclub-teal" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-2 text-isclub-teal" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-emerald-50">
                      <Link 
                        to={`/events/${event.id}`}
                        className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        See More Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/events" 
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-isclub-teal text-white transition-all duration-300 hover:bg-isclub-navy"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
