import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoLink: string;
  demoLink: string;
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS. Features responsive design, animation effects, and showcases my projects and skills.",
      image: "/Screenshot 2025-06-10 202020.png",
      tags: ["React", "TailwindCSS", "JavaScript"],
      repoLink: "https://github.com/arifmohammad30/portfolio-website",
      demoLink: "https://arifmohammad.dev"
    },
    {
      title:"BLOG-HUB",
      description:"Built a simple blog post application  using Express.js REST APIs and EJS templating engine for views. It allows users to view, create, edit, and delete blog posts",
      image:"/Screenshot 2025-06-01 123931.png",
      tags:["EJS","CSS","Java Script"],
      repoLink:"https://github.com/arifmohammad30/BLOG-APP.git",
      demoLink:"https://blog-app-c8lp.onrender.com/posts"
    },

     {
      title:"Quizz-App",
      description:"Built a responsive, interactive quiz application built with React and TypeScript that offers multiple subject categories and provides instant feedback.",
      image:"/annie-spratt-ZsWaYLImZFs-unsplash.jpg",
      tags:["Html","React","Type Script","Java Script","CSS"],
      repoLink:"https://github.com/arifmohammad30/quiz-app.git",
      demoLink:"https://arifmohammad30.github.io/quiz-app/"
    },


    {
      title: "TrapNet",
      description: "Design and Implementation of a Honeypot System to Detect and Analyze Malicious Activity in a Web Application",
      image: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Cybersecurity", "Web"],
      repoLink: "https://github.com/arifmohammad30/trapnet.git",
      demoLink: "https://arifmohammad30.pythonanywhere.com/"
    },
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation system that suggests similar movies based on user input using Natural Language Processing and Machine Learning algorithms.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "NLP", "Streamlit"],
      repoLink: "https://github.com/arifmohammad30/-Movie-Recommendation-System-Beginner-Level-",
      demoLink: "https://movie-recommendation30.streamlit.app/"
    },
    {
      title: "Simon Says Game",
      description: "A simple Simon Says game built using HTML, CSS, and JavaScript. Test your memory and reflexes by repeating the sequence of colors correctly!",
      image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/arifmohammad30/simon-says-game",
      demoLink: "https://arifmohammad30.github.io/simon-says-game/"
    },
    {
      title: "Spotify Interface Clone",
      description: "A Spotify interface clone using only HTML and CSS. This project replicates the look and feel of Spotify's UI, including the sidebar, main content area, and controls.",
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS"],
      repoLink: "https://github.com/arifmohammad30/Spotify-interface-clone-css-",
      demoLink: "https://arifmohammad30.github.io/Spotify-interface-clone-css-/"
    },
    {
      title: "Web Chess",
      description: "A simple web-based chess game using HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JavaScript"],
      repoLink: "https://github.com/arifmohammad30/Web-Chess.git",
      demoLink: "https://arifmohammad30.github.io/Web-Chess/"
    }
  ];

  const getBadgeColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "Python": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "JavaScript": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "React": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Machine Learning": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Streamlit": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Computer Vision": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "TensorFlow": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "AI": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      "NLP": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      "PyTorch": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    };
    
    return colors[tag] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Some of my recent work and ventures</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {displayedProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline"
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getBadgeColor(tag)}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between mt-2">
                  <a 
                    href={project.repoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-400 font-medium flex items-center gap-1"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-400 font-medium flex items-center gap-1"
                  >
                    Live Demo <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 4 && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setShowAll(true)}
              className="bg-primary hover:bg-primary/90 text-white font-medium"
              size="lg"
            >
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {showAll && projects.length > 4 && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setShowAll(false)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium"
              size="lg"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
