"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { isMobile } from 'react-device-detect'
import { PlaceCard } from "@/components/ui/PlaceCard"
import { SectionCard } from "@/components/sections/SectionCard"
import { FoodCategoryCard } from "@/components/ui/FoodCategoryCard"
import { SubcategoryCard } from "@/components/ui/SubcategoryCard"
import { sections } from "@/lib/sections"
import { translations } from "@/lib/translations"

export default function BarrancoGuide() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [guestName, setGuestName] = useState<string>("")
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("preferredLanguage");
      if (storedLang) return storedLang;
    }
    return "es";
  });

  const handleSectionChange = (sectionId: string | null) => {
    setSelectedSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const detectLanguage = () => {
    if (typeof window === "undefined") return "es"
    const browserLang = navigator.language || navigator.languages?.[0] || "es"
    const langCode = browserLang.split("-")[0].toLowerCase()
    return translations[langCode] ? langCode : "es"
  }

  useEffect(() => {
    const storedLang = typeof window !== "undefined" ? localStorage.getItem("preferredLanguage") : null;
    let langToUse = language;
    if (storedLang && storedLang !== language) {
      langToUse = storedLang;
      setLanguage(storedLang);
    }
    const name = localStorage.getItem("guestName") || 
      (langToUse === "es" ? "Estimado huésped" :
       langToUse === "en" ? "Dear guest" :
       langToUse === "pt" ? "Caro hóspede" : "Cher invité")
    setGuestName(name)
  }, [])

  const handleGetDirections = async (address: string, placeName: string, originAddress?: string) => {
    const isMobileDevice = typeof window !== 'undefined' && 
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        (window.navigator as any).userAgent || ''
      )

    const isAndroid = typeof window !== 'undefined' && 
      /Android/i.test((window.navigator as any).userAgent || '')

    const destination = encodeURIComponent(address)

    if (originAddress) {
      const origin = encodeURIComponent(originAddress)
      
      if (isMobileDevice) {
        if (isAndroid) {
          const mapsUrl = `google.navigation:q=${destination}`
          const appWindow = window.open(mapsUrl, '_blank')
          
          setTimeout(() => {
            if (appWindow) {
              appWindow.close()
            }
            window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
          }, 1000)
        } else {
          window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
        }
      } else {
        window.open(`https://www.google.com/maps/dir/${origin}/${destination}`, '_blank')
      }
    } else if ("geolocation" in navigator) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        })

        const { latitude, longitude } = position.coords
        const origin = `${latitude},${longitude}`

        if (isMobileDevice) {
          if (isAndroid) {
            const mapsUrl = `google.navigation:q=${destination}`
            const appWindow = window.open(mapsUrl, '_blank')
            
            setTimeout(() => {
              if (appWindow) {
                appWindow.close()
              }
              window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
            }, 1000)
          } else {
            window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
          }
        } else {
          window.open(`https://www.google.com/maps/dir/${origin}/${destination}`, '_blank')
        }
      } catch (error) {
        if (isMobileDevice) {
          if (isAndroid) {
            const mapsUrl = `google.navigation:q=${destination}`
            const appWindow = window.open(mapsUrl, '_blank')
            
            setTimeout(() => {
              if (appWindow) {
                appWindow.close()
              }
              window.location.href = `https://www.google.com/maps/search/${destination}`
            }, 1000)
          } else {
            window.location.href = `https://www.google.com/maps/search/${destination}`
          }
        } else {
          window.open(`https://www.google.com/maps/search/${destination}`, '_blank')
        }
      }
    } else {
      if (isMobileDevice) {
        if (isAndroid) {
          const mapsUrl = `google.navigation:q=${destination}`
          const appWindow = window.open(mapsUrl, '_blank')
          
          setTimeout(() => {
            if (appWindow) {
              appWindow.close()
            }
            window.location.href = `https://www.google.com/maps/search/${destination}`
          }, 1000)
        } else {
          window.location.href = `https://www.google.com/maps/search/${destination}`
        }
      } else {
        window.open(`https://www.google.com/maps/search/${destination}`, '_blank')
      }
    }
  }

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang)
    localStorage.setItem("preferredLanguage", newLang)
  }

  const currentSection = sections.find((s) => s.id === selectedSection)
  const t = translations[language]

  if (selectedSection && currentSection) {
    if (selectedCategory) {
      const category = currentSection.places.find(p => p.name[language] === selectedCategory)
      if (!category) return null

      return (
        <motion.div 
          className="min-h-screen bg-gradient-to-br from-cyan-300 via-sky-200 to-blue-100 p-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) {
              setSelectedSection(null)
              setSelectedCategory(null)
            }
          }}
          dragElastic={0.1}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 25,
            mass: 0.8
          }}
        >
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 hover:bg-orange-100 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  {currentSection.icon}
                  <h1 className="text-2xl font-bold text-gray-800">
                    {category.name[language]}
                  </h1>
                </motion.div>
              </div>

              <div className="flex items-center gap-1">
                <span className="flex items-center justify-center border-2 border-black rounded-md p-1 bg-white">
                  <Globe className="w-4 h-4 text-black stroke-2" style={{ filter: 'drop-shadow(0 0 1px #000)' }} />
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="text-sm bg-transparent border-none outline-none cursor-pointer font-bold ml-1"
                  >
                    <option value="es">🇪🇸 ES</option>
                    <option value="en">🇺🇸 EN</option>
                    <option value="pt">🇧🇷 PT</option>
                    <option value="fr">🇫🇷 FR</option>
                  </select>
                </span>
              </div>
            </div>

            <motion.div className="space-y-4" variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                },
              },
            }} initial="hidden" animate="show">
              {category.subcategories?.map((place, index) => {
                const enhancedPlace = {
                  ...place,
                  id: (place as any).id ?? index,
                  image: (place as any).image || "/placeholder.svg?height=200&width=300"
                };
                return (
                  <PlaceCard
                    key={index}
                    place={enhancedPlace}
                    language={language}
                    translations={t}
                    onGetDirections={handleGetDirections}
                  />
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )
    }

    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-cyan-300 via-sky-200 to-blue-100 p-4"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            setSelectedSection(null)
            setSelectedCategory(null)
          }
        }}
        dragElastic={0.1}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25,
          mass: 0.8
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSectionChange(null)}
                className="p-2 hover:bg-orange-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {currentSection.icon}
                <h1 className="text-2xl font-bold text-gray-800">
                  {currentSection.emoji} {currentSection.title[language]}
                </h1>
              </motion.div>
            </div>

            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center border-2 border-black rounded-md p-1 bg-white">
                <Globe className="w-5 h-5 text-black stroke-2" style={{ filter: 'drop-shadow(0 0 1px #000)' }} />
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="text-xs bg-transparent border-none outline-none cursor-pointer font-bold ml-1"
                >
                  <option value="es">🇪🇸</option>
                  <option value="en">🇺🇸</option>
                  <option value="pt">🇧🇷</option>
                  <option value="fr">🇫🇷</option>
                </select>
              </span>
            </div>
          </div>

          <motion.div className="space-y-4" variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
              },
            },
          }} initial="hidden" animate="show">
            {currentSection.places.map((place) => (
              currentSection.id === "comida" ? (
                <FoodCategoryCard
                  key={place.id}
                  place={place}
                  language={language}
                  translations={t}
                  onClick={() => setSelectedCategory(place.name[language])}
                />
              ) : (
                <SubcategoryCard
                  key={place.id}
                  place={place}
                  language={language}
                  onClick={() => setSelectedCategory(place.name[language])}
                />
              )
            ))}
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 via-sky-200 to-blue-100 p-4">
      <div className="max-w-md mx-auto">
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/80 border border-gray-200 rounded-2xl shadow-lg px-5 py-4 w-full max-w-lg flex flex-col items-center">
            <span className="text-3xl mb-2">👋</span>
            <h2 className="text-xl font-extrabold text-orange-600 mb-1 text-center">
              ¡Bienvenidos a Barranco & Miraflores!
            </h2>
            <p className="text-gray-700 text-sm text-center">
              Descubre la mejor gastronomía, rincones únicos y las mejores opciones de shopping. <br />
              <span className="font-semibold text-orange-500">¡Disfruta tu estadía!</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 gap-4 mb-8" 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
              },
            },
          }} 
          initial="hidden" 
          animate="show"
        >
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              language={language}
              onClick={() => handleSectionChange(section.id)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
} 