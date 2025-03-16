
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function TeamSection() {
  const team = [
    {
      name: "Alex Chen",
      role: "President",
      bio: "Computer Science senior with expertise in full-stack development and project management.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    {
      name: "Maya Johnson",
      role: "Vice President",
      bio: "Information Systems junior focusing on UX/UI design and user research methodologies.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      name: "Jordan Taylor",
      role: "Tech Lead",
      bio: "Computer Engineering senior specializing in software architecture and cloud technologies.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      name: "Samira Patel",
      role: "Events Coordinator",
      bio: "Marketing major with a passion for bringing people together through meaningful tech events.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    }
  ];

  return (
    <section className="section-padding bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-isclub-blue bg-isclub-blue-light/50 rounded-full">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Meet The Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The IS Club is led by a dedicated team of students passionate about technology and committed to creating valuable learning experiences.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={cn(
                "h-full rounded-xl overflow-hidden",
                "bg-white border border-gray-100 shadow-sm",
                "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              )}>
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                    loading="lazy" 
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold">{member.name}</h3>
                  <p className="text-isclub-blue text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
