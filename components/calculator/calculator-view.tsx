"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-context"

const activityFactors: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
}

interface Result {
  calories: number
  protein: number
  carbs: number
  fat: number
}

export function CalculatorView() {
  const { t } = useLanguage()
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [activity, setActivity] = useState("moderate")
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("maintain")
  const [result, setResult] = useState<Result | null>(null)

  const calculate = (e: React.FormEvent) => {
    e.preventDefault()
    const w = Number(weight)
    const h = Number(height)
    const a = Number(age)
    if (!w || !h || !a) return

    // Mifflin-St Jeor
    const bmr = gender === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161
    let calories = bmr * activityFactors[activity]
    if (goal === "lose") calories -= 500
    if (goal === "gain") calories += 500
    calories = Math.round(calories)

    const protein = Math.round((calories * 0.3) / 4)
    const carbs = Math.round((calories * 0.4) / 4)
    const fat = Math.round((calories * 0.3) / 9)

    setResult({ calories, protein, carbs, fat })
  }

  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-foreground text-balance sm:text-5xl">{t("calculator.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("calculator.subtitle")}</p>
      </div>

      <form onSubmit={calculate} className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-3">
          <Field label={t("calculator.weight")} value={weight} onChange={setWeight} />
          <Field label={t("calculator.height")} value={height} onChange={setHeight} />
          <Field label={t("calculator.age")} value={age} onChange={setAge} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">{t("calculator.gender")}</label>
            <div className="flex gap-2">
              {(["male", "female"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
                    gender === g ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/80"
                  }`}
                >
                  {t(`calculator.${g}`)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">{t("calculator.goal")}</label>
            <div className="flex gap-2">
              {(["lose", "maintain", "gain"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`flex-1 rounded-xl px-2 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                    goal === g ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground/80"
                  }`}
                >
                  {t(`calculator.goals.${g}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-foreground">{t("calculator.activity")}</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          >
            {Object.keys(activityFactors).map((key) => (
              <option key={key} value={key}>
                {t(`calculator.activityLevels.${key}`)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.01] active:scale-95"
        >
          {t("calculator.calculate")}
        </button>
      </form>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6 text-center">
              <p className="text-sm text-muted-foreground">{t("calculator.results.calories")}</p>
              <p className="text-5xl font-extrabold text-primary">{result.calories}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <MacroResult label={t("calculator.results.protein")} value={result.protein} />
              <MacroResult label={t("calculator.results.carbs")} value={result.carbs} />
              <MacroResult label={t("calculator.results.fat")} value={result.fat} />
            </div>
            <Link
              href="/subscriptions"
              className="mt-6 block rounded-xl bg-secondary py-3 text-center text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.01]"
            >
              {t("calculator.results.viewPlans")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-foreground">{label}</label>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}

function MacroResult({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-muted p-4 text-center">
      <div className="text-2xl font-extrabold text-foreground">{value}g</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
