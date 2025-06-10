import { Button } from "../components/ui/button";
import { Linkedin, Github, Eye, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] py-20 flex items-center bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left column: Text content */}
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm <span className="text-blue-500">Mohammad Arif</span>
            </h1>
            
            <h2 className="text-2xl text-gray-300">
              AI & Web Developer
            </h2>
            
            <p className="text-gray-400 pb-2">
              Building innovative solutions at the intersection of AI and web development.
            </p>
            
            {/* Social buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a href="https://www.linkedin.com/in/arifmohammad30/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              
              <Button
                className="bg-gray-700 hover:bg-gray-800 text-white"
                asChild
              >
                <a href="https://github.com/arifmohammad30" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>

            {/* Resume buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" /> View Resume
                </a>
              </Button>

              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right column: Profile image */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20">
              <img 
                src="public/portfolioimg.jpg" 
                alt="Arif Mohammad profile picture" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
