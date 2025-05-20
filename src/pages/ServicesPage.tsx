import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { services } from '../data/services';
import { Code, Cloud, Brain, Shield, Lightbulb, Users } from 'lucide-react';

const ServicesPage = () => {
  const iconMap = {
    'code': <Code className="h-12 w-12 text-primary-500 mb-4" />,
    'cloud': <Cloud className="h-12 w-12 text-primary-500 mb-4" />,
    'brain': <Brain className="h-12 w-12 text-primary-500 mb-4" />,
    'shield': <Shield className="h-12 w-12 text-primary-500 mb-4" />,
    'lightbulb': <Lightbulb className="h-12 w-12 text-primary-500 mb-4" />,
    'users': <Users className="h-12 w-12 text-primary-500 mb-4" />,
  };

  const renderIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || null;
  };

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive IT solutions tailored to your business needs."
        backgroundImage="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services-overview"
      />

      {/* Services Overview */}
      <section id="services-overview" className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Comprehensive IT Solutions"
            subtitle="We offer a wide range of services to help businesses leverage technology for growth and innovation."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <a 
                key={service.id} 
                href={`#${service.id}`}
                className="card p-6 transition-all duration-300 hover:translate-y-[-5px] block"
              >
                {renderIcon(service.icon)}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description.substring(0, 100)}...
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`section ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-first' : 'order-first lg:order-last'}>
                <SectionHeading
                  title={service.title}
                  subtitle={service.description}
                />
                
                <div className="space-y-4 mb-8">
                  <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                    <h4 className="font-bold text-primary-800 mb-2">Key Features</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Custom solutions tailored to your specific business needs</li>
                      <li>Scalable architecture designed for future growth</li>
                      <li>Integration with existing systems and processes</li>
                      <li>Ongoing support and maintenance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                    <h4 className="font-bold text-primary-800 mb-2">Benefits</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Increased operational efficiency and productivity</li>
                      <li>Enhanced customer experience and engagement</li>
                      <li>Data-driven decision making capabilities</li>
                      <li>Competitive advantage in your industry</li>
                    </ul>
                  </div>
                </div>
                
                <Button as="link" to="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </div>
              
              <div className={index % 2 === 0 ? 'order-last' : 'order-first'}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <div className={`absolute top-0 left-0 w-full h-full ${index % 2 === 0 ? 'bg-secondary-500' : 'bg-primary-500'} rounded-lg -z-10 transform translate-x-4 translate-y-4`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Service Delivery Process"
            subtitle="A systematic approach to ensure successful outcomes for every project."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Discovery</h3>
              <p className="text-gray-200">We begin by understanding your business objectives, requirements, and existing systems through collaborative workshops.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Planning</h3>
              <p className="text-gray-200">We develop a comprehensive project plan including technology selection, architecture design, and implementation strategy.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Execution</h3>
              <p className="text-gray-200">Our agile development process ensures transparent, iterative progress with regular feedback and quality assurance.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Support</h3>
              <p className="text-gray-200">We provide ongoing maintenance, support, and evolution to ensure your solution continues to deliver value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              as="link" 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-secondary-500" 
              variant="outline" 
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;