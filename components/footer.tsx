"use client"

import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { Logo } from "@/components/logo"
import { BRAND } from "@/lib/menu-data"

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/menu", key: "nav.menu" },
  { href: "/subscriptions", key: "nav.subscriptions" },
  { href: "/calculator", key: "nav.calculator" },
  { href: "/contact", key: "nav.contact" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-foreground">{t("footer.quickLinks")}</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold text-foreground">{t("footer.contactInfo")}</h3>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${BRAND.phone}`} dir="ltr" className="hover:text-primary">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t("contact.locationText")}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t("contact.hoursText")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Caesar Diet · سيزر دايت — {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
