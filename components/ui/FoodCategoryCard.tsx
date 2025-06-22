import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { Place } from "@/lib/types"

interface FoodCategoryCardProps {
  place: Place
  language: string
  translations: any
  onClick: () => void
}

export function FoodCategoryCard({ place, language, translations, onClick }: FoodCategoryCardProps) {
  // Función para obtener la imagen específica según la subcategoría
  const getCategoryImage = (categoryName: string) => {
    const categoryImages: { [key: string]: string } = {
      "Carnes y Parrilla": "/images/food-categories/MK4grXJz7jgDwBhdK-2400-x_11zon.webp",
      "Meats & Grill": "/images/food-categories/MK4grXJz7jgDwBhdK-2400-x_11zon.webp",
      "Carnes e Grelhados": "/images/food-categories/MK4grXJz7jgDwBhdK-2400-x_11zon.webp",
      "Viandes et Grillades": "/images/food-categories/MK4grXJz7jgDwBhdK-2400-x_11zon.webp",
      
      "Comida Criolla": "/images/food-categories/criolla.jpg",
      "Creole Food": "/images/food-categories/criolla.jpg",
      "Comida Crioula": "/images/food-categories/criolla.jpg",
      "Cuisine Créole": "/images/food-categories/criolla.jpg",
      
      "Desayunos y Postres": "/images/food-categories/desayunos.webp",
      "Breakfasts & Desserts": "/images/food-categories/desayunos.webp",
      "Cafés da Manhã e Sobremesas": "/images/food-categories/desayunos.webp",
      "Petits-déjeuners et Desserts": "/images/food-categories/desayunos.webp",
      
      "Comida China e Internacional": "/images/food-categories/chifa.jpeg",
      "Chinese & International Food": "/images/food-categories/chifa.jpeg",
      "Comida Chinesa e Internacional": "/images/food-categories/chifa.jpeg",
      "Cuisine Chinoise et Internationale": "/images/food-categories/chifa.jpeg",
      
      "Comida Rápida": "/images/food-categories/fastfood.png",
      "Fast Food": "/images/food-categories/fastfood.png",
      "Restauration Rapide": "/images/food-categories/fastfood.png",
    }
    
    return categoryImages[categoryName] || "/images/food-categories/default.webp"
  }

  const categoryImage = getCategoryImage(place.name[language])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] rounded-2xl bg-white/80 backdrop-blur-sm border-orange-200 h-[120px] md:h-[160px] flex"
        onClick={onClick}
      >
        <div className="flex h-full w-full items-stretch">
          {/* Imagen en la parte izquierda */}
          <div className="w-24 md:w-32 flex-shrink-0 h-full flex items-stretch">
            <img 
              src={categoryImage} 
              alt={place.name[language]}
              className="w-full h-full object-cover rounded-l-2xl"
              style={{ height: '100%' }}
              onError={(e) => {
                // Si la imagen no carga, usar una imagen por defecto
                e.currentTarget.src = "/placeholder.jpg"
              }}
            />
          </div>
          
          {/* Contenido en la parte derecha */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <CardTitle className="text-[20px] md:text-[20px] font-bold text-orange-500 leading-tight mb-1">
                  {place.name[language]}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {place.description[language]}
                </CardDescription>
              </div>
              <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 ml-2" />
            </div>
            
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600">{place.address}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
} 