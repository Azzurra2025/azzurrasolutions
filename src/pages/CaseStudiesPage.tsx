import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesPage = () => {
  return (
    <>
      <HeroSection
        title="Case Studies"
        subtitle="Real-world examples of how we've helped businesses solve complex challenges."
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="View Our Work"
        primaryButtonLink="#all-cases"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

      {/* Featured Case Study */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Case Study"
            subtitle="See how we transformed a healthcare network's data infrastructure."
            centered
          />
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full">
                    Healthcare
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Healthcare Analytics Platform</h3>
                <p className="text-gray-600 mb-6">
                  A regional healthcare network needed to consolidate patient data across 12 facilities and implement predictive analytics to improve care outcomes while ensuring HIPAA compliance.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Challenge</h4>
                  <p className="text-gray-600 mb-4">
                    The client was struggling with siloed data systems, inconsistent reporting, and an inability to identify at-risk patients proactively. They needed a unified platform that could securely handle sensitive healthcare data while providing actionable insights.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-2">Solution</h4>
                  <p className="text-gray-600 mb-4">
                    We developed a secure, cloud-based analytics platform with custom dashboards, predictive models for patient readmission risk, and automated compliance reporting. The solution integrated data from multiple electronic health record systems and departmental applications.
                  </p>
                  
                  <h4 className="font-bold text-lg mb-2">Results</h4>
                  <p className="text-gray-600">
                    Reduced readmission rates by 23%, improved resource allocation, and saved an estimated $2.7M annually through operational efficiencies. The platform enabled data-driven decision making across the organization while maintaining strict privacy and security standards.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudies[0].technologies.map((tech) => (
                    <span key={tech} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button as="link" to={`/case-studies/${caseStudies[0].id}`} variant="primary">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={caseStudies[0].image}
                  alt={caseStudies[0].title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section id="all-cases" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="All Case Studies"
            subtitle="Explore our portfolio of successful client projects across industries."
            centered
          />
          
          <div className="grid grid-cols-1 gap-12 mt-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:order-first flex">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                        {caseStudy.client}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{caseStudy.title}</h3>
                    
                    <div className="mb-4 flex-grow">
                      <p className="text-gray-600 mb-4">
                        <span className="font-bold">Challenge:</span> {caseStudy.challenge}
                      </p>
                      <p className="text-gray-600 mb-4">
                        <span className="font-bold">Solution:</span> {caseStudy.solution}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-bold">Results:</span> {caseStudy.results}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 4 && (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                          +{caseStudy.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <Button as="link" to={`/case-studies/${caseStudy.id}`} variant="outline">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Industries We Serve"
            subtitle="We have experience delivering solutions across a wide range of sectors."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 text-center transition-all duration-300 hover:translate-y-[-5px]">
              <img
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Healthcare"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Patient management systems, healthcare analytics, telehealth platforms, and HIPAA-compliant solutions.
              </p>
            </div>
            
            <div className="card p-6 text-center transition-all duration-300 hover:translate-y-[-5px]">
              <img
                src="https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Financial Services"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-gray-600">
                Digital banking platforms, fraud detection systems, financial analytics, and regulatory compliance.
              </p>
            </div>
            
            <div className="card p-6 text-center transition-all duration-300 hover:translate-y-[-5px]">
              <img
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Manufacturing"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                IoT solutions, supply chain optimization, quality control systems, and predictive maintenance.
              </p>
            </div>
            
            <div className="card p-6 text-center transition-all duration-300 hover:translate-y-[-5px]">
              <img
                src="https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Retail & E-commerce"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600">
                E-commerce platforms, inventory management, customer analytics, and omnichannel solutions.
              </p>
            </div>
            
            <div className="card p-6 text-center transition-all duration-300 hover:translate-y-[-5px]">
              <img
                src="https://images.pexels.com/photos/8127803/pexels-photo-8127803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Education"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600">
                Learning management systems, student information systems, and educational analytics platforms.
              </p>
            </div>
            
            <div className="card p-6 text-center transition-all duration-300 hover:translate-y-[-5px]">
              <img
                src="https://images.pexels.com/photos/3989151/pexels-photo-3989151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Non-Profit"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Non-Profit</h3>
              <p className="text-gray-600">
                Donor management, volunteer coordination, impact measurement, and fundraising platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its goals with tailored technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              as="link" 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-primary-500" 
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

export default CaseStudiesPage;