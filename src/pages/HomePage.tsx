import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import { testimonials } from '../data/testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection
        title="Technology that Accelerates Business Growth"
        subtitle="Partner with Azzurra Solutions for expert guidance, scalable solutions, and measurable success on your digital transformation journey."
        backgroundImage="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Get Started"
        secondaryButtonText="Explore Services"
      />

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Azzurra Solutions</h2>
              <p className="mb-6">
                Azzurra Solutions LLC is a US-based IT consulting and software development company headquartered in Atlanta, Georgia. We specialize in building custom technology solutions that help businesses modernize, innovate, and thrive in the digital world.
              </p>
              <p className="mb-8">
                Our mission is to deliver world-class IT solutions that solve real business challenges. Our vision is to be a trusted technology partner known for our commitment to excellence, innovation, and client success.
              </p>
              <Button as="link" to="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-primary-500 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of IT and software development services to help businesses transform and grow."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button as="link" to="/services" variant="outline">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Azzurra Solutions"
            subtitle="Our approach combines technical expertise with business acumen to deliver solutions that drive real results."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Industry Expertise</h3>
              <p className="text-gray-200">Domain knowledge across healthcare, finance, manufacturing, and retail sectors.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Tailored Solutions</h3>
              <p className="text-gray-200">Custom development aligned with your specific business requirements.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Agile Methodology</h3>
              <p className="text-gray-200">Iterative approach ensuring flexibility, transparency, and continuous improvement.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="bg-secondary-500 h-16 w-16 flex items-center justify-center rounded-full mb-4">
                <span className="text-2xl font-bold text-white">04</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Long-term Partnership</h3>
              <p className="text-gray-200">Committed to your success beyond project completion with ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Case Studies"
            subtitle="Explore how we've helped businesses across industries solve complex challenges and achieve their goals."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            {caseStudies.slice(0, 3).map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button as="link" to="/case-studies" variant="outline">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 staggered-animate">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Azzurra Solutions to accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button as="link" to="/contact" variant="secondary" size="lg">
              Contact Us Today
            </Button>
            <Button 
              as="link" 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 border-white text-white" 
              variant="outline" 
              size="lg"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;