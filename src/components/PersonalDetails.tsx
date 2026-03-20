import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { MapPin, Briefcase, GraduationCap, Calendar, Clock, Ruler, Weight, Building2, IndianRupee } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Palak+Prime+Ambli+Rd+Ahmedabad+Gujarat+380058";

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
  index: number;
}

const DetailRow = ({ icon, label, value, isLink, href, index }: DetailRowProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="flex items-start gap-3 py-3 border-b border-primary/10 last:border-0 group"
  >
    <div className="text-primary mt-0.5 shrink-0 transition-transform duration-500 group-hover:rotate-[360deg]">{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
      {isLink ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-body font-bold text-inherit hover:text-secondary underline underline-offset-2 transition-colors break-words"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm font-body font-bold text-foreground break-words">{value}</p>
      )}
    </div>
  </motion.div>
);

const PersonalDetails = () => {
  const { t } = useLanguage();

  const details = [
    { icon: <Briefcase className="w-4 h-4" />, label: t.name, value: t.nameValue },
    { icon: <Calendar className="w-4 h-4" />, label: t.birthDate, value: t.birthDateValue },
    { icon: <Clock className="w-4 h-4" />, label: t.birthTime, value: t.birthTimeValue },
    { icon: <MapPin className="w-4 h-4" />, label: t.birthPlace, value: t.birthPlaceValue },
    { icon: <Ruler className="w-4 h-4" />, label: t.height, value: t.heightValue },
    { icon: <Weight className="w-4 h-4" />, label: t.weight, value: t.weightValue },
    { icon: <GraduationCap className="w-4 h-4" />, label: t.education, value: t.educationValue },
    { icon: <Briefcase className="w-4 h-4" />, label: t.occupation, value: t.occupationValue },
    { icon: <Building2 className="w-4 h-4" />, label: t.company, value: t.companyValue },
    { icon: <IndianRupee className="w-4 h-4" />, label: t.salary, value: t.salaryValue },
  ];

  return (
    <SectionWrapper id="personal" title={t.personalDetails}>
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/20 p-6 md:p-8"
        style={{
          boxShadow: "0 8px 32px hsla(var(--gold) / 0.12), inset 0 1px 0 hsla(var(--gold) / 0.15)",
        }}
      >
        {/* Frosted glass tint (light) */}
        <div
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            background: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(24px) saturate(140%) contrast(110%)",
            WebkitBackdropFilter: "blur(24px) saturate(140%) contrast(110%)",
          }}
        />

        {/* Frosted glass tint (dark) */}
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            background: "rgba(0, 0, 0, 0.28)",
            backdropFilter: "blur(24px) saturate(140%) contrast(110%)",
            WebkitBackdropFilter: "blur(24px) saturate(140%) contrast(110%)",
          }}
        />

        <div className="relative">
          {details.map((d, i) => (
            <DetailRow key={i} index={i} {...d} />
          ))}
          <DetailRow
            icon={<MapPin className="w-4 h-4" />}
            label={t.companyAddress}
            value={t.companyAddressValue}
            isLink
            href={MAPS_URL}
            index={details.length}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PersonalDetails;
