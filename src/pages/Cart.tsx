import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/30" />
          <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Your Cart is Empty</h1>
          <p className="mt-2 text-muted-foreground">Discover your next great read in our catalogue.</p>
          <Button asChild className="mt-6 rounded-full bg-accent px-8 text-accent-foreground hover:bg-accent/90">
            <Link to="/catalogue">Browse Books</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/catalogue" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Continue Shopping
        </Link>
        <h1 className="mb-8 font-display text-4xl font-bold text-foreground">Shopping Cart</h1>

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {items.map(({ book, quantity }) => (
              <div key={book.id} className="flex gap-6 rounded-xl border border-border bg-card p-4">
                <Link to={`/book/${book.id}`} className="h-32 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link to={`/book/${book.id}`} className="font-display text-lg font-semibold text-foreground hover:text-accent">{book.title}</Link>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(book.id, quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(book.id, quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="ml-2 h-8 w-8 text-destructive" onClick={() => removeFromCart(book.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-lg font-bold text-foreground">${(book.price * quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-foreground">Order Summary</h2>
            <Separator className="my-4" />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span><span>Free</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between text-lg font-bold text-foreground">
              <span>Total</span><span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="mt-6 w-full rounded-full bg-accent py-6 text-base font-semibold text-accent-foreground hover:bg-accent/90">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
