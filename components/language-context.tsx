"use client"

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function resolve(obj: unknown, path: string): string {
  const value = path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)
  return typeof value === "string" ? value : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("caesar-lang") as Language | null) : null
    if (stored === "ar" || stored === "en") {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === "ar" ? "rtl" : "ltr"
    if (lang === "ar") {
      html.classList.add("font-cairo")
    } else {
      html.classList.remove("font-cairo")
    }
  }, [lang])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    if (typeof window !== "undefined") {
      localStorage.setItem("caesar-lang", next)
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar")
  }, [lang, setLang])

  const t = useCallback((key: string) => resolve(translations[lang], key), [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRTL: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
