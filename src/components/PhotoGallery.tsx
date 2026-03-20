import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import groomPhoto1 from "@/assets/groom-photo-1.jpg";
import groomPhoto2 from "@/assets/groom-photo-2.jpg";
import { X } from "lucide-react";

const photos = [groomPhoto1, groomPhoto2];

const PARTICLE_COUNT = 40;

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const COLORS = [
  "hsl(37, 55%, 55%)",
  "hsl(30, 85%, 52%)",
  "hsl(45, 80%, 60%)",
  "hsl(15, 65%, 40%)",
  "hsl(37, 50%, 70%)",
];

const PhotoGallery = () => {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  const spawnParticles = useCallback(() => {
    const pieces: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 12,
      delay: Math.random() * 0.5,
      duration: 1.5 + Math.random() * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setParticles(pieces);
  }, []);

  const openPhoto = (src: string) => {
    setSelectedPhoto(src);
    spawnParticles();
  };

  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => setParticles([]), 4000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <>
      <SectionWrapper id="gallery" title={t.photoGallery}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-3 group cursor-pointer"
              onClick={() => openPhoto(src)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Gallery photo ${i + 1}`}
                  className="w-full h-72 md:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox - full photo view */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* AI Animated Particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.5, 1, 0],
                  y: `${p.y + 20}vh`,
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
                className="fixed pointer-events-none rounded-full"
                style={{
                  left: 0,
                  top: 0,
                  width: p.size,
                  height: p.size,
                  background: `radial-gradient(circle, ${p.color}, transparent)`,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                }}
              />
            ))}

            {/* Animated rings */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 3, 5], opacity: [0.5, 0.2, 0] }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="fixed w-32 h-32 rounded-full border-2 border-primary/30 pointer-events-none"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 2, 4], opacity: [0.4, 0.15, 0] }}
              transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
              className="fixed w-32 h-32 rounded-full border border-primary/20 pointer-events-none"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden gold-glow flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt="Full view"
                className="w-full h-auto rounded-3xl"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 glass-card p-2 hover:gold-glow transition-all z-10"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
