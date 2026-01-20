import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { memories } from '../data/memories';
import Lightbox from '../components/Lightbox';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const categories = ['All', 'Food', 'Nature', 'Chicago' , 'New York'];

const Memories = () => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState<'latest' | 'oldest'>('latest');
  const [active, setActive] = useState<number | null>(null);
  

  const filtered = memories
    .filter(m => filter === 'All' || m.category === filter)
    .sort((a, b) =>
      sort === 'latest'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    useEffect(() => {
        const handler = (e: any) => setActive(e.detail);
        window.addEventListener('lightbox:navigate', handler);
        return () => window.removeEventListener('lightbox:navigate', handler);
      }, []);

  return (
    <>
      <Helmet>
        <title>Photography & Memories | Shlok Kadakia</title>
        <meta
          name="description"
          content="A personal collection of photography, travel moments, and visual memories."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-black text-white px-6 pt-28 pb-20"
      >

    {/* Header */}
<header className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    <Link
      to="/"
      className="text-white text-xl font-bold hover:opacity-80 transition"
    >
      S | K
    </Link>

    <span className="text-sm text-gray-400">
      Photography & Memories
    </span>
  </div>
</header>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Photography & Memories
          </h1>
          <p className="text-gray-400 text-lg">
            Moments I noticed, captured, and kept.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto mb-10 gap-4">
          <div className="flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === cat
                    ? 'bg-white text-black'
                    : 'border border-gray-600 text-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            onChange={e => setSort(e.target.value as any)}
            className="bg-black border border-gray-600 px-4 py-2 rounded-lg text-sm"
          >
            <option value="latest">Latest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map(photo => (
            <motion.img
              key={photo.id}
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              onClick={() => setActive(photo.id)}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl cursor-pointer shadow-lg break-inside-avoid"
            />
          ))}
        </div>

        {/* Back to homepage */}

        <div className="text-center mt-24">
  <Link
    to="/"
    className="text-gray-400 hover:text-white transition underline underline-offset-4"
  >
    ← Back to homepage
  </Link>
</div>

        {active && (
          <Lightbox
            photos={filtered.map(photo => ({ ...photo, id: photo.id }))}
            activeId={active}
            onClose={() => setActive(null)}
          />
        )}
      </motion.div>
    </>
  );
};

export default Memories;