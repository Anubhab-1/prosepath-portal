import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { authors } from '@/data/books';

const Authors = () => (
  <Layout>
    <section className="bg-gradient-cream py-12">
      <div className="container">
        <h1 className="font-display text-5xl font-bold text-foreground">Our Authors</h1>
        <p className="mt-2 text-lg text-muted-foreground">The brilliant minds behind our catalogue</p>
      </div>
    </section>
    <section className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map(author => (
          <Link
            key={author.id}
            to={`/author/${author.id}`}
            className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-elegant"
          >
            <img src={author.avatar} alt={author.name} className="h-20 w-20 rounded-full object-cover" />
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent">{author.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{author.bookCount} books</p>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{author.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Authors;
