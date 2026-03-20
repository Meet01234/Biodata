import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "@/data/translations";

type TranslationMap = (typeof translations)[Language];

type LanguageContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationMap;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
};
