import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-yellow-400 hover:text-yellow-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/resources/blog" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
        </Link>
        
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
        />

        <div className="flex items-center text-sm text-gray-400 mb-6">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{post.date}</span>
          <Clock className="w-4 h-4 ml-4 mr-2" />
          <span>{post.readTime} min read</span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
        
        <div className="prose prose-invert max-w-none">
          {post.content}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Related Posts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  to={`/resources/blog/${relatedPost.slug}`}
                  className="glass-card rounded-xl p-6 hover-glow transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-400">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;