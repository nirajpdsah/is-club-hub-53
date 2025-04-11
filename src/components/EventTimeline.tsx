
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const events = [
  {
    title: "Web Development Workshop",
    date: "April 20, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "KUSOM Tech Lab",
    description: "Learn the fundamentals of modern web development with HTML, CSS, and JavaScript."
  },
  {
    title: "Design Thinking Seminar",
    date: "May 12, 2025",
    time: "1:00 PM - 3:30 PM",
    location: "KUSOM Auditorium",
    description: "A comprehensive workshop on applying design thinking principles to business problems."
  },
  {
    title: "Annual Tech Symposium",
    date: "June 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "KUSOM Main Hall",
    description: "Our flagship event featuring industry speakers, tech showcases, and networking opportunities."
  }
];

export default function EventTimeline() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-isclub-blue-light/30 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-isclub-teal bg-isclub-blue-light/50 rounded-full">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-isclub-teal/30 z-0"></div>
          
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-isclub-teal rounded-full border-4 border-white shadow-sm"></div>
                
                {/* Content card */}
                <div className={cn(
                  "w-5/12 glass-card rounded-xl p-6 hover-lift cyber-border",
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
