
import { motion } from 'framer-motion';
import { Code, Globe, Computer, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FocusAreasSection() {
  const areas = [
    {
      icon: <Computer className="w-12 h-12 mb-6 text-isclub-blue" />,
      title: "Computing",
      description: "Explore computing fundamentals, hardware essentials, and system architecture principles that form the backbone of modern technology.",
      color: "from-blue-500/20 to-blue-500/5",
      delay: 0.2
    },
    {
      icon: <Code className="w-12 h-12 mb-6 text-isclub-blue" />,
      title: "Coding",
      description: "Learn programming languages, software development methodologies, and problem-solving techniques for building applications.",
      color: "from-indigo-500/20 to-indigo-500/5",
      delay: 0.4
    },
    {
      icon: <BookOpen className="w-12 h-12 mb-6 text-isclub-blue" />,
      title: "Design",
      description: "Master the principles of UI/UX design, visual communication, and create user-centered digital experiences that are both beautiful and functional.",
      color: "from-purple-500/20 to-purple-500/5",
      delay: 0.6
    },
    {
      icon: <Globe className="w-12 h-12 mb-6 text-isclub-blue" />,
      title: "Web Development",
      description: "Develop skills in creating responsive websites and web applications using modern frameworks and development practices.",
      color: "from-sky-500/20 to-sky-500/5",
      delay: 0.8
    }
  ];

  return (
    <section id="focus-areas" className="section-padding bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-isclub-blue bg-isclub-blue-light/50 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Focus Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The IS Club concentrates on four core domains that are essential for students to thrive in today's technology-driven business landscape.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: area.delay, duration: 0.6 }}
            >
              <div 
                className={cn(
                  "h-full rounded-xl p-8 text-center transition-all",
                  "bg-white border border-gray-100",
                  "hover:shadow-xl hover:-translate-y-1",
                  "overflow-hidden relative"
                )}
              >
                <div className={cn(
                  "absolute inset-0 -z-10 bg-gradient-to-b",
                  area.color,
                  "opacity-30"
                )}></div>
                {area.icon}
                <h3 className="text-xl font-display font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
