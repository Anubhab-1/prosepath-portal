import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { books, reviews } from '@/data/books';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import BookCard from '@/components/books/BookCard';
import { toast } from 'sonner';

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Book Not Found</h1>
          <Link to="/catalogue" className="mt-4 inline-block text-accent hover:underline">Back to Catalogue</Link>
        </div>
      </Layout>
    );
  }

  const bookReviews = reviews.filter(r => r.bookId === book.id);
  const relatedBooks = books.filter(b => b.genre === book.genre && b.id !== book.id).slice(0, 4);

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/catalogue" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Back to Catalogue
        </Link>

        <div className="grid gap-12 md:grid-cols-[380px_1fr]">
          <div className="aspect-[2/3] overflow-hidden rounded-xl shadow-book">
            <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
          </div>

          <div className="space-y-6">
            {book.isBestseller && (
              <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">Bestseller</span>
            )}
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">{book.title}</h1>
            <Link to={`/author/${book.authorId}`} className="inline-block text-lg text-muted-foreground hover:text-accent">
              by {book.author}
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{book.rating}</span>
              <span className="text-sm text-muted-foreground">({book.reviewCount} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">${book.price}</span>
              {book.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${book.originalPrice}</span>
              )}
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{book.longDescription}</p>

            <div className="flex flex-wrap gap-3">
              <Button
                className="h-12 gap-2 rounded-full bg-accent px-10 font-semibold text-accent-foreground hover:bg-accent/90"
                onClick={() => { addToCart(book); toast.success(`"${book.title}" added to cart`); }}
              >
                <ShoppingBag className="h-5 w-5" /> Add to Cart
              </Button>
              <Button
                variant="outline"
                className="h-12 gap-2 rounded-full px-6"
                onClick={() => toast.success('Added to wishlist')}
              >
                <Heart className="h-5 w-5" /> Wishlist
              </Button>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              {[
                ['Pages', `${book.pages}`],
                ['Language', book.language],
                ['ISBN', book.isbn],
                ['Published', new Date(book.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-medium text-muted-foreground">{label}</p>
                  <p className="mt-1 text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {bookReviews.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Reader Reviews</h2>
            <div className="space-y-6">
              {bookReviews.map(review => (
                <div key={review.id} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{review.userName}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-border'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-muted-foreground">{review.comment}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedBooks.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-8 font-display text-3xl font-bold text-foreground">You May Also Like</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {relatedBooks.map(b => <BookCard key={b.id} book={b} />)}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default BookDetail;
