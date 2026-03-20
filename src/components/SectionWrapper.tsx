import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  title?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, title, className = "" }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full max-w-2xl mx-auto px-4 py-12 ${className}`}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl text-gradient-gold tracking-wide mb-3 text-backdrop-tight">
            {title}
          </h2>
          <div className="section-divider" />
        </motion.div>
      )}
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
