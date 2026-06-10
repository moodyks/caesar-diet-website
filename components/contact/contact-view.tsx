"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { useToast } from "@/components/toast"
import { BRAND } from "@/lib/menu-data"

export function ContactView() {
  const { t } = useLanguage()
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    showToast(t("contact.form.success"))
    setForm({ name: "", phone: "", message: "" })
  }

  const info = [
    { icon: Phone, title: t("contact.phone"), text: BRAND.phone },
    { icon: MapPin, title: t("contact.location"), text: t("contact.locationText") },
    { icon: Clock, title: t("contact.hours"), text: t("contact.hoursText") },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-foreground text-balance sm:text-5xl">{t("contact.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("contact.subtitle")}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          {info.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
          <a
            href={`tel:${BRAND.phone}`}
            className="rounded-2xl bg-primary py-4 text-center font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
          >
            {t("contact.callNow")}
          </a>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <h3 className="text-xl font-bold text-foreground">{t("contact.form.title")}</h3>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.form.name")}</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.form.phone")}</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">{t("contact.form.message")}</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.01] active:scale-95"
          >
            {t("contact.form.send")}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
