import { motion } from "framer-motion";
import { 
  Brain, 
  Code2, 
  BookOpen,
  Palette,
  Laptop
} from "lucide-react";

export default function AboutSection() {
  const interestItems = [
    { icon: <Brain className="h-5 w-5 text-primary" />, text: "Artificial Intelligence & Machine Learning" },
    { icon: <Code2 className="h-5 w-5 text-primary" />, text: "Web Development" },
    { icon: <BookOpen className="h-5 w-5 text-primary" />, text: "Reading Tech Articles" },
    { icon: <Palette className="h-5 w-5 text-primary" />, text: "Portrait Drawing" },
    { icon: <Laptop className="h-5 w-5 text-primary" />, text: "Exploring New Technologies" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Get to know more about me and my journey</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 bg-gray-800/50 p-6 lg:p-8 rounded-xl border border-gray-700 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-200 flex items-center">
              <span className="inline-block w-2 h-8 bg-primary rounded-full mr-3"></span>
              Who I Am
            </h3>
            <p className="text-gray-400">
              I'm an enthusiastic AI & Web Developer with a passion for creating intelligent and user-friendly applications. 
              Currently pursuing my B.Tech in AI & ML, I blend the worlds of artificial intelligence and web development to 
              build innovative solutions.
            </p>
            <p className="text-gray-400">
              My journey in tech began with a fascination for how intelligent systems can enhance user experiences on the web. 
              Today, I focus on developing applications that leverage the power of AI while maintaining clean, accessible, and 
              responsive interfaces.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-200 pt-4 flex items-center">
              <span className="inline-block w-2 h-8 bg-primary rounded-full mr-3"></span>
              Fun Fact
            </h3>
            <p className="text-gray-400">
            Besides coding, I'm also a portrait artist. Sketching faces with precision and emotion has been my creative outlet for years!!
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg border border-gray-700 max-w-md w-full">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="inline-block w-1 h-6 bg-primary rounded-full mr-3"></span>
                My Interests
              </h3>
              <ul className="space-y-4">
                {interestItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 dark:bg-primary/20 shadow-inner">
                      {item.icon}
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
