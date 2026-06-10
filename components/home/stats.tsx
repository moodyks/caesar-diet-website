"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed, Salad, Flame } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Stats() {
  const { t } = useLanguage()
  const stats = [
    { icon: UtensilsCrossed, value: "35+", label: t("stats.meals") },
    { icon: Salad, value: "3", label: t("stats.systems") },
    { icon: Flame, value: "100%", label: t("stats.fresh") },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <s.icon className="h-7 w-7 text-primary" />
            <span className="text-2xl font-extrabold text-foreground sm:text-3xl">{s.value}</span>
            <span className="text-xs text-muted-foreground sm:text-sm">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
