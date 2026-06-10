"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { MealCard } from "@/components/meal-card"
import { menuItems, type MenuCategory } from "@/lib/menu-data"

const categories: (MenuCategory | "all")[] = [
  "all",
  "chicken",
  "fish",
  "meat",
  "carbs",
  "salads",
  "sauces",
  "desserts",
  "drinks",
]

export function MenuView() {
  const { t } = useLanguage()
  const [active, setActive] = useState<MenuCategory | "all">("all")

  const filtered = useMemo(
    () => (active === "all" ? menuItems : menuItems.filter((m) => m.category === active)),
    [active],
  )

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-foreground text-balance sm:text-5xl">{t("menu.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("menu.subtitle")}</p>
      </div>

      <div className="sticky top-16 z-30 -mx-4 mb-8 bg-background/90 px-4 py-3 backdrop-blur-md">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground/80 hover:bg-accent"
              }`}
            >
              {t(`menu.filters.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <MealCard key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
