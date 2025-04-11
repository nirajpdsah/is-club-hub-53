
import Navbar from '@/components/Navbar';
import FocusAreasSection from '@/components/FocusAreasSection';
import Footer from '@/components/Footer';

const FocusAreas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="pt-24">
          <FocusAreasSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FocusAreas;
