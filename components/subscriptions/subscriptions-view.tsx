"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { subscriptionPricing, BRAND } from "@/lib/menu-data"

const durations = [10, 15, 20, 25]
const proteins = [100, 150, 200]
const mealTypes = ["single", "double", "triple"] as const

export function SubscriptionsView() {
  const { t } = useLanguage()
  const [duration, setDuration] = useState(15)
  const [protein, setProtein] = useState(150)

  const prices = subscriptionPricing[duration][protein]

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-foreground text-balance sm:text-5xl">{t("subscriptions.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("subscriptions.subtitle")}</p>
      </div>

      <div className="mb-10 grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">{t("subscriptions.duration")}</h3>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                  duration === d ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/80 hover:bg-accent"
                }`}
              >
                {d} {t("subscriptions.days")}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">{t("subscriptions.protein")} (g)</h3>
          <div className="flex flex-wrap gap-2">
            {proteins.map((p) => (
              <button
                key={p}
                onClick={() => setProtein(p)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                  protein === p ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground/80 hover:bg-accent"
                }`}
              >
                {p}g
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {mealTypes.map((type, i) => (
          <motion.div
            key={type}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className={`relative flex flex-col gap-5 rounded-3xl border p-7 shadow-sm ${
              type === "double" ? "border-primary bg-card shadow-md" : "border-border bg-card"
            }`}
          >
            {type === "double" && (
              <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                {t("subscriptions.popular")}
              </span>
            )}
            <h3 className="text-lg font-bold text-foreground">{t(`subscriptions.meals.${type}`)}</h3>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-extrabold text-primary">{prices[type]}</span>
              <span className="mb-1 text-sm text-muted-foreground">{t("subscriptions.sar")}</span>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {duration} {t("subscriptions.days")}
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {protein}g {t("subscriptions.protein")}
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {t(`subscriptions.meals.${type}`)} {t("subscriptions.mealsPerDay")}
              </li>
            </ul>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto rounded-xl py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                type === "double"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {t("subscriptions.subscribe")}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
