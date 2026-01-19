import { HeroSection } from '@/components/sections/Hero'
import { PhilosophySection } from '@/components/sections/Philosophy'
import { LabsSection } from '@/components/sections/Labs'
import { FoundersSection } from '@/components/sections/Founders'

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <FoundersSection />
      <PhilosophySection />
      <LabsSection />
    </main>
  )
}