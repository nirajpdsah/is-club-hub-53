
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="pt-24">
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
