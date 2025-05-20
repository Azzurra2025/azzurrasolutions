import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Button from '../components/Button';
import { blogPosts } from '../data/blogPosts';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button as="link" to="/blog" variant="primary">
            Back to All Articles
          </Button>
        </div>
      </div>
    );
  }
  
  // Find next and previous blog posts
  const currentIndex = blogPosts.findIndex(p => p.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const dummyContent = `
    <p>In the rapidly evolving landscape of enterprise software development, artificial intelligence (AI) is no longer just a buzzword but a transformative force reshaping how applications are conceived, built, and maintained. As we move through 2025, the integration of AI into the software development lifecycle is accelerating, bringing both unprecedented opportunities and new challenges for organizations across industries.</p>
    
    <h2>The Evolution of AI in Software Development</h2>
    
    <p>Traditionally, software development has been a human-intensive process, requiring skilled developers to write code, test functionality, and maintain systems. While tools and methodologies have evolved over decades to improve efficiency, the fundamental approach remained largely unchanged. However, the recent advances in machine learning, particularly large language models (LLMs) and generative AI, are fundamentally altering this paradigm.</p>
    
    <p>Today's AI systems can generate code, identify bugs, optimize performance, and even design user interfaces. This shift is not merely an incremental improvement in developer productivity but represents a fundamental rethinking of how software is created and evolved.</p>
    
    <h2>Key Areas of AI Impact</h2>
    
    <h3>1. Code Generation and Assistance</h3>
    
    <p>AI-powered coding assistants have moved beyond simple autocomplete functionality to understanding context, suggesting entire functions, and even implementing complex algorithms based on natural language descriptions. Enterprise teams using these tools report productivity gains of 30-40%, allowing developers to focus on higher-level architecture and business logic rather than routine coding tasks.</p>
    
    <h3>2. Intelligent Testing</h3>
    
    <p>AI-driven testing tools are revolutionizing quality assurance by automatically generating test cases, identifying potential edge cases, and prioritizing testing resources based on risk analysis. These systems learn from past bugs and user behavior patterns to focus testing efforts where issues are most likely to occur, significantly improving test coverage while reducing manual effort.</p>
    
    <h3>3. Self-Healing Systems</h3>
    
    <p>Perhaps most transformative is the emergence of self-healing systems that can detect anomalies, diagnose root causes, and implement fixes with minimal human intervention. These AI-powered monitoring and maintenance tools are particularly valuable in cloud environments, where they can automatically scale resources, reconfigure services, and even rollback problematic deployments before users experience significant disruption.</p>
    
    <h2>Enterprise Adoption Challenges</h2>
    
    <p>Despite the clear benefits, enterprises face several challenges in adopting AI-powered development approaches:</p>
    
    <ul>
      <li><strong>Governance and Control:</strong> Organizations must establish clear policies about when and how AI-generated code enters production systems, particularly in regulated industries.</li>
      <li><strong>Skill Transformation:</strong> Developers need to develop new skills, focusing less on writing every line of code and more on prompt engineering, code review, and architectural oversight.</li>
      <li><strong>Security Concerns:</strong> AI systems may inadvertently introduce vulnerabilities or dependencies that require new security validation approaches.</li>
      <li><strong>Integration with Legacy Processes:</strong> Many enterprises struggle to integrate AI development tools with existing workflows, CI/CD pipelines, and governance frameworks.</li>
    </ul>
    
    <h2>Future Outlook</h2>
    
    <p>Looking ahead, we anticipate several key trends in AI-powered enterprise software development:</p>
    
    <ol>
      <li><strong>Domain-Specific Development Assistants:</strong> Rather than general-purpose coding aids, we'll see the rise of specialized AI assistants trained on industry-specific codebases and compliance requirements.</li>
      <li><strong>Autonomous Micro-Updates:</strong> Systems will increasingly be able to implement small improvements and optimizations automatically, based on usage patterns and performance metrics.</li>
      <li><strong>AI-Human Collaboration Models:</strong> New workflow patterns will emerge that optimize the division of labor between AI systems and human developers, particularly for complex enterprise applications.</li>
      <li><strong>Democratized Development:</strong> Business analysts and subject matter experts will increasingly be able to create and modify applications through natural language interfaces, with AI handling the technical implementation.</li>
    </ol>
    
    <h2>Conclusion</h2>
    
    <p>The integration of AI into enterprise software development represents a fundamental shift in how technology solutions are created and maintained. Organizations that successfully navigate this transition—developing appropriate governance, reskilling their teams, and reimagining their development processes—will gain significant competitive advantages through faster innovation, higher quality software, and more adaptable systems.</p>
    
    <p>As we continue through 2025 and beyond, the question for enterprises is no longer whether to adopt AI-powered development approaches, but how to implement them effectively while managing the associated risks and organizational changes.</p>
  `;

  return (
    <>
      {/* Blog Hero */}
      <section className="pt-32 pb-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Button as="link" to="/blog" variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Articles
              </Button>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link 
                  key={tag} 
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full hover:bg-primary-200 transition-colors duration-200"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="relative aspect-w-16 aspect-h-9 max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium mb-8 text-gray-700 border-l-4 border-primary-500 pl-4 italic">
                  {post.summary}
                </p>
                
                <div dangerouslySetInnerHTML={{ __html: dummyContent }} />
              </div>
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    aria-label="Share on Twitter"
                  >
                    Twitter
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
                    aria-label="Share on LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                    aria-label="Share via Email"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm sticky top-32">
                <h3 className="text-xl font-bold mb-4">About the Author</h3>
                
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{post.author}</h4>
                    <p className="text-gray-600">CTO, Azzurra Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {post.author === 'Jaya Pulicherla' 
                    ? 'Jaya is an expert in cloud architecture and AI-driven platforms. With a background in enterprise systems and emerging technologies, she leads Azzurra\'s technical innovation strategy and R&D initiatives.'
                    : post.author === 'Michael Chen'
                    ? 'Michael brings 12+ years of information security expertise to Azzurra. He holds CISSP and CEH certifications and has helped numerous organizations implement robust security frameworks.'
                    : post.author === 'Habibur Rahman'
                    ? 'Habibur oversees project execution and ensures client success across all verticals. His methodical approach to delivery management has resulted in consistently high client satisfaction rates.'
                    : 'Viswanath is a visionary leader with over 10 years of experience in enterprise IT and digital transformation. His strategic insight has guided Azzurra Solutions to consistent growth.'}
                </p>
                
                <div className="border-t border-gray-200 pt-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Popular Articles</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== id)
                      .slice(0, 3)
                      .map(relatedPost => (
                        <Link 
                          key={relatedPost.id} 
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors duration-200">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-600">{relatedPost.date}</p>
                        </Link>
                      ))}
                  </div>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Stay updated with our latest insights and industry trends.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <Button type="submit" variant="primary" fullWidth>
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Previous Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
            {prevPost ? (
              <Link 
                to={`/blog/${prevPost.id}`} 
                className="flex items-center text-primary-500 hover:text-primary-700 transition-colors duration-200 mb-4 md:mb-0"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Previous Article</span>
                  <span className="font-medium">{prevPost.title}</span>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextPost ? (
              <Link 
                to={`/blog/${nextPost.id}`} 
                className="flex items-center text-right text-primary-500 hover:text-primary-700 transition-colors duration-200"
              >
                <div>
                  <span className="block text-sm text-gray-500">Next Article</span>
                  <span className="font-medium">{nextPost.title}</span>
                </div>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== id)
              .slice(0, 3)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="card overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedPost.summary.substring(0, 100)}...</p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors duration-200 group"
                    >
                      Read Article 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button as="link" to="/blog" variant="outline">
              View All Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert IT Consulting?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              as="link" 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-secondary-500" 
              variant="outline" 
              size="lg"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;