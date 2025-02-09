// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Briefcase } from 'lucide-react';

// const skills = {
//   'Full Stack': [
//     'JavaScript/TypeScript',
//     'React.js',
//     'Node.js',
//     'Python',
//     'MongoDB',
//     'PostgreSQL'
//   ],
//   'Cloud': [
//     'AWS',
//     'Azure',
//     'Docker',
//     'Kubernetes',
//     'CI/CD'
//   ],
//   'ML/AI': [
//     'TensorFlow',
//     'PyTorch',
//     'Scikit-learn',
//     'Computer Vision',
//     'NLP'
//   ]
// };

// const experiences = [
//   {
//     title: '',
//     company: '',
//     skil: '',
//     place: '',
//     period: '2022 - Present',
//     description: 'Led development of enterprise applications using modern technologies.'
//   },
//   {
//     title: 'User Interface Designer',
//     skil: 'User Interface, User Experience',
//     company: 'Vardaam Web Solutions Pvt. Ltd',
//     place: 'Vadodara',
//     period: 'May 2022 - Nov 2022',
//     description: [`• Developed and standardized a comprehensive design language that included specific color schemes, typography choices, and icon sets, leading to a 40% increase in brand consistency across all digital platforms.`,
//     `• Collaborated with designers, developers, and cross-functional teams to translate design concepts into functional interfaces, resulting in a 20% reduction in a project iteration time.`,
//     `• Illustrated Wireframes, High-fidelity Mockups, and Interactive prototypes to visualize design concepts and user interactions using tools like Figma and Adobe XD.`,
//     `• Redesign of 5 major projects, directly contributing to a 30% improvement in user engagement and a 25% increase in user satisfaction scores through the introduction of user-centered design principles.`,
//     `• Conducted usability testing with over 20+ participants to gather actionable feedback, leading to iterative design improvements that enhanced user experience and interface usability by over 35%.`
    
//     ]
//   }
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="relative"
//             >
//               <img
//                 src="/src/public/profile.jpg"
//                 alt="Profile"
//                 className="rounded-lg shadow-lg w-full max-w-md mx-auto"
//               />
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-gray-600"
//             >
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
//               <p className="mb-4">
//                 Hi, I'm Shlok! I'm a passionate Full Stack Developer with expertise in cloud computing and machine learning.
//                 I love creating innovative solutions and learning new technologies.
//               </p>
//               <p>
//                 With years of experience in software development, I've worked on various projects
//                 ranging from web applications to AI-powered solutions.
//               </p>
//             </motion.div>
//           </div>

//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h3>
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600"
//                 >
//                   <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]" />
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4> 
//                   <div className="flex items-center text-gray-500 mb-2">
//                     <Briefcase size={16} className="mr-2" />
//                     <span>{exp.company}</span>
//                     <Calendar size={16} className="ml-4 mr-2" />
//                     {/* <span>{exp.period} | </span> 
//                     <span> {exp.place}</span> */}
//                     <span>{exp.period} | {exp.place}</span>

//                   </div>
//                   <p className="text-gray-600">{exp.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {Object.entries(skills).map(([category, skillList]) => (
//                 <motion.div
//                   key={category}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <h4 className="text-xl font-bold text-gray-800 mb-4">{category}</h4>
//                   <ul className="space-y-2">
//                     {skillList.map((skill, i) => (
//                       <li key={i} className="text-gray-600 flex items-center">
//                         <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
//                         {skill}
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const skills = {
  'Full Stack': [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL'
  ],
  'Cloud': [
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'CI/CD'
  ],
  'ML/AI': [
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'Computer Vision',
    'NLP'
  ]
};

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    skil: '',
    company: 'Cloudinfosoft™',
    place: 'Vadodara',
    period: 'Jan 2023 - Jun 2023',
    description: ['Design, Development, and maintenance of critical server-side components for .NET applications, enhancing system architecture and operational efficiency.',
    'Developed and seamlessly integrated RESTful APIs facilitating communication among application’s client- side components, resulting in a 30% improvement in functionality and response time.',
    'Collaborated cross-functionally with a team of 5+ developers and designers to drive continuous improvements, resulting in a 15% acceleration in project delivery timelines and a 100% client satisfaction rate.',
    'Led the development and execution of robust data storage strategies, implementing scalable database solutions and storage systems that supported a 20% increase in data handling efficiency.',
    'Directed frontend development initiatives leveraging React JS, contributing to the creation of intuitive, responsive user interfaces that improved user engagement metrics by 25%.',
    'Collaborated cross-functionally with a team of 5+ developers and designers to drive continuous improvements, resulting in a 15% acceleration in project delivery timelines and a 100% client satisfaction rate.'

    ]
  },
  {
    title: 'UI/UX Developer Intern',
    skil: 'User Interface, User Experience',
    company: 'Vardaam Web Solutions Pvt. Ltd',
    place: 'Vadodara',
    period: 'May 2022 - Nov 2022',
    description: [
      'Developed and standardized a comprehensive design language that included specific color schemes, typography choices, and icon sets, leading to a 40% increase in brand consistency across all digital platforms.',
      'Collaborated with designers, developers, and cross-functional teams to translate design concepts into functional interfaces, resulting in a 20% reduction in a project iteration time.',
      'Illustrated Wireframes, High-fidelity Mockups, and Interactive prototypes to visualize design concepts and user interactions using tools like Figma and Adobe XD.',
      'Redesign of 5 major projects, directly contributing to a 30% improvement in user engagement and a 25% increase in user satisfaction scores through the introduction of user-centered design principles.',
      'Conducted usability testing with over 20+ participants to gather actionable feedback, leading to iterative design improvements that enhanced user experience and interface usability by over 35%.'
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/src/public/profile.jpg"
                alt="Profile"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
              <p className="mb-4">
                Hi, I'm Shlok! I'm a passionate Full Stack Developer with expertise in cloud computing and machine learning.
                I love creating innovative solutions and learning new technologies.
              </p>
              <p>
                With years of experience in software development, I've worked on various projects
                ranging from web applications to AI-powered solutions.
              </p>
            </motion.div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4> 
                  <div className="flex items-center text-gray-500 mb-2">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}</span>
                    <Calendar size={16} className="ml-4 mr-2" />
                    <span>{exp.period} | {exp.place}</span>
                  </div>

                  {/* RENDER DESCRIPTION AS A BULLET LIST */}
                  <ul className="text-gray-600 list-disc ml-5 space-y-1">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {skillList.map((skill, i) => (
                      <li key={i} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;





