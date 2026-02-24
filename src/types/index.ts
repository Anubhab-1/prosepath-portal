export interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  description: string;
  longDescription: string;
  cover: string;
  price: number;
  originalPrice?: number;
  genre: string;
  rating: number;
  reviewCount: number;
  isbn: string;
  pages: number;
  publishDate: string;
  language: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  bookCount: number;
  genres: string[];
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: 'signing' | 'reading' | 'workshop' | 'launch';
}

export interface Review {
  id: string;
  bookId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
