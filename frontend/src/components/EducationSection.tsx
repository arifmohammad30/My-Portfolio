import { motion } from "framer-motion";
import { GraduationCap, Building, Calendar } from "lucide-react";

export default function EducationSection() {
  const courseItems = [
    "Machine Learning Fundamentals",
    "Neural Networks & Deep Learning",
    "Web Application Development",
    "Data Structures & Algorithms",
    "Computer Vision",
    "Natural Language Processing"
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 flex-shrink-0 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">B.Tech in AI & ML</h3>
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
                <Building className="h-4 w-4" />
                Dhanekula Institute of Engineering and Technology
              </p>
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
                <Calendar className="h-4 w-4" />
                2023 - 2027
              </p>
              <p className="text-gray-600 dark:text-gray-400 pt-2">
                Focused on advanced artificial intelligence techniques, machine learning algorithms, 
                and their applications in solving real-world problems.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courseItems.map((course, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-700 dark:text-gray-300">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
