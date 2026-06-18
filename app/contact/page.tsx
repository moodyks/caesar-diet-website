"use client"

import { useLanguage } from "@/components/language-context"
import { BRAND } from "@/lib/menu-data"

export default function ContactPage() {
  const { isRTL } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 pt-16">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-[#1D9E75] mb-4">
          {isRTL ? "تواصل معنا" : "Contact Us"}
        </h1>

          <div className="bg-[#F8FAF9] rounded-2xl p-8 space-y-6 mt-8">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">📞</span>
            <span className="text-lg font-medium">0579741866</span>
          </div>

           href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1D9E75] text-white px-6 py-3 rounded-full hover:bg-[#0F6E56] transition-colors"
 <a>
            {isRTL ? "اطلب عبر واتساب" : "Order via WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  )
}