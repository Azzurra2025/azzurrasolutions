import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project or ask any questions."
        backgroundImage="https://images.pexels.com/photos/7709085/pexels-photo-7709085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonLink="#contact-form"
        primaryButtonText="Send a Message"
      />

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3" id="contact-form">
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you within 24 hours."
              />
              
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out to us directly through any of these channels."
              />
              
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-card">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">General Inquiries</p>
                      <a href="mailto:hr@azzurrasolution.com" className="text-primary-500 hover:text-primary-700 transition-colors duration-200">
                        hr@azzurrasolution.com
                      </a>
                      <p className="text-gray-600 mt-3 mb-1">Sales Department</p>
                      <a href="mailto:sales@azzurrasolution.com" className="text-primary-500 hover:text-primary-700 transition-colors duration-200">
                        sales@azzurrasolution.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600 mb-1">Main Office</p>
                      <a href="tel:+15128663867" className="text-primary-500 hover:text-primary-700 transition-colors duration-200">
                        +1 (512) 866-3867
                      </a>
                      <p className="text-gray-600 mt-3 mb-1">Customer Support</p>
                      <a href="tel:+15128663868" className="text-primary-500 hover:text-primary-700 transition-colors duration-200">
                        +1 (512) 866-3868
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Office Address</h3>
                      <p className="text-gray-600 mb-1">Atlanta Headquarters</p>
                      <address className="not-italic text-gray-800">
                        3301 Buckeye Rd, Suite 200<br />
                        Atlanta, GA 30341<br />
                        United States
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-500 mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday - Friday</p>
                      <p className="text-gray-800">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Location"
            subtitle="Visit our office in Atlanta, Georgia."
            centered
          />
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4893294860554!2d-84.2847792!3d33.9060459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a70c8b1a9a43%3A0xf5b9a457f5636ea!2s3301%20Buckeye%20Rd%2C%20Atlanta%2C%20GA%2030341!5e0!3m2!1sen!2sus!4v1624956324897!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Azzurra Solutions LLC Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with us."
            centered
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-600">
                We have extensive experience across healthcare, financial services, manufacturing, retail, education, and non-profit sectors. Our team brings industry-specific knowledge to every project, ensuring solutions that address the unique challenges of your business domain.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope, complexity, and requirements. A small to medium project typically takes 3-6 months from discovery to deployment, while larger enterprise solutions may take 6-12 months. We'll provide a detailed timeline during our initial consultation based on your specific needs.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">What is your development methodology?</h3>
              <p className="text-gray-600">
                We primarily use Agile methodologies, particularly Scrum and Kanban, to ensure flexibility, transparency, and continuous delivery of value. This approach allows for regular feedback cycles and the ability to adapt to changing requirements throughout the development process.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">Do you provide support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive post-launch support and maintenance services. We provide different support tiers to meet your needs, from basic bug fixes to 24/7 monitoring and regular enhancements. We're committed to being a long-term partner in your success.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-2">How do you handle data security and privacy?</h3>
              <p className="text-gray-600">
                Security is built into every solution we deliver. We adhere to industry best practices and compliance standards (HIPAA, GDPR, SOC 2, etc.) as applicable. Our approach includes secure coding practices, regular security testing, and implementing appropriate authentication and authorization mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contact-form" 
              className="btn bg-white hover:bg-gray-100 text-secondary-500 px-8 py-3 text-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;