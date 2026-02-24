import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { books } from '@/data/books';
import BookCard from '@/components/books/BookCard';

const BestsellerCarousel = () => {
  const bestsellers = books.filter(b => b.isBestseller);

  return (
    <section className="bg-gradient-cream py-20">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent">Reader Favorites</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-foreground">Bestsellers</h2>
          </div>
          <Link to="/catalogue" className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent md:flex">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerCarousel;
