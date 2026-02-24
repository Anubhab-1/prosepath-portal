import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { books } from '@/data/books';
import BookCard from '@/components/books/BookCard';

const FeaturedBooks = () => {
  const featured = books.filter(b => b.isFeatured);

  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent">Curated Selection</p>
            <h2 className="mt-2 font-display text-4xl font-bold text-foreground">Featured Books</h2>
          </div>
          <Link to="/catalogue" className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent md:flex">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
