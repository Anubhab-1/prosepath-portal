import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-books.jpg';
import { Button } from '@/components/ui/button';

const HeroBanner = () => (
  <section className="relative overflow-hidden bg-gradient-navy">
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
    </div>
    <div className="container relative z-10 py-24 md:py-36">
      <div className="max-w-2xl animate-fade-in space-y-6">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Meridian Publishing
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.1] text-primary-foreground md:text-7xl">
          Stories That
          <br />
          <span className="text-gradient-gold">Define</span> Generations
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/80">
          Discover extraordinary voices and timeless narratives from our curated collection of over 10,000 titles.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button asChild className="h-12 gap-2 rounded-full bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent/90">
            <Link to="/catalogue">
              Browse Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/authors">Meet Our Authors</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroBanner;
