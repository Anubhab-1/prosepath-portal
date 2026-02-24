import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { authors, books } from '@/data/books';
import BookCard from '@/components/books/BookCard';
import { ArrowLeft } from 'lucide-react';

const AuthorProfile = () => {
  const { id } = useParams();
  const author = authors.find(a => a.id === id);

  if (!author) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Author Not Found</h1>
          <Link to="/authors" className="mt-4 inline-block text-accent hover:underline">Back to Authors</Link>
        </div>
      </Layout>
    );
  }

  const authorBooks = books.filter(b => b.authorId === author.id);

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/authors" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> All Authors
        </Link>

        <div className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-center">
          <img src={author.avatar} alt={author.name} className="h-32 w-32 rounded-full object-cover shadow-elegant" />
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground">{author.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{author.bookCount} books · {author.genres.join(', ')}</p>
            <p className="mt-4 max-w-xl text-muted-foreground">{author.bio}</p>
          </div>
        </div>

        <h2 className="mb-8 font-display text-3xl font-bold text-foreground">Books by {author.name}</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {authorBooks.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </Layout>
  );
};

export default AuthorProfile;
