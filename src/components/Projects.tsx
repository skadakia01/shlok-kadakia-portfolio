import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'North-West-Corner-Java',
    description: 'Transportation problems are a subset of Linear Programming Problems (LPPs) in which objects are carried from a set of sources to a set of destinations while considering the supply and demand of the sources and destinations in minimizing the overall cost of transportation.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    github: 'https://github.com/skadakia01/North-West-Corner-Java',
    //live: 'https://example.com',
    tags: ['Java']
  },
  // {
  //   title: 'Project 2',
  //   description: 'Cloud-based machine learning application',
  //   image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   tags: ['Python', 'AWS', 'TensorFlow']
  // },
  // Add more projects as needed
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;