
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="pt-24">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
