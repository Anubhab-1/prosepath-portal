import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/books';

const Blog = () => (
  <Layout>
    <section className="bg-gradient-cream py-12">
      <div className="container">
        <h1 className="font-display text-5xl font-bold text-foreground">Editorial</h1>
        <p className="mt-2 text-lg text-muted-foreground">Insights, interviews, and inspiration</p>
      </div>
    </section>
    <section className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <article key={post.id} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-elegant">
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">{post.category}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground group-hover:text-accent">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
