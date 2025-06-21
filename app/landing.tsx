"use client";
import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Globe, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const LANGUAGES = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export default function Landing() {
  const [language, setLanguage] = useState("es");
  const router = useRouter();

  useEffect(() => {
    // Al cargar, intenta leer el idioma preferido de localStorage
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("preferredLanguage");
      if (storedLang && LANGUAGES.some(l => l.code === storedLang)) {
        setLanguage(storedLang);
      }
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lang);
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-300 via-sky-200 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full opacity-30">
          <circle cx="320" cy="80" r="120" fill="#7dd3fc" />
          <circle cx="80" cy="350" r="100" fill="#38bdf8" />
        </svg>
      </div>
      <main className="relative z-10 w-full max-w-md px-4 flex flex-col items-center justify-center">
        <div className="w-full rounded-3xl shadow-2xl bg-white/70 backdrop-blur-md border border-white/40 p-8 flex flex-col items-center gap-6 mt-8 mb-8">
          {/* Ilustración moderna */}
          <div className="w-full flex justify-center gap-0">
            {/* Carrito de compras */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M6 6h15l-1.5 9h-13z" fill="#7dd3fc" stroke="#38bdf8" strokeWidth="2"/><circle cx="9" cy="20" r="2" fill="#fbbf24"/><circle cx="17" cy="20" r="2" fill="#fbbf24"/></svg>
            {/* Pin de mapa */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" fill="#7dd3fc" stroke="#38bdf8" strokeWidth="2"/><circle cx="12" cy="11" r="2.5" fill="#fbbf24"/></svg>
            {/* Bolsa de compras */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="13" rx="3" fill="#f59e42"/><path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="#fbbf24" strokeWidth="2"/><circle cx="9" cy="12" r="1" fill="#7dd3fc"/><circle cx="15" cy="12" r="1" fill="#7dd3fc"/></svg>
          </div>
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center leading-tight drop-shadow-sm">
            {language === "es" && <>Descubre Barranco <br className="hidden md:block" /><span className="text-orange-500">Experiencias JDP</span></>}
            {language === "en" && <>Discover Barranco <br className="hidden md:block" /><span className="text-orange-500">JDP Experiences</span></>}
            {language === "pt" && <>Descubra Barranco <br className="hidden md:block" /><span className="text-orange-500">Experiências JDP</span></>}
            {language === "fr" && <>Découvrez Barranco <br className="hidden md:block" /><span className="text-orange-500">Expériences JDP</span></>}
          </h1>
          {/* Subtítulo */}
          <div className="flex flex-col items-center gap-1 mb-2 w-full justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" fill="#38bdf8"/><path d="M12 7v4" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/><path d="M12 11l-2 4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/><path d="M12 11l2 4" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/><path d="M12 9l-3 2" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/><path d="M12 9l3 2" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"/></svg>
            <p className="text-base md:text-lg text-gray-700 text-center max-w-xs mx-auto">
              {language === "es" && "Encuentra lo mejor cerca a tu alojamiento"}
              {language === "en" && "Find the best near your accommodation"}
              {language === "pt" && "Encontre o melhor perto da sua hospedagem"}
              {language === "fr" && "Découvrez le meilleur près de votre hébergement"}
            </p>
          </div>
          {/* Selector de idioma moderno */}
          <div className="flex items-center gap-2 mb-2 w-full justify-center">
            <Globe className="w-5 h-5 text-gray-500" />
            <select
              value={language}
              onChange={e => handleLanguageChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none bg-white/80 shadow-sm"
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.label}
                </option>
              ))}
            </select>
          </div>
          {/* Datos de contacto con íconos */}
          <div className="flex flex-col items-center gap-1 w-full mt-2">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Phone className="w-4 h-4 text-orange-500" />
              <span className="font-medium">+51 968866677</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Mail className="w-4 h-4 text-orange-500" />
              <span className="font-medium">Jessica.diaz.paredes@gmail.com</span>
            </div>
          </div>
          {/* Botón grande y animado */}
          <Button
            className="w-full mt-4 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg hover:from-orange-500 hover:to-amber-500 transition-all duration-200 active:scale-95"
            onClick={() => router.push("/main")}
          >
            {language === "es" && "Entrar"}
            {language === "en" && "Enter"}
            {language === "pt" && "Entrar"}
            {language === "fr" && "Entrer"}
          </Button>
        </div>
        {/* Footer pequeño para mobile */}
        <footer className="w-full text-center text-xs text-gray-400 mt-2 mb-4">
          &copy; {new Date().getFullYear()} Experiencias JDP
        </footer>
      </main>
    </div>
  );
} 