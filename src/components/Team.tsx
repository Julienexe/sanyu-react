import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import edro from '../assets/edro.jpeg';
import brenda from '../assets/brenda.jpeg';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Mr. Edron",
      role: "Founder & Executive Director",
      bio: "Inspired by his late grandmother Sanyu and his own experiences growing up with a single mother, Edron founded Sanyu for the Needy to bring hope and support to vulnerable families. His vision drives our mission to create lasting change in communities across Uganda.",
      image: edro,
      email: "edron@sanyufoundation.org"
    },
    {
      name: "Brenda Nakabugo",
      role: "Program Director",
      bio: "Brenda leads our outreach programs in Masaka and Kampala, ensuring that resources reach those who need them most. With over 8 years of experience in community development, she brings passion and expertise to our mission.",
      image: brenda,
      email: "brenda@sanyufoundation.org"
    },
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Meet Our Team</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our dedicated team works tirelessly to bring hope, support, and positive change to single mothers and vulnerable children across Uganda. Meet the people behind our mission.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2">{member.name}</h3>
                <p className="text-red-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {/* Contact */}
                <div className="flex gap-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gray-100 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors group/icon"
                    >
                      <Mail className="w-5 h-5 text-gray-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover/icon:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-red-50 rounded-lg p-8 text-center">
          <h3 className="mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference. Whether you're interested in volunteering or joining our staff, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
