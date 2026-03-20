import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { User, Phone } from "lucide-react";

const MaternalDetails = () => {
  const { t } = useLanguage();

  const members = [
    { name: t.maternalMember1Name, phone: t.maternalMember1Phone },
    { name: t.maternalMember2Name, phone: t.maternalMember2Phone },
  ];

  return (
    <SectionWrapper id="maternal" title={t.maternalDetails}>
      <div className="space-y-4">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-primary transition-transform duration-500 group-hover:rotate-[360deg]">
                <User className="w-5 h-5" />
              </div>
              <p className="font-display text-base text-gradient-gold font-bold">{member.name}</p>
            </div>
            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-3 group/phone"
            >
              <div className="text-primary transition-transform duration-500 group-hover/phone:rotate-[360deg]">
                <Phone className="w-4 h-4" />
              </div>
              <p className="text-sm font-body font-bold text-foreground hover:text-primary underline underline-offset-2 transition-colors">
                {member.phone}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MaternalDetails;
