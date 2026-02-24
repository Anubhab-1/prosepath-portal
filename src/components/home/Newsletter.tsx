import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the Meridian community!', { description: 'Check your inbox for a confirmation.' });
      setEmail('');
    }
  };

  return (
    <section className="bg-gradient-navy py-20">
      <div className="container text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-accent">Stay Connected</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-primary-foreground">Join Our Literary Circle</h2>
        <p className="mx-auto mt-4 max-w-md text-primary-foreground/70">
          Get exclusive previews, author interviews, and curated reading lists delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="h-12 flex-1 rounded-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
          />
          <Button type="submit" className="h-12 rounded-full bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
