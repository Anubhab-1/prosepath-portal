import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { books } from '@/data/books';
import { Input } from '@/components/ui/input';
import BookCard from '@/components/books/BookCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.genre.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Home
        </Link>
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-center font-display text-4xl font-bold text-foreground">Search</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="Search books, authors, genres..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="h-14 rounded-full pl-12 text-lg"
            />
          </div>
        </div>
        {query.trim() && (
          <div className="mt-10">
            <p className="mb-6 text-sm text-muted-foreground">{results.length} result{results.length !== 1 ? 's' : ''} for "{query}"</p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {results.map(book => <BookCard key={book.id} book={book} />)}
            </div>
            {results.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">No results found. Try a different search term.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
