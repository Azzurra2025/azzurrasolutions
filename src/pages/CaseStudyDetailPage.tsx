import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(cs => cs.id === id);
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 pb-16 bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Button as="link" to="/case-studies" variant="primary">
            Back to All Case Studies
          </Button>
        </div>
      </div>
    );
  }
  
  // Find next and previous case studies
  const currentIndex = caseStudies.findIndex(cs => cs.id === id);
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      {/* Case Study Hero */}
      <section className="pt-32 pb-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Button as="link" to="/case-studies" variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Case Studies
              </Button>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full">
                {caseStudy.client}
              </span>
              
              {caseStudy.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full">
                  {tech}
                </span>
              ))}
              
              {caseStudy.technologies.length > 3 && (
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full">
                  +{caseStudy.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Featured Image */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="relative aspect-w-16 aspect-h-9 max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Case Study Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.client} partnered with Azzurra Solutions to address critical challenges in their organization. 
                    This case study examines how our team developed and implemented a tailored solution to meet their specific needs, 
                    resulting in significant improvements across key business metrics.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    The client needed a partner who could understand their complex requirements and deliver a solution that would integrate seamlessly with their existing systems while providing the functionality and scalability required for future growth.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Solution</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Our approach involved a thorough discovery phase to understand the client's processes, challenges, and objectives. We then implemented an agile development methodology to deliver regular increments of functionality, incorporating client feedback throughout the process.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Key components of our solution included:
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
                    <li>Custom-built applications designed for specific user roles</li>
                    <li>Integration with existing enterprise systems</li>
                    <li>Comprehensive security controls and compliance features</li>
                    <li>Scalable architecture to accommodate future growth</li>
                    <li>Intuitive user interface to minimize training requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.results}
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    The solution has been enthusiastically adopted by users across the organization and has become an integral part of their daily operations. The client continues to work with Azzurra Solutions to explore additional capabilities and expand the solution to other areas of their business.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <span className="text-3xl font-bold text-primary-500 block mb-2">+{Math.floor(Math.random() * 50) + 30}%</span>
                      <span className="text-gray-700">Efficiency Improvement</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <span className="text-3xl font-bold text-primary-500 block mb-2">${Math.floor(Math.random() * 3) + 1}.{Math.floor(Math.random() * 9)}M</span>
                      <span className="text-gray-700">Cost Savings</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <span className="text-3xl font-bold text-primary-500 block mb-2">+{Math.floor(Math.random() * 20) + 20}%</span>
                      <span className="text-gray-700">User Satisfaction</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech) => (
                      <span key={tech} className="inline-block px-3 py-2 text-sm font-medium bg-gray-200 text-gray-800 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm sticky top-32">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900">Client</h4>
                    <p className="text-gray-700">{caseStudy.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">Industry</h4>
                    <p className="text-gray-700">
                      {caseStudy.id.includes('healthcare') ? 'Healthcare' : 
                       caseStudy.id.includes('fintech') ? 'Financial Services' :
                       caseStudy.id.includes('manufacturing') ? 'Manufacturing' : 
                       'Retail & E-commerce'}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">Timeline</h4>
                    <p className="text-gray-700">6 months</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">Services Provided</h4>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Custom Software Development</li>
                      <li>Cloud Migration & Architecture</li>
                      <li>Data Engineering</li>
                      <li>UI/UX Design</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Need a Similar Solution?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact us to discuss how we can help your organization achieve similar results.
                  </p>
                  <Button as="link" to="/contact" variant="primary" fullWidth>
                    Contact Us
                  </Button>
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
            {prevCaseStudy ? (
              <Link 
                to={`/case-studies/${prevCaseStudy.id}`} 
                className="flex items-center text-primary-500 hover:text-primary-700 transition-colors duration-200 mb-4 md:mb-0"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                <div>
                  <span className="block text-sm text-gray-500">Previous Case Study</span>
                  <span className="font-medium">{prevCaseStudy.title}</span>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextCaseStudy ? (
              <Link 
                to={`/case-studies/${nextCaseStudy.id}`} 
                className="flex items-center text-right text-primary-500 hover:text-primary-700 transition-colors duration-200"
              >
                <div>
                  <span className="block text-sm text-gray-500">Next Case Study</span>
                  <span className="font-medium">{nextCaseStudy.title}</span>
                </div>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(cs => cs.id !== id)
              .slice(0, 3)
              .map((relatedCS) => (
                <div key={relatedCS.id} className="card overflow-hidden">
                  <img 
                    src={relatedCS.image} 
                    alt={relatedCS.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedCS.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedCS.challenge.substring(0, 100)}...</p>
                    <Link
                      to={`/case-studies/${relatedCS.id}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-700 font-medium transition-colors duration-200 group"
                    >
                      Read Case Study 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button as="link" to="/case-studies" variant="outline">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build a tailored solution to address your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              as="link" 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-primary-900" 
              variant="outline" 
              size="lg"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailPage;