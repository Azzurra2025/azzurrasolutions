import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <div 
      className="card h-full flex flex-col"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeIn 0.5s ease-in-out forwards',
        opacity: 0
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{post.date} | By {post.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors duration-200 group"
        >
          Read More 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;