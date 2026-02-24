import Layout from '@/components/layout/Layout';
import { events } from '@/data/books';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const typeColors: Record<string, string> = {
  signing: 'bg-accent text-accent-foreground',
  reading: 'bg-primary text-primary-foreground',
  workshop: 'bg-secondary text-secondary-foreground',
  launch: 'bg-destructive text-destructive-foreground',
};

const Events = () => (
  <Layout>
    <section className="bg-gradient-cream py-12">
      <div className="container">
        <h1 className="font-display text-5xl font-bold text-foreground">Events</h1>
        <p className="mt-2 text-lg text-muted-foreground">Meet our authors and fellow readers</p>
      </div>
    </section>
    <section className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <div key={event.id} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-elegant">
            <div className="aspect-video overflow-hidden">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <Badge className={typeColors[event.type]}>{event.type}</Badge>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{event.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-accent" />{event.date}</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />{event.time}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />{event.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Events;
