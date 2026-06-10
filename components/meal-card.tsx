"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useToast } from "@/components/toast"
import type { MenuItem } from "@/lib/menu-data"

export function MealCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  const { t, lang } = useLanguage()
  const { showToast } = useToast()

  const name = lang === "ar" ? item.nameAr : item.nameEn
  const hasMacros = item.protein !== undefined || item.carbs !== undefined || item.fat !== undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 ltr:right-3 rtl:left-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
          {item.price} {t("menu.sar")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-bold text-foreground text-balance">{name}</h3>
          {item.per100g && <span className="text-xs text-muted-foreground">{t("menu.per100")}</span>}
        </div>

        {item.calories !== undefined && (
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-md bg-accent px-2 py-1 font-semibold text-accent-foreground">
              {item.calories} {t("menu.calories")}
            </span>
          </div>
        )}

        {hasMacros && (
          <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
            <Macro label={t("menu.protein")} value={item.protein} />
            <Macro label={t("menu.carbs")} value={item.carbs} />
            <Macro label={t("menu.fat")} value={item.fat} />
          </div>
        )}

        <button
          onClick={() => showToast(t("toast.added"))}
          className="mt-auto flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
        >
          <Plus className="h-4 w-4" />
          {t("menu.addOrder")}
        </button>
      </div>
    </motion.div>
  )
}

function Macro({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-md bg-muted py-1.5">
      <div className="font-bold text-foreground">{value ?? 0}g</div>
      <div className="text-[10px] text-muted-foreground">{label}</div>
    </div>
  )
}
