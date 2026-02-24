import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import BookCard from '@/components/books/BookCard';
import { books, genres } from '@/data/books';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const Catalogue = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('all');
  const [sort, setSort] = useState('title');

  const filtered = useMemo(() => {
    let result = books.filter(b => {
      const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase());
      const matchGenre = genre === 'all' || b.genre === genre;
      return matchSearch && matchGenre;
    });

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'newest': result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()); break;
      default: result.sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [search, genre, sort]);

  return (
    <Layout>
      <section className="bg-gradient-cream py-12">
        <div className="container">
          <h1 className="font-display text-5xl font-bold text-foreground">Book Catalogue</h1>
          <p className="mt-2 text-lg text-muted-foreground">Explore our complete collection</p>
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by title or author..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {genres.map(g => (
                <SelectItem key={g} value={g}>{g}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Title A–Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">{filtered.length} books found</p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">No books match your search criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => { setSearch(''); setGenre('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Catalogue;
