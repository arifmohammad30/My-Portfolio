import { motion } from "framer-motion";
// Use Lucide icons
import { 
  Code, 
  FileCode, 
  Braces, 
  Brain, 
  Flame, 
  GitBranch, 
  AreaChart, 
  FileType
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { icon: <FileCode className="h-10 w-10 text-[#306998]" />, name: "Python" },
    { icon: <Braces className="h-10 w-10 text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <Code className="h-10 w-10 text-[#61DAFB]" />, name: "React" },
    { icon: <Brain className="h-10 w-10 text-[#FF6F00]" />, name: "TensorFlow" },
    { icon: <Flame className="h-10 w-10 text-[#EE4C2C]" />, name: "PyTorch" },
    { icon: <GitBranch className="h-10 w-10 text-[#F05032]" />, name: "Git" },
    { icon: <AreaChart className="h-10 w-10 text-[#FF4B4B]" />, name: "Streamlit" },
    { icon: <FileType className="h-10 w-10 text-[#E34F26]" />, name: "HTML/CSS" }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skillset with new technologies. 
            Here are some of the key tools and frameworks I'm proficient with.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-item flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-3">{skill.icon}</div>
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
