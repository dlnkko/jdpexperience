import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Place } from "@/lib/types";

interface SubcategoryCardProps {
  place: Place;
  language: string;
  onClick?: () => void;
}

export function SubcategoryCard({ place, language, onClick }: SubcategoryCardProps) {
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
              src={place.image}
              alt={place.name[language]}
              className="w-full h-full object-cover rounded-l-2xl"
              style={{ height: '100%' }}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg";
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
  );
} 