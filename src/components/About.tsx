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



import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, BookOpen } from 'lucide-react';

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


const education = [
  {
    degree: "Master of Science in Computer Science",
    university: "DePaul University, Chicago, IL",
    period: "Expected June 2025",
    description: [
      "Relevant Coursework: Database Systems, Software Engineering, Distributed Systems, Applied Algorithms."
    ]
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    university: "Navrachana University, Vadodara, India",
    period: "June 2019 - June 2023",
    description: [
      "Minors in Internet of Things.",
      "Relevant Coursework: Networking, Operating Systems, Algorithms, AI, Cloud Computing."
    ]
  }
];


const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    period: "Jan 2024",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    period: "Nov 2023",
  },
  {
    name: "Google Cloud Associate Engineer",
    issuer: "Google Cloud",
    period: "Aug 2023",
  }
];

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
              {/* <p className="mb-4">
                Hi, I'm Shlok! I'm a passionate Full Stack Developer with expertise in cloud computing and machine learning.
                I love creating innovative solutions and learning new technologies.
              </p> */}
              <p >
              Hi, I'm Shlok! Master’s student in Computer Science at DePaul University, with a strong foundation in software development, cloud technologies, and full-stack development. Proficient in languages such as Java, JavaScript, Python, and SQL, I have experience building web applications using React.js and am passionate about the potential of cloud infrastructure and DevOps to improve efficiency and scalability.<br/><br/>
              </p>
              <p>
              My technical experience includes developing and optimizing applications, managing databases, and working with teams to deliver projects in Agile environments. I'm continuously learning and exploring new technologies, particularly in the DevOps and cloud computing space, and am eager to bring my skills to impactful software development roles. <br/><br/>
              </p>
              <p>
              Currently, I am seeking software development internships or full-time roles that will allow me to contribute to high-quality projects while advancing my expertise in cloud technologies and full-stack development. Let's connect and discuss how I can bring value to your team!
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

          {/* EDUCATION SECTION (Second) */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h3>
            {education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                <div className="flex items-center text-gray-500">
                  <BookOpen size={16} className="mr-2" />
                  <span>{edu.university}</span>
                  <Calendar size={16} className="ml-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>


          {/* CERTIFICATIONS SECTION (Third) */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
            {certifications.map((cert, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pl-8">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h4>
                <span className="text-gray-500">{cert.issuer} | {cert.period}</span>
              </motion.div>
            ))}
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
