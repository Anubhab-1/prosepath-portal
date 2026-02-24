import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import type { Book } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col">
      <Link to={`/book/${book.id}`} className="relative mb-4 overflow-hidden rounded-lg">
        <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-book transition-shadow duration-300 group-hover:shadow-elegant">
          <img
            src={book.cover}
            alt={book.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {book.isBestseller && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            Bestseller
          </span>
        )}
        {book.isNewArrival && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            New
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col">
        <Link to={`/book/${book.id}`}>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
            {book.title}
          </h3>
        </Link>
        <Link to={`/author/${book.authorId}`} className="mt-1 text-sm text-muted-foreground hover:text-accent">
          {book.author}
        </Link>
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium text-foreground">{book.rating}</span>
          <span className="text-sm text-muted-foreground">({book.reviewCount})</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">${book.price}</span>
            {book.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${book.originalPrice}</span>
            )}
          </div>
          <Button
            size="sm"
            variant="outline"
            className="h-9 gap-1.5 border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={(e) => {
              e.preventDefault();
              addToCart(book);
            }}
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
