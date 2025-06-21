export interface FoodSubcategory {
  name: string
  description: { [key: string]: string }
  address: string
  rating?: number
  userRatingsTotal?: number
  priceLevel?: number
  priceIndicator?: { [key: string]: string }
  comment?: { [key: string]: string }
  googleMapsUrl?: string
  menuUrl?: string
}

export const foodSubcategories = {
  "carnes-y-parrilla": [
    {
      name: "Osaka",
      description: {
        es: "Restaurante japonés-peruano de alta cocina con los mejores cortes de carne",
        en: "High-end Japanese-Peruvian restaurant with the best meat cuts",
        pt: "Restaurante japonês-peruano de alta gastronomia com os melhores cortes de carne",
        fr: "Restaurant japonais-péruvien haut de gamme avec les meilleures coupes de viande"
      },
      address: "Av. San Martín 240, Barranco, Lima",
      rating: 4.7,
      userRatingsTotal: 1247,
      priceLevel: 4,
      priceIndicator: {
        es: "Alto",
        en: "High",
        pt: "Alto",
        fr: "Élevé"
      },
      comment: {
        es: "Excelente fusión japonesa-peruana. Los cortes de wagyu son espectaculares.",
        en: "Excellent Japanese-Peruvian fusion. The wagyu cuts are spectacular.",
        pt: "Excelente fusão japonesa-peruana. Os cortes wagyu são espetaculares.",
        fr: "Excellente fusion japonaise-péruvienne. Les coupes wagyu sont spectaculaires."
      },
      googleMapsUrl: "https://maps.google.com/?q=Osaka+Barranco+Lima",
      menuUrl: "https://osaka.com.pe/menu"
    },
    {
      name: "La Mar",
      description: {
        es: "Cevichería de clase mundial con excelentes opciones de pescado y mariscos",
        en: "World-class cevichería with excellent fish and seafood options",
        pt: "Cevichería de classe mundial com excelentes opções de peixe e frutos do mar",
        fr: "Cevichería de classe mondiale avec d'excellentes options de poisson et fruits de mer"
      },
      address: "Av. La Mar 770, Miraflores, Lima",
      rating: 4.6,
      userRatingsTotal: 2156,
      priceLevel: 3,
      priceIndicator: {
        es: "Medio-Alto",
        en: "Medium-High",
        pt: "Médio-Alto",
        fr: "Moyen-Élevé"
      },
      comment: {
        es: "El mejor ceviche de Lima. Ambiente moderno y servicio impecable.",
        en: "The best ceviche in Lima. Modern atmosphere and impeccable service.",
        pt: "O melhor ceviche de Lima. Ambiente moderno e serviço impecável.",
        fr: "Le meilleur ceviche de Lima. Ambiance moderne et service impeccable."
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Mar+Miraflores+Lima",
      menuUrl: "https://lamarcebicheria.com/menu"
    },
    {
      name: "El Mercado",
      description: {
        es: "Restaurante de pescados y mariscos frescos con parrilla a la vista",
        en: "Fresh fish and seafood restaurant with open grill",
        pt: "Restaurante de peixes e frutos do mar frescos com grelha à vista",
        fr: "Restaurant de poissons et fruits de mer frais avec gril à vue"
      },
      address: "Hipólito Unanue 203, Miraflores, Lima",
      rating: 4.5,
      userRatingsTotal: 892,
      priceLevel: 3,
      priceIndicator: {
        es: "Medio",
        en: "Medium",
        pt: "Médio",
        fr: "Moyen"
      },
      comment: {
        es: "Pescados frescos del día. La parrilla de mariscos es increíble.",
        en: "Fresh fish of the day. The seafood grill is incredible.",
        pt: "Peixes frescos do dia. A grelha de frutos do mar é incrível.",
        fr: "Poissons frais du jour. Le gril de fruits de mer est incroyable."
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Mercado+Miraflores+Lima",
      menuUrl: "https://elmercado.pe/menu"
    }
  ],
  "comida-criolla": [
    {
      name: "El Rincón Que No Conoces",
      description: {
        es: "Restaurante tradicional peruano con los mejores platos criollos",
        en: "Traditional Peruvian restaurant with the best criollo dishes",
        pt: "Restaurante tradicional peruano com os melhores pratos crioulos",
        fr: "Restaurant traditionnel péruvien avec les meilleurs plats créoles"
      },
      address: "Bernardo Alcedo 363, Lince, Lima",
      rating: 4.8,
      userRatingsTotal: 1567,
      priceLevel: 2,
      priceIndicator: {
        es: "Medio",
        en: "Medium",
        pt: "Médio",
        fr: "Moyen"
      },
      comment: {
        es: "El mejor lomo saltado de Lima. Ambiente familiar y auténtico.",
        en: "The best lomo saltado in Lima. Family atmosphere and authentic.",
        pt: "O melhor lomo saltado de Lima. Ambiente familiar e autêntico.",
        fr: "Le meilleur lomo saltado de Lima. Ambiance familiale et authentique."
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Rincon+Que+No+Conoces+Lince+Lima",
      menuUrl: "https://elrinconquenoconoces.com/menu"
    },
    {
      name: "La Picantería",
      description: {
        es: "Cocina tradicional cusqueña con sabores auténticos del sur",
        en: "Traditional Cusco cuisine with authentic southern flavors",
        pt: "Culinária tradicional cusquenha com sabores autênticos do sul",
        fr: "Cuisine traditionnelle de Cusco avec des saveurs authentiques du sud"
      },
      address: "Av. San Martín 150, Barranco, Lima",
      rating: 4.6,
      userRatingsTotal: 743,
      priceLevel: 2,
      priceIndicator: {
        es: "Medio",
        en: "Medium",
        pt: "Médio",
        fr: "Moyen"
      },
      comment: {
        es: "Sabores auténticos del Cusco. El rocoto relleno es imperdible.",
        en: "Authentic Cusco flavors. The stuffed rocoto is a must.",
        pt: "Sabores autênticos do Cusco. O rocoto recheado é imperdível.",
        fr: "Saveurs authentiques de Cusco. Le rocoto farci est incontournable."
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Picanteria+Barranco+Lima",
      menuUrl: "https://lapicanteria.pe/menu"
    },
    {
      name: "Restaurante Huaca Pucllana",
      description: {
        es: "Restaurante con vista a la huaca preinca, cocina peruana moderna",
        en: "Restaurant with view of pre-Inca huaca, modern Peruvian cuisine",
        pt: "Restaurante com vista para a huaca pré-inca, culinária peruana moderna",
        fr: "Restaurant avec vue sur la huaca pré-inca, cuisine péruvienne moderne"
      },
      address: "General Borgoño cuadra 8 s/n, Miraflores, Lima",
      rating: 4.4,
      userRatingsTotal: 2341,
      priceLevel: 3,
      priceIndicator: {
        es: "Medio-Alto",
        en: "Medium-High",
        pt: "Médio-Alto",
        fr: "Moyen-Élevé"
      },
      comment: {
        es: "Vista espectacular de la huaca. Cocina peruana con toque moderno.",
        en: "Spectacular view of the huaca. Peruvian cuisine with modern touch.",
        pt: "Vista espetacular da huaca. Culinária peruana com toque moderno.",
        fr: "Vue spectaculaire de la huaca. Cuisine péruvienne avec touche moderne."
      },
      googleMapsUrl: "https://maps.google.com/?q=Huaca+Pucllana+Restaurant+Miraflores+Lima",
      menuUrl: "https://huacapucllanamiraflores.com/menu"
    }
  ],
  "desayunos-y-postres": [
    {
      name: "Café Z",
      description: {
        es: "Café de especialidad con los mejores desayunos y postres artesanales",
        en: "Specialty coffee with the best breakfasts and artisanal desserts",
        pt: "Café especializado com os melhores cafés da manhã e sobremesas artesanais",
        fr: "Café de spécialité avec les meilleurs petits-déjeuners et desserts artisanaux"
      },
      address: "Av. San Martín 145, Barranco, Lima",
      rating: 4.7,
      userRatingsTotal: 892,
      priceLevel: 2,
      priceIndicator: {
        es: "Medio",
        en: "Medium",
        pt: "Médio",
        fr: "Moyen"
      },
      comment: {
        es: "El mejor café de Barranco. Los pancakes de quinua son deliciosos.",
        en: "The best coffee in Barranco. The quinoa pancakes are delicious.",
        pt: "O melhor café de Barranco. As panquecas de quinoa são deliciosas.",
        fr: "Le meilleur café de Barranco. Les pancakes de quinoa sont délicieux."
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Z+Barranco+Lima",
      menuUrl: "https://cafez.pe/menu"
    },
    {
      name: "La Bodega Verde",
      description: {
        es: "Café orgánico con desayunos saludables y postres veganos",
        en: "Organic café with healthy breakfasts and vegan desserts",
        pt: "Café orgânico com cafés da manhã saudáveis e sobremesas veganas",
        fr: "Café bio avec petits-déjeuners sains et desserts végans"
      },
      address: "Av. Grau 164, Barranco, Lima",
      rating: 4.5,
      userRatingsTotal: 567,
      priceLevel: 2,
      priceIndicator: {
        es: "Medio",
        en: "Medium",
        pt: "Médio",
        fr: "Moyen"
      },
      comment: {
        es: "Opción saludable y deliciosa. Los smoothie bowls son espectaculares.",
        en: "Healthy and delicious option. The smoothie bowls are spectacular.",
        pt: "Opção saudável e deliciosa. Os smoothie bowls são espetaculares.",
        fr: "Option saine et délicieuse. Les smoothie bowls sont spectaculaires."
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Bodega+Verde+Barranco+Lima",
      menuUrl: "https://labodegaverde.pe/menu"
    },
    {
      name: "Pastelería San Antonio",
      description: {
        es: "Pastelería tradicional con los mejores postres peruanos",
        en: "Traditional pastry shop with the best Peruvian desserts",
        pt: "Confeitaria tradicional com as melhores sobremesas peruanas",
        fr: "Pâtisserie traditionnelle avec les meilleurs desserts péruviens"
      },
      address: "Av. Arequipa 4720, Miraflores, Lima",
      rating: 4.6,
      userRatingsTotal: 1234,
      priceLevel: 1,
      priceIndicator: {
        es: "Bajo",
        en: "Low",
        pt: "Baixo",
        fr: "Bas"
      },
      comment: {
        es: "Los mejores alfajores y tres leches de Lima. Tradición desde 1920.",
        en: "The best alfajores and tres leches in Lima. Tradition since 1920.",
        pt: "Os melhores alfajores e três leites de Lima. Tradição desde 1920.",
        fr: "Les meilleurs alfajores et tres leches de Lima. Tradition depuis 1920."
      },
      googleMapsUrl: "https://maps.google.com/?q=Pasteleria+San+Antonio+Miraflores+Lima",
      menuUrl: "https://pasteleriasanantonio.com/menu"
    }
  ],
  "comida-china-e-internacional": [
    {
      name: "Chifa Titi",
      description: {
        es: "El mejor chifa de Lima, cocina china-peruana de alta calidad",
        en: "The best chifa in Lima, high-quality Chinese-Peruvian cuisine",
        pt: "O melhor chifa de Lima, culinária chinesa-peruana de alta qualidade",
        fr: "Le meilleur chifa de Lima, cuisine chinoise-péruvienne de haute qualité"
      },
      address: "Av. Javier Prado Este 1212, San Isidro, Lima",
      rating: 4.8,
      userRatingsTotal: 1892,
      priceLevel: 3,
      priceIndicator: {
        es: "Medio-Alto",
        en: "Medium-High",
        pt: "Médio-Alto",
        fr: "Moyen-Élevé"
      },
      comment: {
        es: "El chifa más famoso de Lima. El pato laqueado es espectacular.",
        en: "The most famous chifa in Lima. The lacquered duck is spectacular.",
        pt: "O chifa mais famoso de Lima. O pato laqueado é espetacular.",
        fr: "Le chifa le plus célèbre de Lima. Le canard laqué est spectaculaire."
      },
      googleMapsUrl: "https://maps.google.com/?q=Chifa+Titi+San+Isidro+Lima",
      menuUrl: "https://chifatiti.com/menu"
    },
    {
      name: "Madam Tusan",
      description: {
        es: "Chifa moderno con ambiente elegante y cocina fusión",
        en: "Modern chifa with elegant atmosphere and fusion cuisine",
        pt: "Chifa moderno com ambiente elegante e culinária fusion",
        fr: "Chifa moderne avec ambiance élégante et cuisine fusion"
      },
      address: "Av. Santa Cruz 859, Miraflores, Lima",
      rating: 4.5,
      userRatingsTotal: 1456,
      priceLevel: 3,
      priceIndicator: {
        es: "Medio-Alto",
        en: "Medium-High",
        pt: "Médio-Alto",
        fr: "Moyen-Élevé"
      },
      comment: {
        es: "Chifa con toque moderno. Los dim sum son increíbles.",
        en: "Chifa with modern touch. The dim sum are incredible.",
        pt: "Chifa com toque moderno. Os dim sum são incríveis.",
        fr: "Chifa avec touche moderne. Les dim sum sont incroyables."
      },
      googleMapsUrl: "https://maps.google.com/?q=Madam+Tusan+Miraflores+Lima",
      menuUrl: "https://madamtusan.com/menu"
    },
    {
      name: "Restaurante Rafael",
      description: {
        es: "Cocina mediterránea con toque peruano, ambiente romántico",
        en: "Mediterranean cuisine with Peruvian touch, romantic atmosphere",
        pt: "Culinária mediterrânea com toque peruano, ambiente romântico",
        fr: "Cuisine méditerranéenne avec touche péruvienne, ambiance romantique"
      },
      address: "San Martín 300, Miraflores, Lima",
      rating: 4.6,
      userRatingsTotal: 678,
      priceLevel: 4,
      priceIndicator: {
        es: "Alto",
        en: "High",
        pt: "Alto",
        fr: "Élevé"
      },
      comment: {
        es: "Cocina mediterránea excepcional. Perfecto para una cena romántica.",
        en: "Exceptional Mediterranean cuisine. Perfect for a romantic dinner.",
        pt: "Culinária mediterrânea excepcional. Perfeito para um jantar romântico.",
        fr: "Cuisine méditerranéenne exceptionnelle. Parfait pour un dîner romantique."
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurante+Rafael+Miraflores+Lima",
      menuUrl: "https://restauranterafael.com/menu"
    }
  ]
}

export type FoodSubcategoryKey = keyof typeof foodSubcategories
