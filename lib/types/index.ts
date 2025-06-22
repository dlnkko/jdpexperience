import type { ReactNode } from "react"

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
  comment?: { [key: string]: string }
  googleMapsUrl?: string
  menuUrl?: string
  subcategories?: {
    name: { [key: string]: string }
    description: { [key: string]: string }
    address: string
    rating?: number
    priceLevel?: number
    priceIndicator?: { [key: string]: string }
    comment?: { [key: string]: string }
    googleMapsUrl?: string
    menuUrl?: string
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
    welcomeTitle: string
    welcomeSubtitle: string
  }
} 