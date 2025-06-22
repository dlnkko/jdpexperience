import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink, Menu, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { Place } from "@/lib/types"

interface PlaceCardProps {
  place: Place
  language: string
  translations: any
  onGetDirections: (address: string, placeName: string, originAddress?: string) => void
}

export function PlaceCard({ place, language, translations, onGetDirections }: PlaceCardProps) {
  const getPriceIndicator = (level: number | null | undefined) => {
    if (!level) return null
    
    const indicators = {
      1: { es: "Bajo", en: "Low", pt: "Baixo", fr: "Bas" },
      2: { es: "Medio", en: "Medium", pt: "Médio", fr: "Moyen" },
      3: { es: "Medio-Alto", en: "Medium-High", pt: "Médio-Alto", fr: "Moyen-Élevé" },
      4: { es: "Alto", en: "High", pt: "Alto", fr: "Élevé" }
    }
    
    return indicators[level as keyof typeof indicators] || null
  }

  const priceIndicator = getPriceIndicator(place.priceLevel) || place.priceIndicator

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white/80 backdrop-blur-sm border-orange-200">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-[28px] font-bold text-orange-500 leading-tight">{place.name[language]}</CardTitle>
              <CardDescription className="text-sm">{place.description[language]}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          {/* Rating and Price */}
          <div className="flex items-center gap-2 mb-3">
            {place.rating && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                ⭐ {place.rating.toFixed(1)} ({place.userRatingsTotal})
              </Badge>
            )}
            {priceIndicator && (
              <Badge 
                variant="secondary" 
                className={`
                  ${priceIndicator[language as keyof typeof priceIndicator] === translations.priceAlto ? 'bg-red-100 text-red-800' :
                    priceIndicator[language as keyof typeof priceIndicator] === translations.priceMedio ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }
                `}
              >
                {priceIndicator[language as keyof typeof priceIndicator]}
              </Badge>
            )}
          </div>

          {/* Comment */}
          {place.comment && (
            <div className="mb-3 p-2 bg-blue-50 rounded-lg border-l-4 border-blue-200">
              <p className="text-xs text-blue-800 italic">"{place.comment[language]}"</p>
            </div>
          )}

          {/* Address */}
          <div className="flex items-start gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-600">
              {place.address}
            </p>
          </div>

          {/* External Links */}
          <div className="flex gap-2 mb-3">
            {place.googleMapsUrl && (
              <Button
                onClick={() => window.open(place.googleMapsUrl, '_blank')}
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Google Maps
              </Button>
            )}
            {place.menuUrl && (
              <Button
                onClick={() => window.open(place.menuUrl, '_blank')}
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
              >
                <Menu className="w-3 h-3 mr-1" />
                {place.menuUrl ? 'Sitio Web' : 'Menú'}
              </Button>
            )}
          </div>

          {/* Direction Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <Button
              onClick={() => onGetDirections(place.address, place.name[language], "Calle Almirante Miguel Grau 1430, Barranco")}
              className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-xl active:shadow-md"
              size="sm"
            >
              {translations.stelar}
            </Button>
            <Button
              onClick={() => onGetDirections(place.address, place.name[language], "Jiron Centenario 179, Barranco")}
              className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-xl active:shadow-md"
              size="sm"
            >
              {translations.atelier}
            </Button>
            <Button
              onClick={() => onGetDirections(place.address, place.name[language])}
              className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-xl active:shadow-md"
              size="sm"
            >
              {translations.currentLocation}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 