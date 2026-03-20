import { motion } from "framer-motion";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import BackgroundVideo from "@/components/BackgroundVideo";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import PersonalDetails from "@/components/PersonalDetails";
import FamilyBackground from "@/components/FamilyBackground";
import MaternalDetails from "@/components/MaternalDetails";
import ContactDetails from "@/components/ContactDetails";
import PhotoGallery from "@/components/PhotoGallery";

const PageContent = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <FloatingNav />
      <main className="pt-16">
        <HeroSection />
        <PersonalDetails />
        <FamilyBackground />
        <MaternalDetails />
        <ContactDetails />
        <PhotoGallery />
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 px-4"
        >
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 text-primary"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="font-display text-lg text-gradient-gold tracking-widest">{t.jayHanumanDada}</p>
          {/* Decorative bottom */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/50 animate-glow-pulse" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <PageContent />
  </LanguageProvider>
);

export default Index;
