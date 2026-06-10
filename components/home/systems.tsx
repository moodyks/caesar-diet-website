"use client"

import { motion } from "framer-motion"
import { Flame, Leaf, Scale } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Systems() {
  const { t } = useLanguage()
  const systems = [
    { icon: Flame, key: "keto", color: "bg-secondary text-secondary-foreground" },
    { icon: Leaf, key: "lowcarb", color: "bg-primary text-primary-foreground" },
    { icon: Scale, key: "calories", color: "bg-accent text-accent-foreground" },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-foreground text-balance sm:text-4xl">{t("systems.title")}</h2>
        <p className="mt-2 text-muted-foreground">{t("systems.subtitle")}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {systems.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${s.color}`}>
              <s.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{t(`systems.${s.key}.name`)}</h3>
            <p className="text-sm text-muted-foreground">{t(`systems.${s.key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
