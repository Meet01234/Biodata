import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { Phone, MessageCircle, Mail, Globe } from "lucide-react";

const ContactDetails = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.phone,
      value: t.phoneValue,
      href: `tel:${t.phoneValue}`,
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: t.whatsapp,
      value: t.whatsappValue,
      href: `https://wa.me/919016514790`,
      external: true,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: t.email,
      value: t.emailValue,
      href: `mailto:${t.emailValue}`,
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: t.myWebsite,
      value: t.myWebsiteValue,
      href: "https://meetparmar.com/",
      external: true,
    },
  ];

  return (
    <SectionWrapper id="contact" title={t.contactDetails}>
      <div className="glass-card p-6 md:p-8 space-y-4">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <div className="text-primary transition-transform duration-500 group-hover:rotate-[360deg]">
                {c.icon}
              </div>
            </div>
            <div>
              <p className="text-xs font-body font-bold text-muted-foreground uppercase tracking-wider">{c.label}</p>
              <p className="text-base font-body font-bold text-foreground">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ContactDetails;
