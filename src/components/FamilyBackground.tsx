import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { User, Phone, Briefcase, MapPin, Heart } from "lucide-react";

const FamilyBackground = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="family" title={t.familyBackground}>
      <div className="space-y-4">
        {/* Father */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg text-gradient-gold mb-4">{t.father}</h3>
          <div className="space-y-3">
            <Row icon={<User className="w-4 h-4" />} label={t.fatherName} value={t.fatherNameValue} />
            <Row icon={<Phone className="w-4 h-4" />} label={t.fatherPhone} value={t.fatherPhoneValue} isPhone />
            <Row icon={<Briefcase className="w-4 h-4" />} label={t.fatherOccupation} value={t.fatherOccupationValue} />
          </div>
        </motion.div>

        {/* Mother */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg text-gradient-gold mb-4">{t.mother}</h3>
          <div className="space-y-3">
            <Row icon={<User className="w-4 h-4" />} label={t.motherName} value={t.motherNameValue} />
          </div>
        </motion.div>

        {/* Sister */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg text-gradient-gold mb-4">{t.sister}</h3>
          <div className="space-y-3">
            <Row icon={<User className="w-4 h-4" />} label={t.sisterName} value={t.sisterNameValue} />
            <Row icon={<Heart className="w-4 h-4" />} label={t.maritalStatus} value={t.sisterMaritalStatus} />
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6"
        >
          <Row icon={<MapPin className="w-4 h-4" />} label={t.familyAddress} value={t.familyAddressValue} />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

const Row = ({ icon, label, value, isPhone }: { icon: React.ReactNode; label: string; value: string; isPhone?: boolean }) => (
  <div className="flex items-start gap-3 group">
    <div className="text-primary mt-0.5 shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]">{icon}</div>
    <div>
      <p className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
      {isPhone ? (
        <a
          href={`tel:${value}`}
          className="text-sm font-body font-bold text-primary hover:text-secondary underline underline-offset-2 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm font-body font-bold text-foreground">{value}</p>
      )}
    </div>
  </div>
);

export default FamilyBackground;
