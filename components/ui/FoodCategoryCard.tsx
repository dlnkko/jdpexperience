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
        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] rounded-2xl bg-white/80 backdrop-blur-sm border-orange-200"
        onClick={onClick}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">{place.emoji || "🍽️"}</div>
              <div>
                <CardTitle className="text-[28px] font-bold text-orange-500 leading-tight">{place.name[language]}</CardTitle>
                <CardDescription className="text-sm mt-2">
                  {place.description[language]}
                </CardDescription>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-orange-400" />
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