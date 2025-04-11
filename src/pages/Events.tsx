
import Navbar from '@/components/Navbar';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';

const Events = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="pt-24">
          <EventsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
