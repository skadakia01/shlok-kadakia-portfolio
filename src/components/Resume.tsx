import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume = () => {
  const resumeUrl = "/Shlok Kadakia.pdf";
  
  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Resume</h2>
          
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
            {/* PDF Preview */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 aspect-[8.5/11] w-full"
            >
              <iframe
                src={resumeUrl}
                className="w-full h-full rounded-lg shadow-lg"
                title="Resume Preview"
              />
            </motion.div>
            
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;