"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Leaf, Calculator, Truck, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { BRAND } from "@/lib/menu-data"

export function WhyUs() {
  const { t } = useLanguage()
  const features = [
    { icon: Leaf, key: "f1" },
    { icon: Calculator, key: "f2" },
    { icon: Truck, key: "f3" },
    { icon: Heart, key: "f4" },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-foreground text-balance sm:text-4xl">{t("why.title")}</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground">{t(`why.${f.key}.title`)}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{t(`why.${f.key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function CtaBanner() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-5 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:py-16"
      >
        <h2 className="text-3xl font-extrabold text-balance sm:text-4xl">{t("ctaBanner.title")}</h2>
        <p className="max-w-xl text-primary-foreground/90 text-pretty">{t("ctaBanner.subtitle")}</p>
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-background px-8 py-3 font-semibold text-primary transition-transform hover:scale-105"
        >
          {t("hero.cta1")}
        </a>
      </motion.div>
    </section>
  )
}
