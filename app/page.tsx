import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { Systems } from "@/components/home/systems"
import { Featured } from "@/components/home/featured"
import { WhyUs, CtaBanner } from "@/components/home/why-us"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Systems />
      <Featured />
      <WhyUs />
      <CtaBanner />
    </>
  )
}
