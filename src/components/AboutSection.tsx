
import { motion } from 'framer-motion';
import { Users, GraduationCap, Code, Globe } from 'lucide-react';

export default function AboutSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 }
    })
  };
  
  return (
    <section id="about" className="section-padding bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-isclub-blue-light rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-isclub-blue/10 rounded-lg -z-10"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Students collaborating on coding projects" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={1}
            >
              <span className="text-sm font-medium text-isclub-blue">About Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The KUSOM Information Systems Club is dedicated to bridging the gap between academic learning and practical application in the fast-evolving tech landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our vision, "Empowering KUSOMites to excel in the evolving business and tech landscape," reflects our commitment to preparing students for the demands of modern industry.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-5 rounded-lg bg-gray-50 hover-lift">
                <Users className="w-8 h-8 text-isclub-blue mb-4" />
                <h3 className="font-medium mb-2">Community</h3>
                <p className="text-sm text-gray-600">Building a network of tech enthusiasts</p>
              </div>
              
              <div className="p-5 rounded-lg bg-gray-50 hover-lift">
                <GraduationCap className="w-8 h-8 text-isclub-blue mb-4" />
                <h3 className="font-medium mb-2">Learning</h3>
                <p className="text-sm text-gray-600">Workshops, seminars, and hands-on projects</p>
              </div>
              
              <div className="p-5 rounded-lg bg-gray-50 hover-lift">
                <Code className="w-8 h-8 text-isclub-blue mb-4" />
                <h3 className="font-medium mb-2">Skills</h3>
                <p className="text-sm text-gray-600">Practical coding and design skills</p>
              </div>
              
              <div className="p-5 rounded-lg bg-gray-50 hover-lift">
                <Globe className="w-8 h-8 text-isclub-blue mb-4" />
                <h3 className="font-medium mb-2">Connection</h3>
                <p className="text-sm text-gray-600">Linking students with industry experts</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
