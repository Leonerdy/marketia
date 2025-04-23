import { Navigation } from '@/components/ui/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Benefits } from '@/components/sections/Benefits';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
