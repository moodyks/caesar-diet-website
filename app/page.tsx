"use client"

import { useLanguage } from "@/components/language-context"
import { Logo } from "@/components/logo"

export default function HomePage() {
  const { isRTL } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <h1 className="text-3xl font-bold text-[#1D9E75] mb-3">
          {isRTL ? "قريباً" : "Coming Soon"}
        </h1>
        <p className="text-gray-500">
          {isRTL
            ? "نعمل على تطوير الصفحة الرئيسية، تابعونا قريباً"
            : "We're working on our homepage, stay tuned"}
        </p>
      </div>
    </div>
  )
}