
import { motion } from 'framer-motion';
import { Code, Globe, Database, Cpu, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FocusAreasSection() {
  const areas = [
    {
      icon: <Cpu className="w-12 h-12 mb-6 text-isclub-teal" />,
      title: "Computing",
      description: "Explore computing fundamentals, hardware essentials, and system architecture principles that form the backbone of modern technology.",
      color: "from-teal-500/10 to-transparent",
      delay: 0.2
    },
    {
      icon: <Code className="w-12 h-12 mb-6 text-isclub-teal" />,
      title: "Coding",
      description: "Learn programming languages, software development methodologies, and problem-solving techniques for building applications.",
      color: "from-cyan-500/10 to-transparent",
      delay: 0.4
    },
    {
      icon: <BrainCircuit className="w-12 h-12 mb-6 text-isclub-teal" />,
      title: "Design",
      description: "Master the principles of UI/UX design, visual communication, and create user-centered digital experiences that are both beautiful and functional.",
      color: "from-blue-500/10 to-transparent",
      delay: 0.6
    },
    {
      icon: <Database className="w-12 h-12 mb-6 text-isclub-teal" />,
      title: "Web Development",
      description: "Develop skills in creating responsive websites and web applications using modern frameworks and development practices.",
      color: "from-sky-500/10 to-transparent",
      delay: 0.8
    }
  ];

  return (
    <section id="focus-areas" className="section-padding bg-isclub-light px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Focus Areas
          </h2>
          <p className="text-isclub-gray max-w-2xl mx-auto">
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
                  "bg-white/80 backdrop-blur-sm border border-gray-100",
                  "hover:shadow-md hover:shadow-primary/5 hover:-translate-y-1",
                  "overflow-hidden relative"
                )}
              >
                <div className={cn(
                  "absolute inset-0 -z-10 bg-gradient-to-b",
                  area.color,
                  "opacity-50"
                )}></div>
                {area.icon}
                <h3 className="text-xl font-display font-bold mb-4">{area.title}</h3>
                <p className="text-isclub-gray">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
