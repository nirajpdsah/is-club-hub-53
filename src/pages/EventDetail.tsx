
import Navbar from '@/components/Navbar';
import EventDetail from '@/components/EventDetail';
import Footer from '@/components/Footer';

const events = [
  {
    id: "web-dev-workshop",
    title: "Web Development Workshop",
    date: "October 15, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "KUSOM Tech Lab",
    description: "Learn the fundamentals of modern web development with HTML, CSS, and JavaScript.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    longDescription: `
      Join us for an immersive workshop focused on modern web development technologies and best practices. 
      This hands-on session will guide you through the fundamentals of HTML, CSS, and JavaScript, 
      equipping you with the skills to build responsive and interactive websites.
      
      You'll learn how to structure content with semantic HTML, style your pages with CSS, and add 
      interactivity with JavaScript. By the end of this workshop, you'll have built a fully functional 
      website from scratch and gained valuable skills applicable to frontend development careers.
    `,
    targetAudience: "Students interested in web development, from beginners to those with some coding experience.",
    prerequisites: [
      "Basic computer knowledge",
      "Laptop with a modern browser installed",
      "Text editor (VS Code recommended)"
    ],
    schedule: [
      { time: "2:00 PM", activity: "Introduction to Web Development" },
      { time: "2:30 PM", activity: "HTML Fundamentals & Practice" },
      { time: "3:15 PM", activity: "Break" },
      { time: "3:30 PM", activity: "CSS Styling & Responsive Design" },
      { time: "4:15 PM", activity: "JavaScript Basics" },
      { time: "4:45 PM", activity: "Q&A and Project Showcase" }
    ],
    speakers: [
      {
        name: "Sarah Johnson",
        role: "Senior Web Developer at TechCorp",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      {
        name: "David Chen",
        role: "UX Designer & Frontend Expert",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      }
    ]
  },
  {
    id: "design-thinking",
    title: "Design Thinking Seminar",
    date: "November 5, 2023",
    time: "1:00 PM - 3:30 PM",
    location: "KUSOM Auditorium",
    description: "A comprehensive workshop on applying design thinking principles to business problems.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    longDescription: `
      Design Thinking is a methodology used by designers to solve complex problems and find desirable solutions for clients. 
      In this seminar, we'll explore how design thinking can be applied to various business challenges.
      
      The workshop will cover the five stages of design thinking: Empathize, Define, Ideate, Prototype, and Test. 
      Through hands-on activities and case studies, you'll learn how to apply these principles to create innovative 
      solutions that are centered around user needs and experiences.
    `,
    targetAudience: "Business students, aspiring entrepreneurs, and anyone interested in innovative problem-solving.",
    prerequisites: [
      "No technical prerequisites required",
      "Bring a notebook and pen for ideation exercises"
    ],
    schedule: [
      { time: "1:00 PM", activity: "Introduction to Design Thinking" },
      { time: "1:30 PM", activity: "Empathize & Define Stages" },
      { time: "2:15 PM", activity: "Coffee Break" },
      { time: "2:30 PM", activity: "Ideate, Prototype & Test Stages" },
      { time: "3:15 PM", activity: "Case Study Discussion & Closing" }
    ],
    speakers: [
      {
        name: "Maya Rodriguez",
        role: "Design Strategy Consultant",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
      }
    ]
  },
  {
    id: "tech-symposium",
    title: "Annual Tech Symposium",
    date: "December 10, 2023",
    time: "9:00 AM - 4:00 PM",
    location: "KUSOM Main Hall",
    description: "Our flagship event featuring industry speakers, tech showcases, and networking opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    longDescription: `
      The Annual Tech Symposium is our flagship event bringing together industry leaders, innovative startups, 
      and passionate students for a day of learning, networking, and inspiration.
      
      This year's symposium focuses on emerging technologies and their impact on business and society. 
      The event will feature keynote speeches, panel discussions, tech demonstrations, and networking sessions. 
      It's a perfect opportunity to gain insights into the latest tech trends and connect with professionals in the field.
    `,
    targetAudience: "Students, faculty, industry professionals, and anyone interested in technology and its applications.",
    prerequisites: [],
    schedule: [
      { time: "9:00 AM", activity: "Registration & Breakfast" },
      { time: "10:00 AM", activity: "Opening Keynote: 'The Future of Tech'" },
      { time: "11:00 AM", activity: "Panel Discussion: 'AI in Business'" },
      { time: "12:00 PM", activity: "Lunch & Networking" },
      { time: "1:30 PM", activity: "Tech Showcase & Demonstrations" },
      { time: "2:30 PM", activity: "Breakout Sessions" },
      { time: "3:30 PM", activity: "Closing Keynote & Awards" }
    ],
    speakers: [
      {
        name: "Dr. James Wong",
        role: "CTO, FutureTech Inc.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      {
        name: "Lisa Patel",
        role: "AI Research Scientist",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
      },
      {
        name: "Mark Anderson",
        role: "Startup Founder & Tech Entrepreneur",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      }
    ]
  }
];

const EventDetailPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <EventDetail events={events} />
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
