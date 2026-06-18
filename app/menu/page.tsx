"use client"

import { useLanguage } from "@/components/language-context"

export default function MenuPage() {
  const { isRTL } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 pt-16">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#1D9E75] mb-3">
          {isRTL ? "قريباً" : "Coming Soon"}
        </h1>
        <p className="text-gray-500">
          {isRTL
            ? "القائمة قيد التحديث، تابعونا قريباً"
            : "Our menu is being updated, stay tuned"}
        </p>
      </div>
    </div>
  )
}