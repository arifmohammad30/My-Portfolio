import { Mail, Linkedin, Github, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/smoothScroll";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-gray-900 text-white py-16 relative">
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.button
          onClick={() => scrollToSection('home')}
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg hover:shadow-primary/20 transition-all duration-300"
          whileHover={{ y: -5 }}
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-gray-800">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-1 bg-primary rounded-full"></div>
              <p className="text-xl font-bold">Mohammad Arif</p>
            </div>
            <p className="text-gray-400 mt-1 mb-4">AI & Web Developer</p>
            <p className="text-gray-400 text-sm">
              Building intelligent web solutions that deliver exceptional user experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    className="text-gray-400 hover:text-primary transition-colors capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/arifmohammad30/" 
                className="bg-gray-800 hover:bg-primary text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300" 
                aria-label="LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/arifmohammad30" 
                className="bg-gray-800 hover:bg-primary text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300" 
                aria-label="GitHub"
                target="_blank" rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="mailto:arifmohammad3010@gmail.com" 
                className="bg-gray-800 hover:bg-primary text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Mohammad Arif. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with <span className="text-red-500">❤</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
