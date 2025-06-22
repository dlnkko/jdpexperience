import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { Section } from "@/lib/types"

interface SectionCardProps {
  section: Section
  language: string
  onClick: () => void
}

export function SectionCard({ section, language, onClick }: SectionCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card
        className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 border-orange-200 shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm"
        onClick={onClick}
      >
        <CardContent className="p-8 text-center">
          <motion.div
            className="text-6xl mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {section.emoji}
          </motion.div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="font-bold text-orange-500 text-[28px] leading-tight">{section.title[language]}</h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 