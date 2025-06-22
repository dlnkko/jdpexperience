import { Utensils, Theater, Building2, ShoppingBag, Wine, Sparkles } from "lucide-react"
import type { ReactNode } from "react"
import type React from "react"
import {
    MapPin,
  } from "lucide-react"

export interface Place {
  id: number
  name: { [key: string]: string }
  description: { [key: string]: string }
  address: string
  image: string
  emoji?: string
  rating?: number
  priceLevel?: number
  priceIndicator?: { [key: string]: string }
  subcategories?: {
    name: string
    description: { [key: string]: string }
    address: string
    rating?: number
    priceLevel?: number
    priceIndicator?: { [key: string]: string }
  }[]
}

export interface Section {
  id: string
  title: { [key: string]: string }
  icon: ReactNode
  emoji: string
  places: Place[]
}

export interface Translations {
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
    priceAlto: string
    priceMedio: string
    priceBarato: string
  }
}

export const translations: Translations = {
  es: {
    welcome: "Bienvenido a Experiencias JDP 🇵🇪",
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
    currentLocation: "Ubicación actual",
    priceAlto: "Alto",
    priceMedio: "Medio",
    priceBarato: "Barato",
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
    currentLocation: "Current Location",
    priceAlto: "High",
    priceMedio: "Medium",
    priceBarato: "Low",
  },
  pt: {
    welcome: "Bem-vindo à JDP Experiences 🇵🇪",
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
    currentLocation: "Localização atual",
    priceAlto: "Alto",
    priceMedio: "Médio",
    priceBarato: "Barato",
  },
  fr: {
    welcome: "Bienvenue chez JDP Experiences 🇵🇪",
    subtitle: "Explorez le meilleur de Lima depuis votre logement",
    greeting: "Bonjour",
    enjoyStay: "nous espérons que vous apprécierez votre séjour",
    recommendedPlaces: "lieux recommandés",
    howToGet: "Comment s\'y rendre?",
    thanks: "Merci d\'avoir choisi notre Airbnb!",
    greatStay: "Nous espérons que vous passerez un séjour incroyable à Barranco",
    needHelp: "Besoin d\'aide? Contactez-nous!",
    contactUs: "Contactez-nous",
    food: "Nourriture",
    entertainment: "Divertissement",
    museums: "Musées",
    shops: "Boutiques",
    nightlife: "Nuit",
    experiences: "Expériences",
    stelar: "Stelar",
    atelier: "Atelier",
    currentLocation: "Emplacement actuel",
    priceAlto: "Élevé",
    priceMedio: "Moyen",
    priceBarato: "Bon marché",
  },
}

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
          es: "CARNES Y PARRILLA",
          en: "MEATS AND GRILL",
          pt: "CARNES E GRELHADOS",
          fr: "VIANDES ET GRILLADES",
        },
        description: {
          es: "Los mejores cortes y parrillas de Barranco",
          en: "The best cuts and grills in Barranco",
          pt: "Os melhores cortes e grelhados de Barranco",
          fr: "Les meilleures coupes et grillades de Barranco",
        },
        address: "",
        image: "",
        emoji: "🥩",
        subcategories: [
          {
            name: "Osaka",
        description: {
              es: "Fusión japonesa-peruana con excelentes cortes de carne y mariscos, en un ambiente sofisticado.",
              en: "Japanese-Peruvian fusion with excellent meat cuts and seafood, in a sophisticated atmosphere.",
              pt: "Fusão japonesa-peruana com excelentes cortes de carne e frutos do mar, em um ambiente sofisticado.",
              fr: "Fusion japonaise-péruvienne avec d\'excellentes coupes de viande et de fruits de mer, dans une ambiance sophistiquée.",
            },
            address: "Av. San Martín 201, Barranco, Lima",
            rating: 4.5,
            priceLevel: 3,
            priceIndicator: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" },
          },
          {
            name: "La Mar",
        description: {
              es: "Cevichería de renombre, con una selección exquisita de pescados y mariscos frescos a la parrilla.",
              en: "Renowned cevichería, with an exquisite selection of fresh grilled fish and seafood.",
              pt: "Cevichería renomada, com uma seleção requintada de peixes e frutos do mar frescos grelhados.",
              fr: "Cevichería renommée, avec une sélection exquise de poissons et fruits de mer frais grillés.",
            },
            address: "Av. La Mar 770, Miraflores, Lima",
            rating: 4.7,
            priceLevel: 4,
            priceIndicator: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" },
          },
          {
            name: "El Hornero",
        description: {
              es: "Parrilla tradicional argentina con cortes de carne jugosos y empanadas caseras.",
              en: "Traditional Argentine grill with juicy meat cuts and homemade empanadas.",
              pt: "Churrascaria tradicional argentina com cortes de carne suculentos e empanadas caseiras.",
              fr: "Grill argentin traditionnel avec des coupes de viande juteuses et des empanadas maison.",
            },
            address: "Calle Bolognesi 215, Barranco, Lima",
            rating: 4.3,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
          }
        ]
      },
      {
        id: 2,
        name: {
          es: "COMIDA PERUANA",
          en: "PERUVIAN FOOD",
          pt: "COMIDA PERUANA",
          fr: "CUISINE PÉRUVIENNE",
        },
        description: {
          es: "Auténtica gastronomía peruana",
          en: "Authentic Peruvian cuisine",
          pt: "Auténtica culinária peruana",
          fr: "Cuisine péruvienne authentique",
        },
        address: "",
        image: "",
        emoji: "🇵🇪",
        subcategories: [
          {
            name: "Central",
            description: {
              es: "Restaurante de clase mundial, especializado en la diversidad de ecosistemas peruanos.",
              en: "World-class restaurant specializing in the diversity of Peruvian ecosystems.",
              pt: "Restaurante de classe mundial, especializado na diversidade de ecossistemas peruanos.",
              fr: "Restaurant de classe mondiale, spécialisé dans la diversité des écosystèmes péruviens.",
            },
            address: "Av. Pedro de Osma 301, Barranco, Lima",
            rating: 4.8,
            priceLevel: 4,
            priceIndicator: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" },
          },
          {
            name: "Isolina",
            description: {
              es: "Taberna tradicional peruana que rescata sabores caseros y porciones generosas.",
              en: "Traditional Peruvian tavern that rescues homemade flavors and generous portions.",
              pt: "Taberna tradicional peruana que resgata sabores caseros e porciones generosas.",
              fr: "Taverne péruvienne traditionnelle qui sauve les saveurs maison et les portions généreuses.",
            },
            address: "Av. San Martín 101, Barranco, Lima",
            rating: 4.4,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
          },
          {
            name: "Astrid y Gastón",
        description: {
              es: "Pionero de la alta cocina peruana, con un menú degustación innovador.",
              en: "Pioneer of high Peruvian cuisine, with an innovative tasting menu.",
              pt: "Pionero da alta cozinha peruana, com um menú degustação inovador.",
              fr: "Pionnier de la haute cuisine péruvienne, avec un menú dégustation innovant.",
            },
            address: "Av. Paz Soldán 290, Miraflores, Lima",
            rating: 4.6,
            priceLevel: 4,
            priceIndicator: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" },
          }
        ]
      },
      {
        id: 3,
        name: {
          es: "DESAYUNOS Y POSTRES",
          en: "BREAKFAST AND DESSERTS",
          pt: "CAFÉ DA MANHÃ E SOBREMESAS",
          fr: "PETIT-DÉJEUNER ET DESSERTS",
        },
        description: {
          es: "Los mejores desayunos y postres de la zona",
          en: "The best breakfasts and desserts in the area",
          pt: "Os melhores cafés da manhã e sobremesas da região",
          fr: "Les meilleurs petits-déjeuners et desserts du quartier",
        },
        address: "",
        image: "",
        emoji: "🥞",
        subcategories: [
          {
            name: "La Baguette",
            description: {
              es: "Panadería y pastelería francesa con una gran variedad de panes artesanales y dulces.",
              en: "French bakery and pastry with a wide variety of artisanal breads and sweets.",
              pt: "Padaria e confeitaria francesa com uma grande variedade de pães artesanais e doces.",
              fr: "Boulangerie et pâtisserie française avec une grande variété de pains artisanaux et de douceurs.",
            },
            address: "Av. Grau 340, Barranco, Lima",
            rating: 4.2,
            priceLevel: 1,
            priceIndicator: { es: "Barato", en: "Low", pt: "Barato", fr: "Bon marché" },
          },
          {
            name: "Cafe Z",
        description: {
              es: "Cafetería acogedora con especialidades de café, postres caseros y opciones de desayuno ligero.",
              en: "Cozy coffee shop with specialty coffees, homemade desserts, and light breakfast options.",
              pt: "Cafeteria aconchegante com especialidades de café, sobremesas caseiras e opções de café da manhã leve.",
              fr: "Café confortable avec des spécialités de café, des desserts faits maison et des options de petit-déjeuner léger.",
            },
            address: "Av. Pedro de Osma 127, Barranco, Lima",
            rating: 4.1,
            priceLevel: 1,
            priceIndicator: { es: "Barato", en: "Low", pt: "Barato", fr: "Bon marché" },
          }
        ]
      },
      {
        id: 4,
        name: {
          es: "COMIDA INTERNACIONAL",
          en: "INTERNATIONAL FOOD",
          pt: "COMIDA INTERNACIONAL",
          fr: "CUISINE INTERNATIONALE",
        },
        description: {
          es: "Cocina internacional de alta calidad",
          en: "High-quality international cuisine",
          pt: "Culinária internacional de alta calidad",
          fr: "Cuisine internationale de haute qualité",
        },
        address: "",
        image: "",
        emoji: "🌎",
        subcategories: [
          {
            name: "Rafael",
            description: {
              es: "Restaurante de cocina mediterránea y fusión, conocido por su ambiente elegante y platos innovadores.",
              en: "Mediterranean and fusion cuisine restaurant, known for its elegant atmosphere and innovative dishes.",
              pt: "Restaurante de cozinha mediterrânea e fusão, conhecido por seu ambiente elegante e pratos inovadores.",
              fr: "Restaurant de cuisine méditerranéenne et fusion, réputé pour son ambiance élégante et ses plats innovants.",
            },
            address: "Av. La Mar 1100, Miraflores, Lima",
            rating: 4.6,
            priceLevel: 4,
            priceIndicator: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" },
          },
          {
            name: "El Mercado",
        description: {
              es: "Restaurante rústico que ofrece una experiencia culinaria basada en pescados y mariscos frescos.",
              en: "Rustic restaurant offering a culinary experience based on fresh fish and seafood.",
              pt: "Restaurante rústico que oferece uma experiência culinária baseada em peixes e frutos do mar frescos.",
              fr: "Restaurant rústico ofreciendo una experiencia culinaria basada en pescados y mariscos frescos.",
            },
            address: "Hipólito Unanue 203, Miraflores, Lima",
            rating: 4.4,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
          }
        ]
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
    emoji: "🎥",
    places: [
      {
        id: 1,
        name: {
          es: "CINES",
          en: "MOVIES",
          pt: "CINEMAS",
          fr: "CINÉMAS",
        },
        description: {
          es: "Disfruta de las últimas películas en los mejores cines",
          en: "Enjoy the latest movies at the best cinemas",
          pt: "Aproveite os melhores filmes nos melhores cinemas",
          fr: "Profitez des meilleurs films dans les meilleurs cinémas",
        },
        address: "",
        image: "",
        emoji: "🍿",
        subcategories: [
          {
            name: "Cineplanet",
        description: {
              es: "Cineplex con pantallas de última generación y comodidades premium.",
              en: "Cineplex with state-of-the-art screens and premium amenities.",
              pt: "Complexo de cinemas com telas de última geração e comodidades premium.",
              fr: "Cinéma avec des écrans de dernière génération et des commodités premium.",
            },
            address: "Av. La Mar 1234, Miraflores, Lima",
            rating: 4.7,
            priceLevel: 4,
            priceIndicator: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" },
          },
          {
            name: "Cinemark",
        description: {
              es: "Cadena de cines con salas de lujo y experiencia IMAX.",
              en: "Cinema chain with luxury theaters and IMAX experience.",
              pt: "Cadeia de cinemas com salas de luxo e experiência IMAX.",
              fr: "Chaîne de cinémas avec salles de luxe et expérience IMAX.",
            },
            address: "Av. San Martín 567, Barranco, Lima",
            rating: 4.5,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
          }
        ]
      },
      {
        id: 2,
        name: {
          es: "MUSEOS",
          en: "MUSEUMS",
          pt: "MUSEUS",
          fr: "MUSÉES",
        },
        description: {
          es: "Explora la rica historia y cultura de Lima",
          en: "Explore the rich history and culture of Lima",
          pt: "Explore a rica história e cultura de Lima",
          fr: "Explorez la riche histoire et la culture de Lima",
        },
        address: "",
        image: "",
        emoji: "🏛️",
        subcategories: [
          {
            name: "Museo de Arte de Lima",
            description: {
              es: "Museo de arte contemporáneo con obras de artistas peruanos y extranjeros.",
              en: "Contemporary art museum with works by Peruvian and foreign artists.",
              pt: "Museu de arte contemporânea com obras de artistas peruanos e estrangeiros.",
              fr: "Musée d\'art contemporain avec des œuvres d\'artistes péruviens et étrangers.",
            },
            address: "Av. Pedro de Osma 789, Barranco, Lima",
            rating: 4.6,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
          },
          {
            name: "Museo Larco",
        description: {
              es: "Museo de arte precolombino con piezas arqueológicas de gran valor histórico.",
              en: "Pre-Columbian art museum with valuable archaeological pieces.",
              pt: "Museu de arte precolombino com peças arqueológicas de grande valor histórico.",
              fr: "Musée de l\'art précolombien avec des pièces archéologiques de grande valeur historique.",
            },
            address: "Av. Pedro de Osma 421, Barranco, Lima",
            rating: 4.6,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
          },
        ]
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
        name: {
          es: "Puente de los Suspiros",
          en: "Bridge of Sighs",
          pt: "Ponte dos Suspiros",
          fr: "Pont des Soupirs"
        },
        description: {
          es: "Icónico puente romántico con vista al mar",
          en: "Iconic romantic bridge with ocean view",
          pt: "Ponte romântica icônica com vista para o mar",
          fr: "Pont romantique emblématique avec vue sur l\'océan",
        },
        address: "Bajada de Baños, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 17,
        name: {
          es: "Circuito Mágico del Agua",
          en: "Magic Water Circuit",
          pt: "Circuito Mágico da Água",
          fr: "Circuit Magique de l\'Eau"
        },
        description: {
          es: "Parque de fuentes de agua con espectáculo de luces",
          en: "Water fountain park with light show",
          pt: "Parque de fontes de água com show de luzes",
          fr: "Parc de fontaines d\'eau avec spectacle de lumières",
        },
        address: "Jr. Madre de Dios S/N, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 18,
        name: {
          es: "Clases de Cocina Peruana",
          en: "Peruvian Cooking Classes",
          pt: "Aulas de Culinária Peruana",
          fr: "Cours de Cuisine Péruvienne"
        },
        description: {
          es: "Aprende a preparar platos típicos peruanos",
          en: "Learn to prepare typical Peruvian dishes",
          pt: "Aprenda a preparar pratos típicos peruanos",
          fr: "Apprenez à préparer des plats typiques péruviens",
        },
        address: "Av. Pedro de Osma 301, Barranco, Lima",
        image: "/placeholder.2svg?height=200&width=300",
      },
      {
        id: 19,
        name: {
          es: "Tour en Bicicleta por Barranco",
          en: "Barranco Bike Tour",
          pt: "Passeio de Bicicleta por Barranco",
          fr: "Tour à Vélo de Barranco"
        },
        description: {
          es: "Recorre el distrito en bicicleta con guía local",
          en: "Tour the district by bicycle with a local guide",
          pt: "Percorra o distrito de bicicleta com guía local",
          fr: "Visitez le quartier à vélo avec un guide local",
        },
        address: "Plaza Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 20,
        name: {
          es: "Malecón de Barranco",
          en: "Barranco Boardwalk",
          pt: "Calçadão de Barranco",
          fr: "Promenade de Barranco"
        },
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
        name: {
          es: "MATE - Museo Mario Testino",
          en: "MATE - Mario Testino Museum",
          pt: "MATE - Museu Mario Testino",
          fr: "MATE - Musée Mario Testino"
        },
        description: {
          es: "Fotografía contemporánea del reconocido fotógrafo",
          en: "Contemporary photography by renowned photographer",
          pt: "Fotografía contemporánea do renomado fotógrafo",
          fr: "Photographie contemporaine du photographe renommé",
        },
        address: "Av. Pedro de Osma 409, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 22,
        name: {
          es: "Museo Pedro de Osma",
          en: "Pedro de Osma Museum",
          pt: "Museu Pedro de Osma",
          fr: "Musée Pedro de Osma"
        },
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
        name: {
          es: "MAC Lima",
          en: "MAC Lima",
          pt: "MAC Lima",
          fr: "MAC Lima"
        },
        description: {
          es: "Museo de Arte Contemporáneo",
          en: "Contemporary Art Museum",
          pt: "Museu de Arte Contemporânea",
          fr: "Musée d\'Art Contemporain",
        },
        address: "Av. Miguel Grau 1511, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 24,
        name: {
          es: "Museo de la Electricidad",
          en: "Electricity Museum",
          pt: "Museu da Eletricidade",
          fr: "Musée de l\'Électricité"
        },
        description: {
          es: "Historia de la electricidad en el Perú",
          en: "History of electricity in Peru",
          pt: "História da eletricidade no Peru",
          fr: "Histoire de l\'électricité au Pérou",
        },
        address: "Av. Pedro de Osma 105, Barranco, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 25,
        name: {
          es: "Casa Museo Ricardo Palma",
          en: "Ricardo Palma House Museum",
          pt: "Casa Museu Ricardo Palma",
          fr: "Maison Musée Ricardo Palma"
        },
        description: {
          es: "Casa del escritor de las Tradiciones Peruanas",
          en: "House of the writer of Peruvian Traditions",
          pt: "Casa do escritor das Tradições Peruanas",
          fr: "Maison de l\'écrivain des Traditions Péruviennes",
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
        name: {
          es: "Las Pallas",
          en: "Las Pallas",
          pt: "Las Pallas",
          fr: "Las Pallas"
        },
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
        name: {
          es: "Mercado de Barranco",
          en: "Barranco Market",
          pt: "Mercado de Barranco",
          fr: "Marché de Barranco"
        },
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
        name: {
          es: "Taller de Cerámica",
          en: "Ceramics Workshop",
          pt: "Oficina de Cerâmica",
          fr: "Atelier de Céramique"
        },
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
        name: {
          es: "Alpaca 111",
          en: "Alpaca 111",
          pt: "Alpaca 111",
          fr: "Alpaca 111"
        },
        description: {
          es: "Productos de alpaca y textiles peruanos",
          en: "Alpaca products and Peruvian textiles",
          pt: "Produtos de alpaca e têxteis peruanos",
          fr: "Produits d\'alpaga et textiles péruviens",
        },
        address: "Av. Larco 671, Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 30,
        name: {
          es: "Centro Comercial Larcomar",
          en: "Larcomar Shopping Center",
          pt: "Centro Comercial Larcomar",
          fr: "Centre Commercial Larcomar"
        },
        description: {
          es: "Centro comercial con vista al océano",
          en: "Shopping center with ocean view",
          pt: "Centro comercial com vista para o oceano",
          fr: "Centre Commercial Larcomar avec vue sur l\'océan",
        },
        address: "Malecón de la Reserva 610, Miraflores, Lima",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
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
        id: 31,
        name: {
          es: "Bares y Pubs",
          en: "Bars and Pubs",
          pt: "Bares e Pubs",
          fr: "Bars et Pubs"
        },
        description: {
          es: "Los mejores lugares para disfrutar de una noche en Barranco",
          en: "The best places to enjoy a night out in Barranco",
          pt: "Os melhores lugares para desfrutar de uma noite em Barranco",
          fr: "Les meilleurs endroits pour profiter d\'une soirée à Barranco"
        },
        address: "",
        image: "",
        emoji: "🍺",
        subcategories: [
          {
            name: "Ayahuasca",
            description: {
              es: "Bar de cócteles artesanales con ambiente bohemio y música en vivo.",
              en: "Craft cocktail bar with bohemian atmosphere and live music.",
              pt: "Bar de coquetéis artesanais com ambiente boêmio e música ao vivo.",
              fr: "Bar à cocktails artisanaux avec ambiance bohème et musique live.",
            },
            address: "Av. San Martín 130, Barranco, Lima",
            rating: 4.5,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" }
          },
          {
            name: "Dada",
            description: {
              es: "Bar de vinos y tapas con terraza y vista al mar.",
              en: "Wine and tapas bar with terrace and ocean view.",
              pt: "Bar de vinhos e tapas com terraço e vista para o mar.",
              fr: "Bar à vin et tapas avec terrasse et vue sur l\'océan.",
            },
            address: "Av. San Martín 154, Barranco, Lima",
            rating: 4.4,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" }
          }
        ]
      },
      {
        id: 32,
        name: {
          es: "Discotecas",
          en: "Nightclubs",
          pt: "Casas Noturnas",
          fr: "Discothèques"
        },
        description: {
          es: "Lugares para bailar y disfrutar de la música hasta altas horas",
          en: "Places to dance and enjoy music until late hours",
          pt: "Lugares para dançar e desfrutar de música até altas horas",
          fr: "Lieux pour danser et profiter de la musique jusqu\'aux petites heures"
        },
        address: "",
        image: "",
        emoji: "💃",
        subcategories: [
          {
            name: "La Noche",
            description: {
              es: "Discoteca icónica con música en vivo y DJs internacionales.",
              en: "Iconic nightclub with live music and international DJs.",
              pt: "Casa noturna icônica com música ao vivo e DJs internacionais.",
              fr: "Discothèque emblématique avec musique live et DJs internationaux.",
            },
            address: "Av. Bolognesi 307, Barranco, Lima",
            rating: 4.6,
            priceLevel: 3,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" }
          },
          {
            name: "Sargento Pimienta",
            description: {
              es: "Bar y discoteca con ambiente retro y música de los 60s y 70s.",
              en: "Bar and nightclub with retro atmosphere and 60s and 70s music.",
              pt: "Bar e casa noturna com ambiente retrô e música dos anos 60 e 70.",
              fr: "Bar et discothèque avec ambiance retro et musique des années 60 et 70.",
            },
            address: "Av. Grau 266, Barranco, Lima",
            rating: 4.3,
            priceLevel: 2,
            priceIndicator: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" }
          }
        ]
      }
    ]
  }
] 