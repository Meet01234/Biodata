import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import groomPhoto from "@/assets/groom-photo-1.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      {/* Jay Mahakali */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-display text-base md:text-lg text-gradient-gold tracking-widest mb-2 text-backdrop-tight font-bold leading-relaxed"
      >
        {t.jayMahakaliText}
      </motion.p>

      {/* Mantra */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-4 px-2 w-full"
      >
        <p className="font-display text-lg md:text-2xl text-gradient-gold tracking-widest mb-1 whitespace-normal break-words text-backdrop-tight font-bold leading-relaxed">
          {t.mantra}
        </p>
      </motion.div>

      {/* Groom Photo - click to zoom toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, y: -120 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, type: "spring", damping: 20 }}
        className="relative mb-6 cursor-pointer"
        onClick={() => setZoomed(!zoomed)}
      >
        <motion.div
          animate={{
            scale: zoomed ? 1.02 : 1,
            boxShadow: zoomed
              ? "0 0 60px hsla(37, 50%, 53%, 0.5), 0 20px 60px rgba(0,0,0,0.3)"
              : "0 0 30px hsla(37, 50%, 53%, 0.3), 0 0 60px hsla(30, 90%, 50%, 0.1)",
          }}
          layout
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className={[
            "overflow-hidden border-4 border-primary/40 animate-glow-pulse",
            zoomed ? "gold-glow" : "",
            "transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]",
            zoomed ? "w-80 h-96 md:w-[28rem] md:h-[34rem] rounded-3xl" : "w-48 h-48 md:w-64 md:h-64 rounded-full",
          ].join(" ")}
          style={{ zIndex: zoomed ? 50 : 1 }}
        >
          <img
            src={groomPhoto}
            alt="Meet Parmar"
            className={`w-full h-full object-top ${
              zoomed ? "object-contain" : "object-cover"
            }`}
            loading="eager"
          />
        </motion.div>
        <motion.div
          layout
          className={[
            "absolute inset-0 -m-2 border-2 border-primary/20 animate-float pointer-events-none",
            "transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]",
            zoomed ? "rounded-3xl" : "rounded-full",
          ].join(" ")}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <h1 className="font-display text-3xl md:text-5xl text-gradient-gold tracking-wider mb-3 text-backdrop-tight font-bold leading-tight">
          {t.groomName}
        </h1>

        {/* Om */}
        <div className="inline-block px-6 py-2 rounded-full border-2 border-primary gold-glow mb-4">
          <p className="text-2xl md:text-3xl text-gradient-gold leading-normal">{t.om}</p>
        </div>

        {/* Marriage Biodata */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-display text-2xl md:text-4xl text-gradient-gold tracking-wider mb-3 text-backdrop-tight font-bold leading-tight"
        >
          {t.marriageBiodata}
        </motion.p>

        {/* Seeking Soulmate */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="font-body text-base md:text-lg text-primary/80 tracking-wide text-backdrop-tight font-medium leading-relaxed"
        >
          {t.seekingSoulmate}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 animate-float"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-primary/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
