"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Hero() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            {t("hero.tagline")}
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Caesar Diet
            <span className="block text-primary">سيزر دايت</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("ctaBanner.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              {t("hero.cta1")}
              <Arrow className="h-4 w-4" />
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-border bg-card px-7 py-3 font-semibold text-foreground transition-colors hover:bg-accent"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-xl"
        >
          <Image
            src="/hero-healthy-meals.png"
            alt="Healthy Caesar Diet meals"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
