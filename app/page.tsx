import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { MilestonesSection } from '@/components/sections/MilestonesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative bg-ctp-base">
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <MilestonesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
