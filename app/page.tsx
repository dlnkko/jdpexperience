"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  MapPin,
  Utensils,
  Theater,
  Building2,
  ShoppingBag,
  Globe,
  Wine,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { motion, useAnimation, PanInfo } from "framer-motion"
import { isMobile } from 'react-device-detect'

interface Place {
  id: number
  name: string
  description: { [key: string]: string }
  address: string
  image: string
}

interface Section {
  id: string
  title: { [key: string]: string }
  icon: React.ReactNode
  emoji: string
  places: Place[]
}

interface Translations {
  [key: string]: {
    welcome: string
    subtitle: string
    greeting: string
    enjoyStay: string
    recommendedPlaces: string
    howToGet: string
    thanks: string
    greatStay: string
    needHelp: string
    contactUs: string
    food: string
    entertainment: string
    museums: string
    shops: string
    nightlife: string
    experiences: string
    stelar: string
    atelier: string
    currentLocation: string
  }
}

const translations: Translations = {
  es: {
    welcome: "Bienvenido a Experiencas JDP 🇵🇪",
    subtitle: "Explora lo mejor de Lima desde tu alojamiento",
    greeting: "Hola",
    enjoyStay: "esperamos que disfrutes tu estadía",
    recommendedPlaces: "lugares recomendados",
    howToGet: "¿Cómo llegar?",
    thanks: "¡Gracias por elegir nuestro Airbnb!",
    greatStay: "Esperamos que tengas una estadía increíble en Barranco",
    needHelp: "¿Necesitas ayuda? ¡Contáctanos!",
    contactUs: "Contáctanos",
    food: "Comida",
    entertainment: "Entretenimiento",
    museums: "Museos",
    shops: "Tiendas",
    nightlife: "Noche",
    experiences: "Experiencias",
    stelar: "Stelar",
    atelier: "Atelier",
    currentLocation: "Ubicación actual"
  },
  en: {
    welcome: "Welcome to JDP Experiences 🇵🇪",
    subtitle: "Explore the best of Lima from your accommodation",
    greeting: "Hello",
    enjoyStay: "we hope you enjoy your stay",
    recommendedPlaces: "recommended places",
    howToGet: "How to get there?",
    thanks: "Thank you for choosing our Airbnb!",
    greatStay: "We hope you have an amazing stay in Barranco",
    needHelp: "Need help? Contact us!",
    contactUs: "Contact us",
    food: "Food",
    entertainment: "Entertainment",
    museums: "Museums",
    shops: "Shops",
    nightlife: "Night Life",
    experiences: "Experiences",
    stelar: "Stelar",
    atelier: "Atelier",
    currentLocation: "Current Location"
  },
  pt: {
    welcome: "Bem-vindo ao Barranco 🇵🇪",
    subtitle: "Explore o melhor de Lima da sua acomodação",
    greeting: "Olá",
    enjoyStay: "esperamos que aproveite sua estadia",
    recommendedPlaces: "lugares recomendados",
    howToGet: "Como chegar?",
    thanks: "Obrigado por escolher nosso Airbnb!",
    greatStay: "Esperamos que tenha uma estadia incrível em Barranco",
    needHelp: "Precisa de ajuda? Entre em contato!",
    contactUs: "Entre em contato",
    food: "Comida",
    entertainment: "Entretenimento",
    museums: "Museus",
    shops: "Lojas",
    nightlife: "Noite",
    experiences: "Experiências",
    stelar: "Stelar",
    atelier: "Atelier",
    currentLocation: "Localização atual"
  },
  fr: {
    welcome: "Bienvenue à Barranco 🇵🇪",
    subtitle: "Explorez le meilleur de Lima depuis votre logement",
    greeting: "Bonjour",
    enjoyStay: "nous espérons que vous apprécierez votre séjour",
    recommendedPlaces: "lieux recommandés",
    howToGet: "Comment s'y rendre?",
    thanks: "Merci d'avoir choisi notre Airbnb!",
    greatStay: "Nous espérons que vous passerez un séjour incroyable à Barranco",
    needHelp: "Besoin d'aide? Contactez-nous!",
    contactUs: "Contactez-nous",
    food: "Nourriture",
    entertainment: "Divertissement",
    museums: "Musées",
    shops: "Boutiques",
    nightlife: "Nuit",
    experiences: "Expériences",
    stelar: "Stelar",
    atelier: "Atelier",
    currentLocation: "Emplacement actuel"
  },
}

const sections: Section[] = [
  {
    id: "comida",
    title: {
      es: "Comida",
      en: "Food",
      pt: "Comida",
      fr: "Nourriture",
    },
    icon: <Utensils className="w-6 h-6" />,
    emoji: "🍽️",
    places: [
      {
        id: 1,
        name: "Central Restaurante",
        description: {
          es: "Cocina peruana contemporánea de clase mundial",
          en: "World-class contemporary Peruvian cuisine",
          pt: "Culinária peruana contemporânea de classe mundial",
          fr: "Cuisine péruvienne contemporaine de classe mondiale",
        },
        address: "Av. Pedro de Osma 301, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        name: "La Canta Rana",
        description: {
          es: "Bar tradicional con ambiente bohemio y pisco sours",
          en: "Traditional bar with bohemian atmosphere and pisco sours",
          pt: "Bar tradicional com ambiente boêmio e pisco sours",
          fr: "Bar traditionnel avec ambiance bohème et pisco sours",
        },
        address: "Av. Grau 270, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        name: "Isolina Taberna Peruana",
        description: {
          es: "Cocina criolla tradicional en ambiente acogedor",
          en: "Traditional creole cuisine in cozy atmosphere",
          pt: "Culinária criolla tradicional em ambiente acolhedor",
          fr: "Cuisine créole traditionnelle dans une atmosphère chaleureuse",
        },
        address: "Av. San Martín 101, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 4,
        name: "Cala",
        description: {
          es: "Mariscos frescos con vista al mar",
          en: "Fresh seafood with ocean view",
          pt: "Frutos do mar frescos com vista para o mar",
          fr: "Fruits de mer frais avec vue sur l'océan",
        },
        address: "Bajada de Baños 340, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        name: "Barranco Beer Company",
        description: {
          es: "Cervecería artesanal con ambiente relajado",
          en: "Craft brewery with relaxed atmosphere",
          pt: "Cervejaria artesanal com ambiente descontraído",
          fr: "Brasserie artisanale avec ambiance détendue",
        },
        address: "Av. Grau 308, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "nightlife",
    title: {
      es: "Noche",
      en: "Night Life",
      pt: "Noite",
      fr: "Nuit",
    },
    icon: <Wine className="w-6 h-6" />,
    emoji: "🍸",
    places: [
      {
        id: 6,
        name: "Ayahuasca Restobar",
        description: {
          es: "Bar en una casona republicana con cócteles innovadores",
          en: "Bar in a republican mansion with innovative cocktails",
          pt: "Bar em uma mansão republicana com coquetéis inovadores",
          fr: "Bar dans un manoir républicain avec des cocktails innovants",
        },
        address: "Av. San Martín 130, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 7,
        name: "Sargento Pimienta",
        description: {
          es: "Bar con música en vivo y ambiente rockero",
          en: "Bar with live music and rock atmosphere",
          pt: "Bar com música ao vivo e ambiente de rock",
          fr: "Bar avec musique live et ambiance rock",
        },
        address: "Av. Bolognesi 757, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 8,
        name: "Dragón",
        description: {
          es: "Discoteca con música electrónica y ambiente moderno",
          en: "Nightclub with electronic music and modern atmosphere",
          pt: "Boate com música eletrônica e ambiente moderno",
          fr: "Boîte de nuit avec musique électronique et ambiance moderne",
        },
        address: "Av. República de Panamá 170, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 9,
        name: "La Noche de Barranco",
        description: {
          es: "Centro de entretenimiento nocturno con música en vivo",
          en: "Nightlife entertainment center with live music",
          pt: "Centro de entretenimento noturno com música ao vivo",
          fr: "Centre de divertissement nocturne avec musique live",
        },
        address: "Av. Bolognesi 307, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 10,
        name: "Picas Bar",
        description: {
          es: "Bar con ambiente bohemio y cócteles artesanales",
          en: "Bar with bohemian atmosphere and craft cocktails",
          pt: "Bar com ambiente boêmio e coquetéis artesanais",
          fr: "Bar avec ambiance bohème et cocktails artisanaux",
        },
        address: "Av. Grau 340, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "entretenimiento",
    title: {
      es: "Entretenimiento",
      en: "Entertainment",
      pt: "Entretenimento",
      fr: "Divertissement",
    },
    icon: <Theater className="w-6 h-6" />,
    emoji: "🎭",
    places: [
      {
        id: 11,
        name: "Teatro Británico",
        description: {
          es: "Teatro histórico con obras y espectáculos",
          en: "Historic theater with plays and shows",
          pt: "Teatro histórico com peças e espetáculos",
          fr: "Théâtre historique avec pièces et spectacles",
        },
        address: "Av. Bellavista 527, Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 12,
        name: "Cine Barranco",
        description: {
          es: "Cine independiente con películas de arte y ensayo",
          en: "Independent cinema with art and essay films",
          pt: "Cinema independente com filmes de arte e ensaio",
          fr: "Cinéma indépendant avec films d'art et d'essai",
        },
        address: "Av. Pedro de Osma 135, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 13,
        name: "Teatro Municipal de Lima",
        description: {
          es: "Teatro principal de la ciudad con espectáculos de primer nivel",
          en: "Main city theater with first-class shows",
          pt: "Teatro principal da cidade com espetáculos de primeira classe",
          fr: "Théâtre principal de la ville avec spectacles de première classe",
        },
        address: "Jr. Ica 377, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 14,
        name: "Centro Cultural PUCP",
        description: {
          es: "Centro cultural con cine, teatro y exposiciones",
          en: "Cultural center with cinema, theater and exhibitions",
          pt: "Centro cultural com cinema, teatro e exposições",
          fr: "Centre culturel avec cinéma, théâtre et expositions",
        },
        address: "Av. Camino Real 1075, San Isidro, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 15,
        name: "Microteatro Lima",
        description: {
          es: "Obras cortas en espacios pequeños e íntimos",
          en: "Short plays in small and intimate spaces",
          pt: "Peças curtas em espaços pequenos e íntimos",
          fr: "Pièces courtes dans des espaces petits et intimes",
        },
        address: "Av. Grau 265, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "experiences",
    title: {
      es: "Experiencias",
      en: "Experiences",
      pt: "Experiências",
      fr: "Expériences",
    },
    icon: <Sparkles className="w-6 h-6" />,
    emoji: "✨",
    places: [
      {
        id: 16,
        name: "Puente de los Suspiros",
        description: {
          es: "Icónico puente romántico con vista al mar",
          en: "Iconic romantic bridge with ocean view",
          pt: "Ponte romântica icônica com vista para o mar",
          fr: "Pont romantique emblématique avec vue sur l'océan",
        },
        address: "Bajada de Baños, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 17,
        name: "Circuito Mágico del Agua",
        description: {
          es: "Parque de fuentes de agua con espectáculo de luces",
          en: "Water fountain park with light show",
          pt: "Parque de fontes de água com show de luzes",
          fr: "Parc de fontaines d'eau avec spectacle de lumières",
        },
        address: "Jr. Madre de Dios S/N, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 18,
        name: "Clases de Cocina Peruana",
        description: {
          es: "Aprende a preparar platos típicos peruanos",
          en: "Learn to prepare typical Peruvian dishes",
          pt: "Aprenda a preparar pratos típicos peruanos",
          fr: "Apprenez à préparer des plats typiques péruviens",
        },
        address: "Av. Pedro de Osma 301, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 19,
        name: "Tour en Bicicleta por Barranco",
        description: {
          es: "Recorre el distrito en bicicleta con guía local",
          en: "Tour the district by bicycle with a local guide",
          pt: "Percorra o distrito de bicicleta com guia local",
          fr: "Visitez le quartier à vélo avec un guide local",
        },
        address: "Plaza Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 20,
        name: "Malecón de Barranco",
        description: {
          es: "Paseo costero perfecto para caminar y relajarse",
          en: "Perfect coastal walk for strolling and relaxing",
          pt: "Passeio costeiro perfeito para caminhar e relaxar",
          fr: "Promenade côtière parfaite pour se promener et se détendre",
        },
        address: "Malecón Paul Harris, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "museos",
    title: {
      es: "Museos",
      en: "Museums",
      pt: "Museus",
      fr: "Musées",
    },
    icon: <Building2 className="w-6 h-6" />,
    emoji: "🖼️",
    places: [
      {
        id: 21,
        name: "MATE - Museo Mario Testino",
        description: {
          es: "Fotografía contemporánea del reconocido fotógrafo",
          en: "Contemporary photography by renowned photographer",
          pt: "Fotografia contemporânea do renomado fotógrafo",
          fr: "Photographie contemporaine du photographe renommé",
        },
        address: "Av. Pedro de Osma 409, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 22,
        name: "Museo Pedro de Osma",
        description: {
          es: "Arte colonial y republicano peruano",
          en: "Peruvian colonial and republican art",
          pt: "Arte colonial e republicana peruana",
          fr: "Art colonial et républicain péruvien",
        },
        address: "Av. Pedro de Osma 421, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 23,
        name: "MAC Lima",
        description: {
          es: "Museo de Arte Contemporáneo",
          en: "Contemporary Art Museum",
          pt: "Museu de Arte Contemporânea",
          fr: "Musée d'Art Contemporain",
        },
        address: "Av. Miguel Grau 1511, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 24,
        name: "Museo de la Electricidad",
        description: {
          es: "Historia de la electricidad en el Perú",
          en: "History of electricity in Peru",
          pt: "História da eletricidade no Peru",
          fr: "Histoire de l'électricité au Pérou",
        },
        address: "Av. Pedro de Osma 105, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 25,
        name: "Casa Museo Ricardo Palma",
        description: {
          es: "Casa del escritor de las Tradiciones Peruanas",
          en: "House of the writer of Peruvian Traditions",
          pt: "Casa do escritor das Tradições Peruanas",
          fr: "Maison de l'écrivain des Traditions Péruviennes",
        },
        address: "Av. General Suárez 189, Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "tiendas",
    title: {
      es: "Tiendas",
      en: "Shops",
      pt: "Lojas",
      fr: "Boutiques",
    },
    icon: <ShoppingBag className="w-6 h-6" />,
    emoji: "🛍️",
    places: [
      {
        id: 26,
        name: "Las Pallas",
        description: {
          es: "Artesanías peruanas de alta calidad",
          en: "High-quality Peruvian handicrafts",
          pt: "Artesanato peruano de alta qualidade",
          fr: "Artisanat péruvien de haute qualité",
        },
        address: "Av. Cajamarca 212, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 27,
        name: "Mercado de Barranco",
        description: {
          es: "Mercado local con productos frescos y artesanías",
          en: "Local market with fresh products and handicrafts",
          pt: "Mercado local com produtos frescos e artesanato",
          fr: "Marché local avec produits frais et artisanat",
        },
        address: "Av. Grau 303, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 28,
        name: "Taller de Cerámica",
        description: {
          es: "Cerámica artesanal y talleres",
          en: "Artisanal ceramics and workshops",
          pt: "Cerâmica artesanal e oficinas",
          fr: "Céramique artisanale et ateliers",
        },
        address: "Av. Pedro de Osma 116, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 29,
        name: "Alpaca 111",
        description: {
          es: "Productos de alpaca y textiles peruanos",
          en: "Alpaca products and Peruvian textiles",
          pt: "Produtos de alpaca e têxteis peruanos",
          fr: "Produits d'alpaga et textiles péruviens",
        },
        address: "Av. Larco 671, Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 30,
        name: "Centro Comercial Larcomar",
        description: {
          es: "Centro comercial con vista al océano",
          en: "Shopping center with ocean view",
          pt: "Centro comercial com vista para o oceano",
          fr: "Centre commercial avec vue sur l'océan",
        },
        address: "Malecón de la Reserva 610, Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
]

export default function BarrancoGuide() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [guestName, setGuestName] = useState<string>("")
  const [language, setLanguage] = useState<string>("es")

  const detectLanguage = () => {
    if (typeof window === "undefined") return "es"

    const browserLang = navigator.language || navigator.languages?.[0] || "es"
    const langCode = browserLang.split("-")[0].toLowerCase()

    // Verificar si el idioma está soportado, sino usar español por defecto
    if (translations[langCode]) {
      return langCode
    }
    return "es"
  }

  useEffect(() => {
    // Detectar idioma automáticamente
    const detectedLang = detectLanguage()
    setLanguage(detectedLang)

    // Simular obtener el nombre del huésped
    const name =
      localStorage.getItem("guestName") ||
      (detectedLang === "es"
        ? "Estimado huésped"
        : detectedLang === "en"
          ? "Dear guest"
          : detectedLang === "pt"
            ? "Caro hóspede"
            : "Cher invité")
    setGuestName(name)
  }, [])

  const t = translations[language] || translations.es

  const handleGetDirections = async (address: string, placeName: string, originAddress?: string) => {
    const isMobileDevice = typeof window !== 'undefined' && 
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        (window.navigator as any).userAgent || ''
      )

    const isAndroid = typeof window !== 'undefined' && 
      /Android/i.test((window.navigator as any).userAgent || '')

    const destination = encodeURIComponent(address)

    if (originAddress) {
      // Si hay una dirección de origen específica
      const origin = encodeURIComponent(originAddress)
      
      if (isMobileDevice) {
        let mapsUrl = ''
        
        if (isAndroid) {
          // Para Android usar el esquema de URL nativo
          mapsUrl = `google.navigation:q=${destination}`
          const appWindow = window.open(mapsUrl, '_blank')
          
          setTimeout(() => {
            if (appWindow) {
              appWindow.close()
            }
            window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
          }, 1000)
        } else {
          // Para iOS y otros dispositivos, usar directamente Google Maps web
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
            // Para Android usar el esquema de URL nativo
            const mapsUrl = `google.navigation:q=${destination}`
            const appWindow = window.open(mapsUrl, '_blank')
            
            setTimeout(() => {
              if (appWindow) {
                appWindow.close()
              }
              window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
            }, 1000)
          } else {
            // Para iOS y otros dispositivos, usar directamente Google Maps web
            window.location.href = `https://www.google.com/maps/dir/${origin}/${destination}`
          }
        } else {
          window.open(`https://www.google.com/maps/dir/${origin}/${destination}`, '_blank')
        }
      } catch (error) {
        // Si no se puede obtener la ubicación
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
      // Fallback si no hay geolocalización
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

  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  if (selectedSection && currentSection) {
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      // Si el usuario desliza más de 100px hacia la derecha, volver a la página principal
      if (info.offset.x > 100) {
        setSelectedSection(null)
      }
    }

    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 p-4"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        dragElastic={0.2}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSection(null)}
                className="p-2 hover:bg-orange-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                {currentSection.icon}
                <h1 className="text-2xl font-bold text-gray-800">
                  {currentSection.emoji} {currentSection.title[language]}
                </h1>
              </motion.div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-gray-500" />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="text-xs bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="es">🇪🇸</option>
                <option value="en">🇺🇸</option>
                <option value="pt">🇧🇷</option>
                <option value="fr">🇫🇷</option>
              </select>
            </div>
          </div>

          <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
            {currentSection.places.map((place) => (
              <motion.div key={place.id} variants={item}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{place.name}</CardTitle>
                    <CardDescription className="text-sm">{place.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-600">{place.address}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        onClick={() => handleGetDirections(place.address, place.name, "Calle Almirante Miguel Grau 1430, Barranco")}
                        className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-xl active:shadow-md"
                        size="sm"
                      >
                        {t.stelar}
                      </Button>
                      <Button
                        onClick={() => handleGetDirections(place.address, place.name, "Jiron Centenario 179, Barranco")}
                        className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-xl active:shadow-md"
                        size="sm"
                      >
                        {t.atelier}
                      </Button>
                      <Button
                        onClick={() => handleGetDirections(place.address, place.name)}
                        className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-xl active:shadow-md"
                        size="sm"
                      >
                        {t.currentLocation}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-4xl font-bold text-gray-800 flex-2 px-4 tracking-wide leading-tight text-center mb-4">{t.welcome}</h1>
            
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-gray-500" />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="text-sm bg-transparent border border-gray-300 rounded px-2 py-1 outline-none cursor-pointer"
              >
                <option value="es">🇪🇸 ES</option>
                <option value="en">🇺🇸 EN</option>
                <option value="pt">🇧🇷 PT</option>
                <option value="fr">🇫🇷 FR</option>
              </select>
            </div>
          </div>

          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>

          {guestName && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                {t.greeting} {guestName}, {t.enjoyStay}
              </Badge>
            </motion.div>
          )}
        </motion.div>

        {/* Sections Grid */}
        <motion.div className="grid grid-cols-2 gap-4 mb-8" variants={container} initial="hidden" animate="show">
          {sections.map((section, index) => (
            <motion.div key={section.id} variants={item}>
              <Card
                className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 border-orange-100 shadow-lg"
                onClick={() => setSelectedSection(section.id)}
              >
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="text-4xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {section.emoji}
                  </motion.div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                      {section.icon}
                    </motion.div>
                    <h3 className="font-semibold text-gray-800">{section.title[language]}</h3>
                  </div>
                  <p className="text-xs text-gray-500">
                    {section.places.length} {t.recommendedPlaces}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="bg-orange-100 border-orange-200 shadow-xl">
            <CardContent className="p-4 text-center">
              <h4 className="font-semibold text-orange-800 mb-2">{t.thanks}</h4>
              <p className="text-sm text-orange-700 mb-3">{t.greatStay}</p>
              <div className="text-xs text-orange-600">
                <p>📱 WhatsApp: +51 968 866 677</p>
                <p>📧 host@barrancoairbnb.com</p>
                <p className="mt-2 font-medium">{t.needHelp}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
