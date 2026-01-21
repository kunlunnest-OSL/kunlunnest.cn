import { HeroSection } from '@/components/sections/Hero'
import { FoundersSection } from '@/components/sections/Founders'
import { LabsSection } from '@/components/sections/Labs'

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <FoundersSection />
      <LabsSection />
    </main>
  )
}