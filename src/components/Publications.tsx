import { motion } from 'framer-motion';
import { ExternalLink, FileText, ChevronDown } from 'lucide-react';
import { useState } from 'react';

/* -------------------- Types -------------------- */

type PublicationStatus = 'Published' | 'Submitted' | 'In Progress';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: PublicationStatus;
  abstract: string;
  tags: string[];
  logo: string;
  paperLink?: string;
  codeLink?: string;
}

/* -------------------- Data -------------------- */

const publications: Publication[] = [
//   {
//     title: 'Edge–Fog–Cloud Architecture for Smart Traffic Management',
//     authors: 'Shlok Kadakia, et al.',
//     venue: 'IEEE Smart Cities Workshop',
//     year: '2024',
//     status: 'Submitted',
//     abstract:
//       'This research proposes a scalable Edge–Fog–Cloud architecture for real-time traffic monitoring and emergency vehicle prioritization using computer vision and distributed scheduling.',
//     tags: ['Edge Computing', 'Computer Vision', 'Distributed Systems'],
//     logo: '/logos/ieee.png',
//     paperLink: 'https://example.com/paper.pdf',
//     codeLink: 'https://github.com/your-repo',
//   },
  {
    title: 'SLA Aware Dynamic Weighted Priority Scheduling for Fog Computing',
    authors: 'Shlok Kadakia, et al.',
    venue: 'IEEE International Conference on Cloud Computing',
    year: '2026',
    status: 'Submitted',
    abstract:
      'This paper introduces a novel SLA-aware dynamic weighted priority scheduling algorithm for fog computing environments, optimizing resource allocation based on real-time workload and service level agreements.',
    tags: ['Edge Computing', 'Scheduling', 'Edge Computing', 'Scheduling', 'Fog Computing'],
    logo: '/logos/IEEE.png',
    paperLink: '../public/research/SLA Aware Dynamic Weighted Priority Scheduling for Fog Computing.pdf',
    codeLink: 'https://github.com/00adam001/SLA-DWP-fog-scheduler',
  },
];

/* -------------------- Styles -------------------- */

const statusStyles: Record<PublicationStatus, string> = {
  Published: 'bg-green-100 text-green-700',
  Submitted: 'bg-yellow-100 text-yellow-700',
  'In Progress': 'bg-blue-100 text-blue-700',
};

/* -------------------- Component -------------------- */

const Publications = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Publications & Research
          </h2>

          {/* IMPORTANT: full-width alignment like Tech Stack */}
          <div className="grid grid-cols-1 gap-10">
            {publications.map((pub, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl p-6 shadow-lg"
                >
                  {/* ---------- Header ---------- */}
                  <div className="flex gap-4 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={pub.logo}
                        alt={pub.venue}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* Title + Status */}
                    <div className="flex-1 flex justify-between items-center gap-4">
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {pub.authors} · {pub.venue} · {pub.year}
                        </p>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusStyles[pub.status]}`}
                      >
                        {pub.status}
                      </span>
                    </div>
                  </div>

                  {/* ---------- Tags ---------- */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {pub.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ---------- Abstract Toggle ---------- */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex items-center text-sm text-blue-600 mt-4 hover:text-blue-800 transition"
                  >
                    {isOpen ? 'Hide abstract' : 'Read abstract'}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="text-gray-700 mt-4 leading-relaxed">
                      {pub.abstract}
                    </p>
                  )}

                  {/* ---------- Links ---------- */}
                  <div className="flex gap-4 mt-5">
                    {pub.paperLink && (
                      <a
                        href={pub.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition text-sm"
                      >
                        <FileText size={16} className="mr-1" />
                        Paper
                      </a>
                    )}
                    {pub.codeLink && (
                      <a
                        href={pub.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition text-sm"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;