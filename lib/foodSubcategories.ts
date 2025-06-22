import restaurantsData from '../app/api/google-maps/data/restaurants.json'

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
  "carnes-y-parrilla": restaurantsData.carnes_y_parrilla,
  "comida-criolla": restaurantsData.comida_criolla,
  "desayunos-y-postres": restaurantsData.desayunos_y_postres,
  "comida-china-e-internacional": restaurantsData.comida_china_e_internacional,
  "comida-rapida": restaurantsData.comida_rapida
}

export type FoodSubcategoryKey = keyof typeof foodSubcategories
