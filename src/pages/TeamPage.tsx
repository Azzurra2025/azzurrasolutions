import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import Button from '../components/Button';
import { teamMembers } from '../data/team';

const TeamPage = () => {
  return (
    <>
      <HeroSection
        title="Our Team"
        subtitle="Meet the talented professionals behind Azzurra Solutions."
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Meet Our Team"
        primaryButtonLink="#leadership"
        secondaryButtonText="Join Our Team"
        secondaryButtonLink="#careers"
      />

      {/* Leadership Team */}
      <section id="leadership" className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Leadership Team"
            subtitle="Our experienced leaders drive our vision and guide our success."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section id="core-team" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Core Team"
            subtitle="The talented professionals who bring our clients' visions to life."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            {teamMembers.slice(3).map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Culture"
                subtitle="What makes Azzurra Solutions a great place to work."
              />
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-500">Innovation & Learning</h3>
                  <p className="text-gray-600">
                    We foster a culture of continuous learning and innovation, encouraging our team to explore new technologies and approaches to solve complex challenges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-500">Collaboration & Inclusivity</h3>
                  <p className="text-gray-600">
                    We believe in the power of diverse perspectives and collaborative problem-solving. Our inclusive environment welcomes and values every team member's contributions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-500">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    We understand the importance of balance and wellness. Our flexible work arrangements and supportive policies help our team thrive both professionally and personally.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-500">Client-First Mindset</h3>
                  <p className="text-gray-600">
                    We're passionate about our clients' success. Our team is united by a shared commitment to delivering exceptional value and building lasting partnerships.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team collaboration"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team whiteboarding"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team meeting"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Team discussion"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Join Our Team"
            subtitle="We're always looking for talented professionals to join our growing team."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-500">Why Join Azzurra</h3>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>Work on challenging projects across various industries</li>
                    <li>Collaborate with a team of talented and passionate professionals</li>
                    <li>Continuous learning and professional development opportunities</li>
                    <li>Competitive compensation and benefits package</li>
                    <li>Flexible work arrangements and supportive work environment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary-500">Current Openings</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-lg">Senior Software Engineer</h4>
                      <p className="text-gray-600 mb-2">Full-time • Remote or Atlanta, GA</p>
                      <Button as="link" to="/careers/senior-software-engineer" variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-lg">Cloud Solutions Architect</h4>
                      <p className="text-gray-600 mb-2">Full-time • Remote or Atlanta, GA</p>
                      <Button as="link" to="/careers/cloud-solutions-architect" variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-lg">Data Scientist</h4>
                      <p className="text-gray-600 mb-2">Full-time • Remote or Atlanta, GA</p>
                      <Button as="link" to="/careers/data-scientist" variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button as="link" to="/careers" variant="primary">
                View All Openings
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 right-0 w-full h-full bg-secondary-500 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Joining Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals who are passionate about technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              as="link" 
              to="/careers" 
              className="bg-white hover:bg-gray-100 text-primary-900" 
              variant="outline" 
              size="lg"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;