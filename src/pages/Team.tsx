
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <div className="pt-24">
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
