import { Utensils, Theater, Building2, ShoppingBag, Wine, Sparkles } from "lucide-react"
import type { Section } from "./types"
import { foodSubcategories } from "./foodSubcategories"
import entretenimientoData from '../app/api/google-maps/data/entretenimiento.json';
import tiendasData from '../app/api/google-maps/data/tiendas.json';
import shoppingData from '../app/api/google-maps/data/shopping.json';
import experienciasData from '../app/api/google-maps/data/experiencias.json';
import nightData from '../app/api/google-maps/data/night.json';

export const sections: Section[] = [
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
        name: {
          es: "Carnes y Parrilla",
          en: "Meats & Grill",
          pt: "Carnes e Grelhados",
          fr: "Viandes et Grillades"
        },
        description: {
          es: "Los mejores cortes y parrillas de Barranco y Miraflores",
          en: "The best cuts and grills in Barranco and Miraflores",
          pt: "Os melhores cortes e grelhados de Barranco e Miraflores",
          fr: "Les meilleures coupes et grillades de Barranco et Miraflores"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🥩",
        subcategories: foodSubcategories["carnes-y-parrilla"]
      },
      {
        id: 2,
        name: {
          es: "Comida Criolla",
          en: "Creole Food",
          pt: "Comida Crioula",
          fr: "Cuisine Créole"
        },
        description: {
          es: "Platos tradicionales peruanos con sabores auténticos",
          en: "Traditional Peruvian dishes with authentic flavors",
          pt: "Pratos tradicionais peruanos com sabores autênticos",
          fr: "Plats traditionnels péruviens avec des saveurs authentiques"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🍽️",
        subcategories: foodSubcategories["comida-criolla"]
      },
      {
        id: 3,
        name: {
          es: "Desayunos y Postres",
          en: "Breakfasts & Desserts",
          pt: "Cafés da Manhã e Sobremesas",
          fr: "Petits-déjeuners et Desserts"
        },
        description: {
          es: "Los mejores cafés y pastelerías para empezar el día",
          en: "The best cafés and pastry shops to start the day",
          pt: "Os melhores cafés e confeitarias para começar o dia",
          fr: "Les meilleurs cafés et pâtisseries pour commencer la journée"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
        emoji: "☕",
        subcategories: foodSubcategories["desayunos-y-postres"]
      },
      {
        id: 4,
        name: {
          es: "Comida China e Internacional",
          en: "Chinese & International Food",
          pt: "Comida Chinesa e Internacional",
          fr: "Cuisine Chinoise et Internationale"
        },
        description: {
          es: "Chifas y restaurantes internacionales de alta calidad",
          en: "High-quality chifas and international restaurants",
          pt: "Chifas e restaurantes internacionais de alta qualidade",
          fr: "Chifas et restaurants internationaux de haute qualité"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🥢",
        subcategories: foodSubcategories["comida-china-e-internacional"]
      },
      {
        id: 5,
        name: {
          es: "Comida Rápida",
          en: "Fast Food",
          pt: "Comida Rápida",
          fr: "Restauration Rapide"
        },
        description: {
          es: "Opciones rápidas y deliciosas para comer sobre la marcha",
          en: "Quick and delicious options for eating on the go",
          pt: "Opções rápidas e deliciosas para comer na correria",
          fr: "Options rapides et délicieuses pour manger sur le pouce"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🍔",
        subcategories: foodSubcategories["comida-rapida"]
      }
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
    emoji: "🎥",
    places: [
      {
        id: 1,
        name: { es: "Cultura y Arte", en: "Culture & Art", pt: "Cultura e Arte", fr: "Culture et Art" },
        description: { es: "...", en: "...", pt: "...", fr: "..." },
        address: "Barranco y Miraflores, Lima",
        image: "/images/entretenimiento/mate.jpg",
        emoji: "🎨",
        subcategories: entretenimientoData.cultura_y_arte[0]
      },
      {
        id: 2,
        name: { es: "Historial Urbano", en: "Urban History", pt: "História Urbana", fr: "Histoire Urbaine" },
        description: { es: "...", en: "...", pt: "...", fr: "..." },
        address: "Barranco y Miraflores, Lima",
        image: "/images/entretenimiento/suspiros.jpg",
        emoji: "🏙️",
        subcategories: entretenimientoData.historial_urbano
      },
      {
        id: 3,
        name: { es: "Música, Cine y Teatro", en: "Music, Cinema & Theater", pt: "Música, Cinema e Teatro", fr: "Musique, Cinéma et Théâtre" },
        description: { es: "...", en: "...", pt: "...", fr: "..." },
        address: "Barranco y Miraflores, Lima",
        image: "/images/entretenimiento/cine.jpg",
        emoji: "🎭",
        subcategories: entretenimientoData.musica_cine_teatro
      }
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
        id: 3002,
        name: {
          es: "Caminata",
          en: "Walks",
          pt: "Caminhadas",
          fr: "Promenades"
        },
        description: {
          es: "Los mejores paseos y malecones para caminar",
          en: "The best walks and boardwalks",
          pt: "Os melhores passeios e calçadões",
          fr: "Les meilleures promenades et quais"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/images/experiencias/caminata.jpg",
        emoji: "🚶",
        subcategories: experienciasData.caminatas
      },
      {
        id: 3003,
        name: {
          es: "Turismo",
          en: "Tourism",
          pt: "Turismo",
          fr: "Tourisme"
        },
        description: {
          es: "Lugares turísticos y plazas principales",
          en: "Tourist spots and main squares",
          pt: "Pontos turísticos e praças principais",
          fr: "Sites touristiques et places principales"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/images/experiencias/turismo.jpg",
        emoji: "🗺️",
        subcategories: experienciasData.turismo
      }
    ],
  },
  {
    id: "abarrotes",
    title: {
      es: "Abarrotes",
      en: "Groceries",
      pt: "Abarrotes",
      fr: "Abarrotes"
    },
    icon: <ShoppingBag className="w-6 h-6" />,
    emoji: "🛒",
    places: [
      {
        id: 1001,
        name: {
          es: "Supermercados",
          en: "Supermarkets",
          pt: "Supermercados",
          fr: "Supermarchés"
        },
        description: {
          es: "Los mejores supermercados de Miraflores y Barranco",
          en: "The best supermarkets in Miraflores and Barranco",
          pt: "Os melhores supermercados de Miraflores e Barranco",
          fr: "Les meilleurs supermarchés de Miraflores et Barranco"
        },
        address: "Miraflores y Barranco, Lima",
        image: "/images/abarrotes/wong.jpg",
        emoji: "🛒",
        subcategories: tiendasData.supermercados
      },
      {
        id: 1002,
        name: {
          es: "Panaderías",
          en: "Bakeries",
          pt: "Padarias",
          fr: "Boulangeries"
        },
        description: {
          es: "Las panaderías más tradicionales y deliciosas",
          en: "The most traditional and delicious bakeries",
          pt: "As padarias mais tradicionais e deliciosas",
          fr: "Les boulangeries les plus traditionnelles et délicieuses"
        },
        address: "Miraflores y Barranco, Lima",
        image: "/images/abarrotes/pan.jpg",
        emoji: "🍞",
        subcategories: tiendasData.bodegas_y_panaderias
      },
      {
        id: 1003,
        name: {
          es: "Mercados",
          en: "Markets",
          pt: "Mercados",
          fr: "Marchés"
        },
        description: {
          es: "Mercados con productos frescos y locales",
          en: "Markets with fresh and local products",
          pt: "Mercados com produtos frescos e locais",
          fr: "Marchés avec des produits frais et locaux"
        },
        address: "Miraflores y Barranco, Lima",
        image: "/images/abarrotes/mercado.jpg",
        emoji: "🥬",
        subcategories: tiendasData.mercados
      }
    ]
  },
  {
    id: "nightlife",
    title: {
      es: "Noche",
      en: "Night",
      pt: "Noite",
      fr: "Nuit",
    },
    icon: <Wine className="w-6 h-6" />,
    emoji: "🍷",
    places: [
      {
        id: 1,
        name: {
          es: "Bares",
          en: "Bars",
          pt: "Bares",
          fr: "Bars"
        },
        description: {
          es: "Los mejores bares y pubs para disfrutar la noche",
          en: "The best bars and pubs to enjoy the night",
          pt: "Os melhores bares e pubs para curtir a noite",
          fr: "Les meilleurs bars et pubs pour profiter de la nuit"
        },
        address: "",
        image: "/images/noche/bares.jpg",
        emoji: "🍸",
        subcategories: nightData.bares
      },
      {
        id: 2,
        name: {
          es: "Discotecas",
          en: "Nightclubs",
          pt: "Discotecas",
          fr: "Discothèques"
        },
        description: {
          es: "Las mejores discotecas para bailar hasta el amanecer",
          en: "The best nightclubs to dance until dawn",
          pt: "As melhores discotecas para dançar até o amanhecer",
          fr: "Les meilleures discothèques pour danser jusqu'à l'aube"
        },
        address: "",
        image: "/images/noche/discoteca.jpeg",
        emoji: "🪩",
        subcategories: nightData.discotecas
      }
    ],
  },
  {
    id: "shopping",
    title: {
      es: "Shopping",
      en: "Shopping",
      pt: "Compras",
      fr: "Shopping"
    },
    icon: <ShoppingBag className="w-6 h-6" />,
    emoji: "🛍️",
    places: [
      {
        id: 2001,
        name: {
          es: "Artesanía",
          en: "Handicrafts",
          pt: "Artesanato",
          fr: "Artisanat"
        },
        description: {
          es: "Arte y artesanía peruana de calidad",
          en: "Quality Peruvian art and handicrafts",
          pt: "Arte e artesanato peruano de qualidade",
          fr: "Art et artisanat péruviens de qualité"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/images/shopping/artesania.jpg",
        emoji: "🧶",
        subcategories: shoppingData.artesania
      },
      {
        id: 2002,
        name: {
          es: "Librerías",
          en: "Bookstores",
          pt: "Livrarias",
          fr: "Librairies"
        },
        description: {
          es: "Las mejores librerías de la zona",
          en: "The best bookstores in the area",
          pt: "As melhores livrarias da região",
          fr: "Les meilleures librairies de la région"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/images/shopping/librerias.jpg",
        emoji: "📚",
        subcategories: shoppingData.librerias
      },
      {
        id: 2003,
        name: {
          es: "Moda y Centros Comerciales",
          en: "Fashion & Shopping Malls",
          pt: "Moda e Shoppings",
          fr: "Mode et Centres Commerciaux"
        },
        description: {
          es: "Moda, marcas y centros comerciales icónicos",
          en: "Fashion, brands and iconic shopping malls",
          pt: "Moda, marcas e shoppings icônicos",
          fr: "Mode, marques et centres commerciaux emblématiques"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/images/shopping/larcomar.jpg",
        emoji: "🛒",
        subcategories: shoppingData.moda_y_centros_comerciales
      }
    ]
  },
] 