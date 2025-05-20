import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/team';

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="About Azzurra Solutions"
        subtitle="Learn about our story, mission, values, and the team behind our success."
        backgroundImage="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Meet Our Team"
        primaryButtonLink="#team"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From our founding to where we are today."
              />
              <p className="mb-4">
                Founded in 2019, Azzurra Solutions began with a simple mission: to help businesses harness the power of technology to solve real-world challenges. Our founders, Viswanath and Jaya Pulicherla, recognized a gap in the IT services market for solutions that truly understood business needs.
              </p>
              <p className="mb-4">
                Starting with a small team of dedicated professionals, we quickly built a reputation for delivering high-quality, tailored solutions that drive measurable results. Our client-first approach and commitment to excellence have fueled our growth into a trusted technology partner for businesses across multiple industries.
              </p>
              <p>
                Today, Azzurra Solutions operates from our headquarters in Atlanta, serving clients across the United States and beyond. While we've grown in size and capability, our founding principles remain unchanged: technical excellence, business value, and lasting partnerships.
              </p>
            </div>
            <div className="relative order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Company history"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 right-0 w-full h-full bg-secondary-500 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Our Mission</h3>
              <p className="mb-4">
                To deliver world-class IT solutions that solve real business challenges, enabling our clients to innovate, grow, and thrive in an increasingly digital world.
              </p>
              <p>
                We aim to be the bridge between technology's potential and business success, creating solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Our Vision</h3>
              <p className="mb-4">
                To be recognized as a trusted technology partner known for our commitment to excellence, innovation, and client success.
              </p>
              <p>
                We envision a future where every business, regardless of size or industry, can harness the full power of technology to achieve its goals and create positive impact.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="bg-primary-500 h-14 w-14 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-white">01</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Excellence</h4>
                <p className="text-gray-600">
                  We are committed to delivering the highest quality in everything we do, from code quality to client communications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="bg-primary-500 h-14 w-14 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-white">02</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Innovation</h4>
                <p className="text-gray-600">
                  We continuously explore new technologies and approaches to solve complex challenges and create new opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="bg-primary-500 h-14 w-14 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-white">03</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Integrity</h4>
                <p className="text-gray-600">
                  We operate with transparency, honesty, and ethical principles in all our business practices and relationships.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="bg-primary-500 h-14 w-14 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-white">04</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Collaboration</h4>
                <p className="text-gray-600">
                  We believe in the power of teamwork, both within our organization and in partnership with our clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="bg-primary-500 h-14 w-14 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-white">05</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Client Success</h4>
                <p className="text-gray-600">
                  We measure our success by the success of our clients and are dedicated to helping them achieve their goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="bg-primary-500 h-14 w-14 flex items-center justify-center rounded-full mb-4">
                  <span className="text-xl font-bold text-white">06</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Continuous Growth</h4>
                <p className="text-gray-600">
                  We invest in our team's development and continuously improve our processes, services, and capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Approach"
            subtitle="How we work with clients to deliver exceptional results."
            centered
          />
          
          <div className="relative mt-16">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">Discovery & Analysis</h3>
                  <p>
                    We begin by thoroughly understanding your business objectives, challenges, and requirements through collaborative workshops and in-depth research.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">Strategic Planning</h3>
                  <p>
                    We develop a comprehensive strategy and roadmap tailored to your specific needs, including technology selection, architecture design, and implementation planning.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">Agile Development</h3>
                  <p>
                    Our iterative development process ensures transparency, flexibility, and continuous improvement, with regular demonstrations and feedback cycles.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">Quality Assurance</h3>
                  <p>
                    Rigorous testing and quality control processes ensure that all deliverables meet the highest standards of performance, security, and reliability.
                  </p>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">Deployment & Integration</h3>
                  <p>
                    Smooth implementation and integration with existing systems, with a focus on minimizing disruption and maximizing business continuity.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left"></div>
              </div>
              
              {/* Item 6 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right"></div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-primary-200 bg-primary-500 flex items-center justify-center">
                    <span className="text-white font-bold">6</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">Ongoing Support & Evolution</h3>
                  <p>
                    Long-term partnership including maintenance, support, and continuous improvement to ensure your solution evolves with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented professionals behind Azzurra Solutions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how Azzurra Solutions can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="btn-secondary px-8 py-3 text-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;