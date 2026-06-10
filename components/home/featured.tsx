"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { MealCard } from "@/components/meal-card"
import { menuItems } from "@/lib/menu-data"

const featuredIds = ["creamy-chicken", "tandoori-chicken", "lemon-fish", "caesar-salad", "pesto-chicken", "izzo", "shrimp-rose", "bbq-chicken"]

export function Featured() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const featured = featuredIds
    .map((id) => menuItems.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m))

  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground text-balance sm:text-4xl">{t("featured.title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("featured.subtitle")}</p>
          </div>
          <Link
            href="/menu"
            className="flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t("featured.viewAll")}
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
        <motion.div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((item, i) => (
            <MealCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
