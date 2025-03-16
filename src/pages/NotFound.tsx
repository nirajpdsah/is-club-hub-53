
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium text-isclub-blue bg-isclub-blue-light/50 rounded-full">
            404 Error
          </span>
          
          <h1 className="text-6xl md:text-7xl font-display font-bold text-isclub-dark mb-6">
            Oops!
          </h1>
          
          <p className="text-xl text-gray-600 mb-10">
            We couldn't find the page you're looking for.
          </p>
          
          <a
            href="/"
            className={cn(
              "inline-flex items-center px-6 py-3 rounded-lg",
              "bg-isclub-blue text-white font-medium",
              "transition-all duration-300 transform hover:translate-y-[-2px]",
              "shadow-lg shadow-isclub-blue/20 hover:shadow-xl hover:shadow-isclub-blue/30"
            )}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
