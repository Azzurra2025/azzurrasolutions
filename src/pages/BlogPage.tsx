import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  return (
    <>
      <HeroSection
        title="Insights & Resources"
        subtitle="Stay informed with the latest industry trends, insights, and best practices."
        backgroundImage="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Latest Articles"
        primaryButtonLink="#latest"
      />

      {/* Featured Article */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Article"
            subtitle="Our latest thinking on technology trends and innovations."
            centered
          />
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full">
                    {blogPosts[0].tags[0]}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-2">
                  By {blogPosts[0].author} • {blogPosts[0].date}
                </p>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].summary}
                </p>
                
                <div className="mb-6">
                  <p className="text-gray-600">
                    Artificial intelligence is rapidly transforming how enterprise software is conceived, built, and maintained. From automated code generation to intelligent testing and self-healing systems, AI is revolutionizing the development lifecycle...
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag) => (
                    <span key={tag} className="inline-block px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button as="link" to={`/blog/${blogPosts[0].id}`} variant="primary">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="latest" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Latest Articles"
            subtitle="Stay informed with our latest insights and thought leadership."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button as="link" to="/blog/archive" variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Topic Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Explore by Topic"
            subtitle="Browse our content by subject area to find exactly what you're looking for."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <a href="/blog/category/ai" className="group">
              <div className="card p-6 text-center h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                <img
                  src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Artificial Intelligence"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200">Artificial Intelligence</h3>
                <p className="text-gray-600">
                  Machine learning, natural language processing, and AI implementation strategies.
                </p>
              </div>
            </a>
            
            <a href="/blog/category/cloud" className="group">
              <div className="card p-6 text-center h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                <img
                  src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Cloud & DevOps"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200">Cloud & DevOps</h3>
                <p className="text-gray-600">
                  Cloud migration, containerization, CI/CD, and modern infrastructure.
                </p>
              </div>
            </a>
            
            <a href="/blog/category/security" className="group">
              <div className="card p-6 text-center h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                <img
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Cybersecurity"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200">Cybersecurity</h3>
                <p className="text-gray-600">
                  Threat intelligence, security best practices, and compliance frameworks.
                </p>
              </div>
            </a>
            
            <a href="/blog/category/digital-transformation" className="group">
              <div className="card p-6 text-center h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                <img
                  src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Digital Transformation"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors duration-200">Digital Transformation</h3>
                <p className="text-gray-600">
                  Business innovation, technology strategy, and organizational change.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-100 mb-8">
              Subscribe to our newsletter to receive the latest insights and updates directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 flex-grow"
              />
              <Button 
                type="submit" 
                variant="secondary"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-gray-200 mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;