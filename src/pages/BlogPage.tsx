import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Product Management Insights
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Expert perspectives on product strategy, growth, and user-centric design
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  to={`/resources/blog/${post.slug}`}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;