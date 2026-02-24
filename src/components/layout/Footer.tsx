import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpeg';

const Footer = () => (
  <footer className="bg-gradient-navy text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="Kathakhahon" className="h-12 w-auto" />
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            Bringing extraordinary stories to life. Discover your next great read.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">Explore</h4>
          <nav className="flex flex-col gap-2">
            {['Books', 'Authors', 'Blog', 'Events'].map(item => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">Company</h4>
          <nav className="flex flex-col gap-2">
            {['About Us', 'Careers', 'Press', 'Contact'].map(item => (
              <span key={item} className="cursor-pointer text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                {item}
              </span>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground/50">Legal</h4>
          <nav className="flex flex-col gap-2">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <span key={item} className="cursor-pointer text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                {item}
              </span>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} Kathakhahon Publishing. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
