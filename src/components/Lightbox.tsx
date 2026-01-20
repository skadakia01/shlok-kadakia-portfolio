import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

type Photo = {
  id: number;
  src: string;
  title: string;
  description?: string;
};

type Props = {
  photos: Photo[];
  activeId: number;
  onClose: () => void;
};

const Lightbox = ({ photos, activeId, onClose }: Props) => {
  const currentIndex = photos.findIndex(p => p.id === activeId);
  const photo = photos[currentIndex];

  const prev = () => {
    const prevIndex =
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    window.dispatchEvent(
      new CustomEvent('lightbox:navigate', {
        detail: photos[prevIndex].id,
      })
    );
  };

  const next = () => {
    const nextIndex =
      currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    window.dispatchEvent(
      new CustomEvent('lightbox:navigate', {
        detail: photos[nextIndex].id,
      })
    );
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIndex]);

  if (!photo) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:opacity-80"
      >
        <X size={28} />
      </button>

      {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-6 text-white hover:opacity-80"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-6 text-white hover:opacity-80"
      >
        <ChevronRight size={36} />
      </button>

      {/* Image */}
      <div className="max-w-5xl px-6 text-center">
        <motion.img
          key={photo.id}
          src={photo.src}
          alt={photo.title}
          className="rounded-xl max-h-[80vh] mx-auto"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
        />

        <div className="mt-4">
          <h3 className="text-xl font-semibold">{photo.title}</h3>
          {photo.description && (
            <p className="text-gray-400 mt-1">{photo.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Lightbox;