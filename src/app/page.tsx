import { HeroSection } from '@/components/sections/Hero'
import { PhilosophySection } from '@/components/sections/Philosophy'
import { LabsSection } from '@/components/sections/Labs'

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <PhilosophySection />
      <LabsSection />
    </main>
  )
}