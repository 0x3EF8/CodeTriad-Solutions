'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Team from '@/components/sections/Team';
import Footer from '@/components/layout/Footer';
import { useDarkMode } from '@/lib/hooks/useDarkMode';

export default function Home() {
  const { isDarkMode, isMounted, toggleDarkMode } = useDarkMode();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="px-2 sm:px-4 lg:px-8">
          <div className="space-y-6 sm:space-y-6">
            <section id="home">
              <Hero isDarkMode={isDarkMode} />
            </section>
            <section id="about">
              <About isDarkMode={isDarkMode} />
            </section>
            <section id="services">
              <Services isDarkMode={isDarkMode} />
            </section>
            <section id="projects">
              <Projects isDarkMode={isDarkMode} />
            </section>
            <section id="team">
              <Team isDarkMode={isDarkMode} />
            </section>
          </div>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
