import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="glass-card p-2.5 transition-all duration-1000 hover:gold-glow"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-primary" />}
    </button>
  );
};

export default ThemeToggle;
