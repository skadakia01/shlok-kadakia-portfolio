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





//---------------------------------------------------



//Main UI for now//


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Briefcase, BookOpen } from 'lucide-react';

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


// const education = [
//   {
//     degree: "Master of Science in Computer Science",
//     university: "DePaul University, Chicago, IL",
//     period: "Expected June 2025",
//     description: [
//       "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
//     ]
//   },
//   {
//     degree: "Bachelor of Technology in Information Technology",
//     university: "Navrachana University, Vadodara, India",
//     period: "June 2019 - June 2023",
//     description: [
//       "Minors in Internet of Things.",
//       "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
//     ]
//   }
// ];


// const certifications = [
//   {
//     name: "AWS Certified Solutions Architect – Associate",
//     issuer: "Amazon Web Services (AWS)",
//     period: "Jan 2024",
//   },
//   {
//     name: "Certified Kubernetes Administrator (CKA)",
//     issuer: "The Linux Foundation",
//     period: "Nov 2023",
//   },
//   {
//     name: "Google Cloud Associate Engineer",
//     issuer: "Google Cloud",
//     period: "Aug 2023",
//   }
// ];

// const experiences = [
//   {
//     title: 'Full Stack Developer Intern',
//     skil: '',
//     company: 'Cloudinfosoft™',
//     place: 'Vadodara',
//     period: 'Jan 2023 - Jun 2023',
//     description: ['Design, Development, and maintenance of critical server-side components for .NET applications, enhancing system architecture and operational efficiency.',
//     'Developed and seamlessly integrated RESTful APIs facilitating communication among application’s client- side components, resulting in a 30% improvement in functionality and response time.',
//     'Collaborated cross-functionally with a team of 5+ developers and designers to drive continuous improvements, resulting in a 15% acceleration in project delivery timelines and a 100% client satisfaction rate.',
//     'Led the development and execution of robust data storage strategies, implementing scalable database solutions and storage systems that supported a 20% increase in data handling efficiency.',
//     'Directed frontend development initiatives leveraging React JS, contributing to the creation of intuitive, responsive user interfaces that improved user engagement metrics by 25%.',
//     'Collaborated cross-functionally with a team of 5+ developers and designers to drive continuous improvements, resulting in a 15% acceleration in project delivery timelines and a 100% client satisfaction rate.'

//     ]
//   },
//   {
//     title: 'UI/UX Developer Intern',
//     skil: 'User Interface, User Experience',
//     company: 'Vardaam Web Solutions Pvt. Ltd',
//     place: 'Vadodara',
//     period: 'May 2022 - Nov 2022',
//     description: [
//       'Developed and standardized a comprehensive design language that included specific color schemes, typography choices, and icon sets, leading to a 40% increase in brand consistency across all digital platforms.',
//       'Collaborated with designers, developers, and cross-functional teams to translate design concepts into functional interfaces, resulting in a 20% reduction in a project iteration time.',
//       'Illustrated Wireframes, High-fidelity Mockups, and Interactive prototypes to visualize design concepts and user interactions using tools like Figma and Adobe XD.',
//       'Redesign of 5 major projects, directly contributing to a 30% improvement in user engagement and a 25% increase in user satisfaction scores through the introduction of user-centered design principles.',
//       'Conducted usability testing with over 20+ participants to gather actionable feedback, leading to iterative design improvements that enhanced user experience and interface usability by over 35%.'
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
//                 src="/profile.jpg"
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
//               {/* <p className="mb-4">
//                 Hi, I'm Shlok! I'm a passionate Full Stack Developer with expertise in cloud computing and machine learning.
//                 I love creating innovative solutions and learning new technologies.
//               </p> */}
//               <p >
//               Hi, I'm Shlok! Master’s student in Computer Science at DePaul University, with a strong foundation in software development, cloud technologies, and full-stack development. Proficient in languages such as Java, JavaScript, Python, and SQL, I have experience building web applications using React.js and am passionate about the potential of cloud infrastructure and DevOps to improve efficiency and scalability.<br/><br/>
//               </p>
//               <p>
//               My technical experience includes developing and optimizing applications, managing databases, and working with teams to deliver projects in Agile environments. I'm continuously learning and exploring new technologies, particularly in the DevOps and cloud computing space, and am eager to bring my skills to impactful software development roles. <br/><br/>
//               </p>
//               <p>
//               Currently, I am seeking software development internships or full-time roles that will allow me to contribute to high-quality projects while advancing my expertise in cloud technologies and full-stack development. Let's connect and discuss how I can bring value to your team!
//               </p>
//             </motion.div>
//           </div>

//           {/* EXPERIENCE SECTION */}
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
//                     <span>{exp.period} | {exp.place}</span>
//                   </div>

//                   {/* RENDER DESCRIPTION AS A BULLET LIST */}
//                   <ul className="text-gray-600 list-disc ml-5 space-y-1">
//                     {exp.description.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* EDUCATION SECTION (Second) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
//             {education.map((edu, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
//                 <div className="flex items-center text-gray-500">
//                   <BookOpen size={16} className="mr-2" />
//                   <span>{edu.university}</span>
//                   <Calendar size={16} className="ml-4 mr-2" />
//                   <span>{edu.period}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>


//           {/* CERTIFICATIONS SECTION (Third) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
//             {certifications.map((cert, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h4>
//                 <span className="text-gray-500">{cert.issuer} | {cert.period}</span>
//               </motion.div>
//             ))}
//           </div>



//           {/* SKILLS SECTION */}
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




//Main UI ends for now//

//-------------------------------------------------------------------




// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Briefcase, BookOpen, Award } from "lucide-react";

// const skills = {
//   "Full Stack": ["JavaScript/TypeScript", "React.js", "Node.js", "Python", "MongoDB", "PostgreSQL"],
//   "Cloud": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
//   "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
// };

// const experiences = [
//   {
//     title: "Full Stack Developer Intern",
//     company: "Cloudinfosoft™",
//     place: "Vadodara",
//     period: "Jan 2023 - Jun 2023",
//     description: [
//       "Developed and maintained critical server-side components for .NET applications, enhancing system architecture.",
//       "Integrated RESTful APIs to improve communication between client-side and backend, increasing functionality by 30%.",
//       "Led database optimizations, improving data handling efficiency by 20%.",
//       "Directed frontend development with React.js, improving UI responsiveness by 25%."
//     ]
//   },
//   {
//     title: "UI/UX Developer Intern",
//     company: "Vardaam Web Solutions Pvt. Ltd",
//     place: "Vadodara",
//     period: "May 2022 - Nov 2022",
//     description: [
//       "Developed a standardized design language, increasing brand consistency by 40%.",
//       "Created interactive prototypes using Figma and Adobe XD for improved user testing.",
//       "Redesigned 5 major projects, improving user engagement by 30%."
//     ]
//   }
// ];

// const education = [
//   {
//     degree: "Master of Science in Computer Science",
//     university: "DePaul University, Chicago, IL",
//     period: "Expected May 2025",
//     description: [
//       "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
//     ]
//   },
//   {
//     degree: "Bachelor of Technology in Information Technology",
//     university: "Navrachana University, Vadodara, India",
//     period: "June 2019 - June 2023",
//     description: [
//       "Minors in Internet of Things.",
//       "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
//     ]
//   }
// ];

// const certifications = [
//   {
//     name: "AWS Certified Solutions Architect – Associate",
//     issuer: "Amazon Web Services (AWS)",
//     period: "Jan 2024",
//   },
//   {
//     name: "Certified Kubernetes Administrator (CKA)",
//     issuer: "The Linux Foundation",
//     period: "Nov 2023",
//   },
//   {
//     name: "Google Cloud Associate Engineer",
//     issuer: "Google Cloud",
//     period: "Aug 2023",
//   }
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          
//           {/* ABOUT ME SECTION */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative">
//               <img src="/src/public/profile.jpg" alt="Profile" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
//             </motion.div>
            
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-gray-600">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
//               <p className="mb-4">
//                 Hi, I'm Shlok! A Master’s student in Computer Science at DePaul University, with expertise in software development, cloud computing, and full-stack development. Proficient in Java, JavaScript, Python, and SQL, I specialize in React.js and cloud infrastructure.
//               </p>
//               <p className="mb-4">
//                 My technical experience includes developing applications, managing databases, and working in Agile environments. I'm continuously learning and exploring new technologies, particularly in DevOps and cloud computing.
//               </p>
//               <p>
//                 Currently seeking **internships or full-time roles** in software development, cloud computing, or DevOps.
//               </p>
//             </motion.div>
//           </div>

//           {/* EXPERIENCE SECTION */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h3>
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600">
//                   <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]" />
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4> 
//                   <div className="flex items-center text-gray-500 mb-2">
//                     <Briefcase size={16} className="mr-2" />
//                     <span>{exp.company}</span>
//                     <Calendar size={16} className="ml-4 mr-2" />
//                     <span>{exp.period} | {exp.place}</span>
//                   </div>
//                   <ul className="text-gray-600 list-disc ml-5 space-y-1">
//                     {exp.description.map((point, idx) => <li key={idx}>{point}</li>)}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* EDUCATION SECTION */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
//             <div className="space-y-8">
//               {education.map((edu, index) => (
//                 <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
//                   <div className="flex items-center text-gray-500 mb-2">
//                     <BookOpen size={16} className="mr-2" />
//                     <span>{edu.university}</span>
//                     <Calendar size={16} className="ml-4 mr-2" />
//                     <span>{edu.period}</span>
//                   </div>
//                   <ul className="text-gray-600 list-disc ml-5 space-y-1">
//                     {edu.description.map((point, idx) => <li key={idx}>{point}</li>)}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* CERTIFICATIONS SECTION */}
//           <div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
//             <div className="space-y-8">
//               {certifications.map((cert, index) => (
//                 <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h4>
//                   <div className="flex items-center text-gray-500">
//                     <Award size={16} className="mr-2" />
//                     <span>{cert.issuer} | {cert.period}</span>
//                   </div>
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



//-------------------------------------------------------------------------------


// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Briefcase, BookOpen, Award } from "lucide-react";

// const skills = {
//   "Full Stack": ["JavaScript/TypeScript", "React.js", "Node.js", "Python", "MongoDB", "PostgreSQL"],
//   "Cloud": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
//   "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
// };

// const experiences = [
//   {
//     title: "Full Stack Developer Intern",
//     company: "Cloudinfosoft™",
//     place: "Vadodara",
//     period: "Jan 2023 - Jun 2023",
//     description: [
//       "Developed and maintained critical server-side components for .NET applications, enhancing system architecture.",
//       "Integrated RESTful APIs to improve communication between client-side and backend, increasing functionality by 30%.",
//       "Led database optimizations, improving data handling efficiency by 20%.",
//       "Directed frontend development with React.js, improving UI responsiveness by 25%."
//     ]
//   },
//   {
//     title: "UI/UX Developer Intern",
//     company: "Vardaam Web Solutions Pvt. Ltd",
//     place: "Vadodara",
//     period: "May 2022 - Nov 2022",
//     description: [
//       "Developed a standardized design language, increasing brand consistency by 40%.",
//       "Created interactive prototypes using Figma and Adobe XD for improved user testing.",
//       "Redesigned 5 major projects, improving user engagement by 30%."
//     ]
//   }
// ];

// const education = [
//   {
//     degree: "Master of Science in Computer Science",
//     university: "DePaul University, Chicago, IL",
//     period: "Expected May 2025",
//     description: [
//       "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
//     ]
//   },
//   {
//     degree: "Bachelor of Technology in Information Technology",
//     university: "Navrachana University, Vadodara, India",
//     period: "June 2019 - June 2023",
//     description: [
//       "Minors in Internet of Things.",
//       "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
//     ]
//   }
// ];

// const certifications = [
//   {
//     name: "AWS Certified Solutions Architect – Associate",
//     issuer: "Amazon Web Services (AWS)",
//     period: "Jan 2024",
//   },
//   {
//     name: "Certified Kubernetes Administrator (CKA)",
//     issuer: "The Linux Foundation",
//     period: "Nov 2023",
//   },
//   {
//     name: "Google Cloud Associate Engineer",
//     issuer: "Google Cloud",
//     period: "Aug 2023",
//   }
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          
//           {/* ABOUT ME SECTION */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative">
//               <img src="/src/public/profile.jpg" alt="Profile" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
//             </motion.div>
            
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-gray-600">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
//               <p className="mb-4">
//                 Hi, I'm Shlok! A Master’s student in Computer Science at DePaul University, with expertise in software development, cloud computing, and full-stack development. Proficient in Java, JavaScript, Python, and SQL, I specialize in React.js and cloud infrastructure.
//               </p>
//               <p className="mb-4">
//                 My technical experience includes developing applications, managing databases, and working in Agile environments. I'm continuously learning and exploring new technologies, particularly in DevOps and cloud computing.
//               </p>
//               <p>
//                 Currently seeking **internships or full-time roles** in software development, cloud computing, or DevOps.
//               </p>
//             </motion.div>
//           </div>

//           {/* EXPERIENCE SECTION (First) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h3>
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4> 
//                   <div className="flex items-center text-gray-500">
//                     <Briefcase size={16} className="mr-2" />
//                     <span>{exp.company}</span>
//                     <Calendar size={16} className="ml-4 mr-2" />
//                     <span>{exp.period} | {exp.place}</span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* EDUCATION SECTION (Second) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
//             {education.map((edu, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
//                 <div className="flex items-center text-gray-500">
//                   <BookOpen size={16} className="mr-2" />
//                   <span>{edu.university}</span>
//                   <Calendar size={16} className="ml-4 mr-2" />
//                   <span>{edu.period}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CERTIFICATIONS SECTION (Third) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
//             {certifications.map((cert, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h4>
//                 <span className="text-gray-500">{cert.issuer} | {cert.period}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* SKILLS SECTION (Last) */}
//           <div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {Object.entries(skills).map(([category, skillList]) => (
//                 <motion.div key={category} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
















//-------------------------------------------------------------------


// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, Briefcase, BookOpen, Award } from "lucide-react";

// const skills = {
//   "Full Stack": ["JavaScript/TypeScript", "React.js", "Node.js", "Python", "MongoDB", "PostgreSQL"],
//   "Cloud": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
//   "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
// };

// const education = [
//   {
//     degree: "Master of Science in Computer Science",
//     university: "DePaul University, Chicago, IL",
//     period: "Expected May 2025",
//     description: [
//       "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
//     ]
//   },
//   {
//     degree: "Bachelor of Technology in Information Technology",
//     university: "Navrachana University, Vadodara, India",
//     period: "June 2019 - June 2023",
//     description: [
//       "Minors in Internet of Things.",
//       "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
//     ]
//   }
// ];

// const certifications = [
//   {
//     name: "AWS Certified Solutions Architect – Associate",
//     issuer: "Amazon Web Services (AWS)",
//     period: "Jan 2024",
//   },
//   {
//     name: "Certified Kubernetes Administrator (CKA)",
//     issuer: "The Linux Foundation",
//     period: "Nov 2023",
//   },
//   {
//     name: "Google Cloud Associate Engineer",
//     issuer: "Google Cloud",
//     period: "Aug 2023",
//   }
// ];

// const experiences = [
//   {
//     title: "Full Stack Developer Intern",
//     company: "Cloudinfosoft™",
//     place: "Vadodara",
//     period: "Jan 2023 - Jun 2023",
//     description: [
//       "Developed and maintained critical server-side components for .NET applications, enhancing system architecture.",
//       "Integrated RESTful APIs to improve communication between client-side and backend, increasing functionality by 30%.",
//       "Led database optimizations, improving data handling efficiency by 20%.",
//       "Directed frontend development with React.js, improving UI responsiveness by 25%."
//     ]
//   },
//   {
//     title: "UI/UX Developer Intern",
//     company: "Vardaam Web Solutions Pvt. Ltd",
//     place: "Vadodara",
//     period: "May 2022 - Nov 2022",
//     description: [
//       "Developed a standardized design language, increasing brand consistency by 40%.",
//       "Created interactive prototypes using Figma and Adobe XD for improved user testing.",
//       "Redesigned 5 major projects, improving user engagement by 30%."
//     ]
//   }
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          
//           {/* ABOUT ME SECTION (Unchanged) */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative">
//               <img src="/src/public/profile.jpg" alt="Profile" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
//             </motion.div>
            
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-gray-600">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
//               <p className="mb-4">
//                 Hi, I'm Shlok! A Master’s student in Computer Science at DePaul University, with expertise in software development, cloud computing, and full-stack development. Proficient in Java, JavaScript, Python, and SQL, I specialize in React.js and cloud infrastructure.
//               </p>
//               <p className="mb-4">
//                 My technical experience includes developing applications, managing databases, and working in Agile environments. I'm continuously learning and exploring new technologies, particularly in DevOps and cloud computing.
//               </p>
//               <p>
//                 Currently seeking **internships or full-time roles** in software development, cloud computing, or DevOps.
//               </p>
//             </motion.div>
//           </div>

//           {/* EXPERIENCE SECTION (First, Unchanged) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h3>
//             {experiences.map((exp, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h4>
//                 <div className="flex items-center text-gray-500">
//                   <Briefcase size={16} className="mr-2" />
//                   <span>{exp.company}</span>
//                   <Calendar size={16} className="ml-4 mr-2" />
//                   <span>{exp.period} | {exp.place}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* EDUCATION SECTION (Second) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
//             {education.map((edu, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
//                 <div className="flex items-center text-gray-500">
//                   <BookOpen size={16} className="mr-2" />
//                   <span>{edu.university}</span>
//                   <Calendar size={16} className="ml-4 mr-2" />
//                   <span>{edu.period}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CERTIFICATIONS SECTION (Third) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
//             {certifications.map((cert, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h4>
//                 <span className="text-gray-500">{cert.issuer} | {cert.period}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* SKILLS SECTION (Last) */}
//           <div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {Object.entries(skills).map(([category, skillList]) => (
//                 <motion.div key={category} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Briefcase, BookOpen, ChevronUp, ChevronDown } from 'lucide-react';

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


// const education = [
//   {
//     degree: "Master of Science in Computer Science",
//     university: "DePaul University, Chicago, IL",
//     period: "Expected June 2025",
//     description: [
//       "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
//     ]
//   },
//   {
//     degree: "Bachelor of Technology in Information Technology",
//     university: "Navrachana University, Vadodara, India",
//     period: "June 2019 - June 2023",
//     description: [
//       "Minors in Internet of Things.",
//       "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
//     ]
//   }
// ];


// const certifications = [
//   {
//     name: "AWS Academy Data Analytics",
//     issuer: "Amazon Web Services (AWS)",
//     period: "November 2022",
//     badge: "https://images.credly.com/images/4a489a8c-0b2d-40ee-a839-afa55b44208d/image.png", // Update path to your badge image
//     link: "https://www.credly.com/badges/3be51e78-4dee-495b-b60b-af6119f8b0e9/print"
//   },
//   {
//     name: "AWS Academy Cloud Foundations",
//     issuer: "Amazon Web Services (AWS)",
//     period: "October 2021",
//     badge: "https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png", // Update path to your badge image
//     link: "https://www.credly.com/badges/11cdad48-10a1-4545-91d6-7e0da48a3610/print"
//   },
//   // {
//   //   name: "AWS Certified Solutions Architect – Associate",
//   //   issuer: "Amazon Web Services (AWS)",
//   //   period: "Jan 2024",
//   //   badge: "https://images.credly.com/images/4a489a8c-0b2d-40ee-a839-afa55b44208d/image.png", // Update path to your badge image
//   //   link: "https://www.credly.com/badges/3be51e78-4dee-495b-b60b-af6119f8b0e9/print"
//   // },
//   // {
//   //   name: "Certified Kubernetes Administrator (CKA)",
//   //   issuer: "The Linux Foundation",
//   //   period: "Nov 2023",
//   //   badge: "/badges/kubernetes-cka.png", // Update path to your badge image
//   //   link: "https://www.cncf.io/certification/cka/"
//   // },
//   // {
//   //   name: "Google Cloud Associate Engineer",
//   //   issuer: "Google Cloud",
//   //   period: "Aug 2023",
//   //   badge: "/badges/google-cloud-engineer.png", // Update path to your badge image
//   //   link: "https://www.cloud.google.com/certifications"
//   // }
// ];

// const experiences = [
//   {
//     title: 'Full Stack Developer Intern',
//     skil: '',
//     company: 'Cloudinfosoft™',
//     place: 'Vadodara',
//     period: 'Jan 2023 - Jun 2023',
//     description: ['Design, Development, and maintenance of critical server-side components for .NET applications, enhancing system architecture and operational efficiency.',
//     'Developed and seamlessly integrated RESTful APIs facilitating communication among application’s client- side components, resulting in a 30% improvement in functionality and response time.',
//     'Collaborated cross-functionally with a team of 5+ developers and designers to drive continuous improvements, resulting in a 15% acceleration in project delivery timelines and a 100% client satisfaction rate.',
//     'Led the development and execution of robust data storage strategies, implementing scalable database solutions and storage systems that supported a 20% increase in data handling efficiency.',
//     'Directed frontend development initiatives leveraging React JS, contributing to the creation of intuitive, responsive user interfaces that improved user engagement metrics by 25%.',
//     'Collaborated cross-functionally with a team of 5+ developers and designers to drive continuous improvements, resulting in a 15% acceleration in project delivery timelines and a 100% client satisfaction rate.'

//     ]
//   },
//   {
//     title: 'UI/UX Developer Intern',
//     skil: 'User Interface, User Experience',
//     company: 'Vardaam Web Solutions Pvt. Ltd',
//     place: 'Vadodara',
//     period: 'May 2022 - Nov 2022',
//     description: [
//       'Developed and standardized a comprehensive design language that included specific color schemes, typography choices, and icon sets, leading to a 40% increase in brand consistency across all digital platforms.',
//       'Collaborated with designers, developers, and cross-functional teams to translate design concepts into functional interfaces, resulting in a 20% reduction in a project iteration time.',
//       'Illustrated Wireframes, High-fidelity Mockups, and Interactive prototypes to visualize design concepts and user interactions using tools like Figma and Adobe XD.',
//       'Redesign of 5 major projects, directly contributing to a 30% improvement in user engagement and a 25% increase in user satisfaction scores through the introduction of user-centered design principles.',
//       'Conducted usability testing with over 20+ participants to gather actionable feedback, leading to iterative design improvements that enhanced user experience and interface usability by over 35%.'
//     ]
//   }
// ];

// const About = () => {

//   const [openIndex, setOpenIndex] = useState(null);
//   const toggleOpen = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };


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
//                 src="/profile.jpg"
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
//               {/* <p className="mb-4">
//                 Hi, I'm Shlok! I'm a passionate Full Stack Developer with expertise in cloud computing and machine learning.
//                 I love creating innovative solutions and learning new technologies.
//               </p> */}
//               <p >
//               Hi, I'm Shlok! Master’s student in Computer Science at DePaul University, with a strong foundation in software development, cloud technologies, and full-stack development. Proficient in languages such as Java, JavaScript, Python, and SQL, I have experience building web applications using React.js and am passionate about the potential of cloud infrastructure and DevOps to improve efficiency and scalability.<br/><br/>
//               </p>
//               <p>
//               My technical experience includes developing and optimizing applications, managing databases, and working with teams to deliver projects in Agile environments. I'm continuously learning and exploring new technologies, particularly in the DevOps and cloud computing space, and am eager to bring my skills to impactful software development roles. <br/><br/>
//               </p>
//               <p>
//               Currently, I am seeking software development internships or full-time roles that will allow me to contribute to high-quality projects while advancing my expertise in cloud technologies and full-stack development. Let's connect and discuss how I can bring value to your team!
//               </p>
//             </motion.div>
//           </div>

//           {/* EXPERIENCE SECTION */}
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
//                     <span>{exp.period} | {exp.place}</span>
//                   </div>

//                   {/* RENDER DESCRIPTION AS A BULLET LIST */}
//                   <ul className="text-gray-600 list-disc ml-5 space-y-1">
//                     {exp.description.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* EDUCATION SECTION (Second) */}
//           <div className="mb-20">
//             <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
//             {education.map((edu, index) => (
//               <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
//                 <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
//                 <div className="flex items-center text-gray-500">
//                   <BookOpen size={16} className="mr-2" />
//                   <span>{edu.university}</span>
//                   <Calendar size={16} className="ml-4 mr-2" />
//                   <span>{edu.period}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>


//           {/* CERTIFICATIONS SECTION (Third) */}
//          {/* CERTIFICATIONS SECTION */}
// {/* CERTIFICATIONS SECTION */}
// <div className="mb-20">
//   <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {certifications.map((cert, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
//       >
//         {/* Certification Badge Image */}
//         <div className="flex justify-center mb-4">
//           <img 
//             src={cert.badge} 
//             alt={`${cert.name} Badge`} 
//             className="w-24 h-24 object-contain"
//           />
//         </div>

//         {/* Expandable Certification Title */}
//         <button 
//           onClick={() => toggleOpen(index)} 
//           className="w-full flex justify-between items-center text-lg font-semibold text-gray-800"
//         >
//           {cert.name} {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         </button>

//         {/* Expanded Details */}
//         {openIndex === index && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }} 
//             animate={{ opacity: 1, height: "auto" }} 
//             transition={{ duration: 0.3 }} 
//             className="mt-4 text-gray-600 border-t pt-4"
//           >
//             <p><strong>Issuer:</strong> {cert.issuer}</p>
//             <p><strong>Issued:</strong> {cert.period}</p>
//             <p>
//               <strong>Link:</strong> 
//               <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
//                 View Certificate
//               </a>
//             </p>
//           </motion.div>
//         )}
//       </motion.div>
//     ))}
//   </div>
// </div>






//           {/* SKILLS SECTION */}
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







//import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Calendar, Briefcase, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';
import { Calendar, Briefcase, BookOpen, ExternalLink } from 'lucide-react';


// TypeScript Interfaces
interface Skill {
  [category: string]: string[];
}

interface Education {
  degree: string;
  university: string;
  period: string;
  description: string[];
}

interface Experience {
  title: string;
  skil: string;
  company: string;
  place: string;
  period: string;
  description: string[];
}

interface Certification {
  name: string;
  issuer: string;
  issuedDate: string;
  expirationDate: string;
  badge: string;
  link: string;
  skills: string[];
}

// Data
const skills: Skill = {
  // 'Full Stack': [
  //   'JavaScript/TypeScript',
  //   'React.js',
  //   'Node.js',
  //   'Python',
  //   'MongoDB',
  //   'PostgreSQL'
  // ],
  'Languages': [
    'Java',
    'JavaScript',
    'SQL',
    'Node.js',
    'Python',
    'MongoDB',
    'C',
    'C++',
  ],
  'Cloud': [
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'CI/CD'
  ],
  'Framework': [
    'React.js',
    'TypeScript',
    'Dot.NET',
    'PostgreSQL',
    'Express.js',
    
  ],
  // 'ML/AI': [
  //   'TensorFlow',
  //   'PyTorch',
  //   'Scikit-learn',
  //   'Computer Vision',
  //   'NLP'
  // ],
  // 'Tools': [
  //   'Visual Code',
  //   'Github'
    
  // ]
};

const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    university: "DePaul University, Chicago, IL",
    period: "Expected November 2025",
    description: [
      "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
    ]
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    university: "Navrachana University, Vadodara, India",
    period: "June 2019 - June 2023",
    description: [
      // "Minors in Internet of Things.",
      "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
    ]
  }
];

const certifications: Certification[] = [
  {
    name: "AWS Academy Data Analytics",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "November 2022",
    expirationDate: "November 2025",
    badge: "https://images.credly.com/images/4a489a8c-0b2d-40ee-a839-afa55b44208d/image.png",
    link: "https://www.credly.com/badges/3be51e78-4dee-495b-b60b-af6119f8b0e9/print",
    skills: ["Data Analytics", "AWS Services", "Big Data"]
  },
  
  
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "October 2021",
    expirationDate: "October 2024",
    badge: "https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
    link: "https://www.credly.com/badges/11cdad48-10a1-4545-91d6-7e0da48a3610/print",
    skills: ["Cloud Computing", "AWS Core Services", "Cloud Architecture", "Cloud Fundamentals"]
  },

  
];

const experiences: Experience[] = [
  {
    title: 'Full Stack Developer Intern',
    skil: '',
    company: 'Cloudinfosoft™',
    place: 'Vadodara',
    period: 'Jan 2023 - Jun 2023',
    description: [
      'Design, Development, and maintenance of critical server-side components for .NET applications, enhancing system architecture and operational efficiency.',
      'Developed and seamlessly integrated RESTful APIs facilitating communication among applications client- side components, resulting in a 30% improvement in functionality and response time.',
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
  //const [expandedId, setExpandedId] = useState<number | null>(null);

  

//   const toggleExpand = (index: number) => {
//   setExpandedId(expandedId === index ? null : index);
// };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* About Me Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/profile.jpg"
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
              <p>
                Hi, I'm Shlok! Master's student in Computer Science at DePaul University, with a strong foundation in software development, cloud technologies, and full-stack development. Proficient in languages such as Java, JavaScript, Python, and SQL, I have experience building web applications using React.js and am passionate about the potential of cloud infrastructure and DevOps to improve efficiency and scalability.<br/><br/>
              </p>
              <p>
                My technical experience includes developing and optimizing applications, managing databases, and working with teams to deliver projects in Agile environments. I'm continuously learning and exploring new technologies, particularly in the DevOps and cloud computing space, and am eager to bring my skills to impactful software development roles. <br/><br/>
              </p>
              <p>
                Currently, I am seeking software development internships or full-time roles that will allow me to contribute to high-quality projects while advancing my expertise in cloud technologies and full-stack development. Let's connect and discuss how I can bring value to your team!
              </p>
            </motion.div>
          </div>

          {/* Experience Section */}
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
                  <ul className="text-gray-600 list-disc ml-5 space-y-1">
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>



          {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }} 
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]" />
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                  <div className="flex items-center text-gray-500">
                    <BookOpen size={16} className="mr-2" />
                    <span>{edu.university}</span>
                    <Calendar size={16} className="ml-4 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.description && (
                    <ul className="mt-2 text-gray-600 list-disc ml-4">
                      {edu.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>


{/* below is the certification display 3 in a row  */}


          {/* Certifications Section */}

<div className="mb-20">
  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        {/* Certificate Header with Badge */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-blue-600/5" />
          <div className="p-4 flex justify-center">
            <motion.img
              src={cert.badge}
              alt={`${cert.name} Badge`}
              className="w-24 h-24 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>

        {/* Certificate Content */}
        <div className="p-4 bg-white">
          <div className="mb-3">
            <h4 className="text-lg font-bold text-gray-800 mb-1">
              {cert.name}
            </h4>
            <p className="text-gray-600 text-sm">{cert.issuer}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Issued:</span>
              <span className="text-gray-800 font-medium">{cert.issuedDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Expires:</span>
              <span className="text-gray-800 font-medium">{cert.expirationDate}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
              <span className="mr-1">View Certificate</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>









{/* Below will be certification display 4 in the row  */}



{/* Certifications Section */}
{/* <div className="mb-20">
  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {certifications.map((cert, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      > */}
        {/* Certificate Header with Badge */}
        {/* <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-blue-600/5" />
          <div className="p-3 flex justify-center">
            <motion.img
              src={cert.badge}
              alt={`${cert.name} Badge`}
              className="w-20 h-20 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div> */}

        {/* Certificate Content */}
        {/* <div className="p-3 bg-white">
          <div className="mb-2">
            <h4 className="text-base font-bold text-gray-800 mb-1 line-clamp-2">
              {cert.name}
            </h4>
            <p className="text-gray-600 text-xs">{cert.issuer}</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Issued:</span>
              <span className="text-gray-800 font-medium">{cert.issuedDate}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Expires:</span>
              <span className="text-gray-800 font-medium">{cert.expirationDate}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-700 transition-colors text-xs"
            >
              <span className="mr-1">View Certificate</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div> */}

{/* below Skills 3 in the row  */}

          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h3>
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


{/* Skills for 4 in row  */}



{/* Skills Section */}
{/* <div>
  <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-2" />
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</div>



 */}









        </motion.div>
      </div>
    </section>
  );
};

export default About;