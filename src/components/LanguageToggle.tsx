import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="glass-card flex overflow-hidden text-sm font-body font-bold">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-2 transition-all duration-300 ${
          lang === "en" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => setLang("gu")}
        className={`px-3 py-2 transition-all duration-300 ${
          lang === "gu" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        🇮🇳 ગુજ
      </button>
    </div>
  );
};

export default LanguageToggle;
