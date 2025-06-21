import { Utensils, Theater, Building2, ShoppingBag, Wine, Sparkles } from "lucide-react"
import type { Section } from "./types"
import { foodSubcategories } from "./foodSubcategories"
import entretenimientoData from '../app/api/google-maps/data/entretenimiento.json';
import tiendasData from '../app/api/google-maps/data/tiendas.json';
import shoppingData from '../app/api/google-maps/data/shopping.json';
import experienciasData from '../app/api/google-maps/data/experiencias.json';

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
        emoji: "🎨",
        subcategories: entretenimientoData.cultura_y_arte
      },
      {
        id: 2,
        name: { es: "Historial Urbano", en: "Urban History", pt: "História Urbana", fr: "Histoire Urbaine" },
        description: { es: "...", en: "...", pt: "...", fr: "..." },
        emoji: "🏙️",
        subcategories: entretenimientoData.historial_urbano
      },
      {
        id: 3,
        name: { es: "Música, Cine y Teatro", en: "Music, Cinema & Theater", pt: "Música, Cinema e Teatro", fr: "Musique, Cinéma et Théâtre" },
        description: { es: "...", en: "...", pt: "...", fr: "..." },
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
        id: 3001,
        name: {
          es: "Arte y Museo",
          en: "Art & Museum",
          pt: "Arte e Museu",
          fr: "Art et Musée"
        },
        description: {
          es: "Museos y espacios de arte imperdibles",
          en: "Must-see museums and art spaces",
          pt: "Museus e espaços de arte imperdíveis",
          fr: "Musées et espaces d'art incontournables"
        },
        address: "Barranco y Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🖼️",
        subcategories: experienciasData.arte_y_museos
      },
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
        image: "/placeholder.svg?height=200&width=300",
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
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🗺️",
        subcategories: experienciasData.turismo
      }
    ],
  },
  {
    id: "abarrotes",
    title: {
      es: "Tienda de Abarrotes",
      en: "Grocery Store",
      pt: "Mercearia",
      fr: "Épicerie"
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
        image: "/placeholder.svg?height=200&width=300",
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
        image: "/placeholder.svg?height=200&width=300",
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
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🥬",
        subcategories: tiendasData.mercados
      }
    ]
  },
  {
    id: "nightlife",
    title: {
      es: "Vida Nocturna",
      en: "Nightlife",
      pt: "Vida Noturna",
      fr: "Vie Nocturne",
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
        image: "",
        emoji: "🍸",
        subcategories: [
          {
            name: "Ayahuasca",
            description: {
              es: "Bar de cócteles artesanales con ambiente bohemio y música en vivo.",
              en: "Craft cocktail bar with bohemian atmosphere and live music.",
              pt: "Bar de coquetéis artesanais com ambiente boêmio e música ao vivo.",
              fr: "Bar à cocktails artisanaux avec ambiance bohème et musique live."
            },
            address: "Av. San Martín 130, Barranco, Lima",
            rating: 4.5,
            userRatingsTotal: 800,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=Ayahuasca+Bar+Barranco+Lima"
          },
          {
            name: "Dada",
            description: {
              es: "Bar de vinos y tapas con terraza y vista al mar.",
              en: "Wine and tapas bar with terrace and ocean view.",
              pt: "Bar de vinhos e tapas com terraço e vista para o mar.",
              fr: "Bar à vin et tapas avec terrasse et vue sur l'océan."
            },
            address: "Av. San Martín 154, Barranco, Lima",
            rating: 4.4,
            userRatingsTotal: 600,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=Dada+Bar+Barranco+Lima"
          },
          {
            name: "BarBarian Miraflores",
        description: {
          es: "Bar de cervezas artesanales con ambiente relajado y buena música.",
          en: "Craft beer bar with a relaxed atmosphere and good music.",
          pt: "Bar de cervejas artesanais com ambiente descontraído e boa música.",
          fr: "Bar à bières artisanales avec une ambiance détendue et de la bonne musique."
        },
        address: "Calle Manuel Bonilla 108, Miraflores, Lima",
            rating: 4.6,
            userRatingsTotal: 1200,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=BarBarian+Miraflores+Lima"
          },
          {
            name: "Juanito de Barranco",
        description: {
          es: "Taberna tradicional, famosa por sus sánguches y ambiente bohemio.",
          en: "Traditional tavern, famous for its sandwiches and bohemian vibe.",
          pt: "Taberna tradicional, famosa por seus sanduíches e ambiente boêmio.",
          fr: "Taverne traditionnelle, célèbre pour ses sandwichs et son ambiance bohème."
        },
        address: "Av. Almte. Miguel Grau 270, Barranco, Lima",
            rating: 4.5,
            userRatingsTotal: 900,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=Juanito+de+Barranco+Lima"
          }
        ]
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
        image: "",
        emoji: "🪩",
        subcategories: [
          {
            name: "La Noche",
            description: {
              es: "Discoteca icónica con música en vivo y DJs internacionales.",
              en: "Iconic nightclub with live music and international DJs.",
              pt: "Casa noturna icônica com música ao vivo e DJs internacionais.",
              fr: "Discothèque emblématique avec musique live et DJs internationaux."
            },
            address: "Av. Bolognesi 307, Barranco, Lima",
            rating: 4.6,
            userRatingsTotal: 1200,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=La+Noche+Barranco+Lima"
          },
          {
            name: "Sargento Pimienta",
            description: {
              es: "Bar y discoteca con ambiente retro y música de los 60s y 70s.",
              en: "Bar and nightclub with retro atmosphere and 60s and 70s music.",
              pt: "Bar e casa noturna com ambiente retrô e música dos anos 60 e 70.",
              fr: "Bar et discothèque avec ambiance retro et musique des années 60 et 70."
            },
            address: "Av. Grau 266, Barranco, Lima",
            rating: 4.3,
            userRatingsTotal: 900,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=Sargento+Pimienta+Barranco+Lima"
          },
          {
            name: "Gótica",
            description: {
              es: "Discoteca elegante y moderna en Miraflores, famosa por sus fiestas y DJs.",
              en: "Elegant and modern nightclub in Miraflores, famous for its parties and DJs.",
              pt: "Discoteca elegante e moderna em Miraflores, famosa por suas festas e DJs.",
              fr: "Discothèque élégante et moderne à Miraflores, célèbre pour ses soirées et DJs."
            },
            address: "C.C. Larcomar, Miraflores, Lima",
            rating: 4.4,
            userRatingsTotal: 1100,
            priceLevel: 3,
            priceIndicator: { es: "Medio-Alto", en: "Medium-High", pt: "Médio-Alto", fr: "Moyen-Élevé" },
            googleMapsUrl: "https://maps.google.com/?q=Gotica+Discoteca+Miraflores+Lima"
          },
          {
            name: "Bizarro Club",
            description: {
              es: "Discoteca popular con música variada y ambiente juvenil en Miraflores.",
              en: "Popular nightclub with varied music and youthful atmosphere in Miraflores.",
              pt: "Discoteca popular com música variada e ambiente jovem em Miraflores.",
              fr: "Discothèque populaire avec musique variée et ambiance jeune à Miraflores."
            },
            address: "Calle Bolognesi 755, Miraflores, Lima",
            rating: 4.2,
            userRatingsTotal: 950,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
            googleMapsUrl: "https://maps.google.com/?q=Bizarro+Club+Miraflores+Lima"
          }
        ]
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
        image: "/placeholder.svg?height=200&width=300",
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
        image: "/placeholder.svg?height=200&width=300",
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
        image: "/placeholder.svg?height=200&width=300",
        emoji: "🛒",
        subcategories: shoppingData.moda_y_centros_comerciales
      }
    ]
  },
] 