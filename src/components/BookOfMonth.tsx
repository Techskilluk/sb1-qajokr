import React from 'react';
import { BookOpen, Star, ArrowRight } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  description: string;
  rating: number;
  image: string;
  amazonLink: string;
  category: 'Product' | 'Growth';
}

const books: Book[] = [
  {
    title: "Inspired: How to Create Tech Products Customers Love",
    author: "Marty Cagan",
    description: "A comprehensive guide to modern product management practices, featuring real-world examples from top tech companies.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000",
    amazonLink: "#",
    category: "Product"
  },
  {
    title: "Hacking Growth",
    author: "Sean Ellis & Morgan Brown",
    description: "Learn how today's fastest-growing companies drive breakout success through systematic experimentation and data-driven strategies.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&w=1000",
    amazonLink: "#",
    category: "Growth"
  }
];

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300">
      <div className="relative h-48">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{book.rating}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm">{book.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{book.title}</h3>
        <p className="text-indigo-400 mb-4">by {book.author}</p>
        <p className="text-gray-300 mb-6">{book.description}</p>
        <a
          href={book.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

const BookOfMonth: React.FC = () => {
  return (
    <section id="books" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Books of the Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookOfMonth;