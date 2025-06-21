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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
        onClick={onClick}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{place.emoji || "🍽️"}</div>
              <div>
                <CardTitle className="text-lg">{place.name[language]}</CardTitle>
                <CardDescription className="text-sm mt-1">
                  {place.description[language]}
                </CardDescription>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-600">{place.address}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 