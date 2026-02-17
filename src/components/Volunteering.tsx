import { Users, Globe, Heart, Calendar, MessageCircle, Book, Briefcase, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DonorSpotlight } from './DonorSpotlight';

export function Volunteering() {
  const localOpportunities = [
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Work directly with single mothers and families in Masaka and Kampala, helping distribute resources and build relationships.'
    },
    {
      icon: Book,
      title: 'Education Support',
      description: 'Tutor children, assist with school programs, or help organize educational events and back-to-school drives.'
    },
    {
      icon: Calendar,
      title: 'Event Coordination',
      description: 'Help plan and execute community gatherings, fundraising events, and awareness campaigns.'
    },
    {
      icon: Heart,
      title: 'Mental Health Support',
      description: 'If you have counseling training, support our mental health programs and facilitate support group sessions.'
    }
  ];

  const internationalOpportunities = [
    {
      icon: Globe,
      title: 'Online Fundraising',
      description: 'Organize virtual fundraising campaigns, manage social media drives, or create awareness in your local community.'
    },
    {
      icon: Briefcase,
      title: 'Professional Skills',
      description: 'Offer your expertise in areas like marketing, graphic design, web development, accounting, or legal support.'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Help tell our stories through photography, videography, writing, or social media content creation.'
    },
    {
      icon: MessageCircle,
      title: 'Advocacy & Awareness',
      description: 'Spread the word about our mission, share our stories, and help build a global community of supporters.'
    }
  ];

  return (
    <>
      {/* Donor Spotlight - First Section */}
      <DonorSpotlight />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-red-600">Volunteer With Us</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              Volunteers are the heartbeat of Sanyu for the Needy. Whether you're in Uganda or anywhere else in the world, your time, skills, and passion can create meaningful change in the lives of single mothers and vulnerable children.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-16">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVyJTIwd29ya3xlbnwxfHx8fDE3NjcwMzA3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Volunteers in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="mb-2 text-white">Be the Change You Want to See</h3>
                <p className="text-white/90">Join a community of dedicated volunteers making a real difference in Uganda.</p>
              </div>
            </div>
          </div>

          {/* Local Volunteering */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="mb-4">Local Volunteering Opportunities</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                If you're based in or near Masaka or Kampala, there are many ways to get involved directly with our on-ground programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {localOpportunities.map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-gray-900">{opportunity.title}</h4>
                        <p className="text-gray-600 text-sm">{opportunity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* International Volunteering */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="mb-4">International Volunteering</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                No matter where you are in the world, you can contribute to our mission and support single mothers in Uganda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {internationalOpportunities.map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-gray-900">{opportunity.title}</h4>
                        <p className="text-gray-600 text-sm">{opportunity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Volunteer */}
          <div className="bg-red-50 rounded-lg p-8 mb-16">
            <h3 className="text-center mb-8">Why Volunteer With Sanyu?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Make Real Impact</h4>
                <p className="text-gray-700 text-sm">
                  See the direct results of your efforts in the lives of mothers and children you help support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Join a Community</h4>
                <p className="text-gray-700 text-sm">
                  Connect with like-minded individuals who share your passion for creating positive change.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Grow Personally</h4>
                <p className="text-gray-700 text-sm">
                  Gain new perspectives, develop skills, and experience personal growth through service.
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer Testimonial */}
          <div className="bg-white border-2 border-red-100 rounded-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "Volunteering with Sanyu for the Needy has been one of the most rewarding experiences of my life. Seeing the hope and resilience of the mothers we support inspires me every day. It's not just about giving—it's about being part of a community working toward real, lasting change."
              </p>
              <p className="text-red-600">— Sarah, Local Volunteer</p>
            </div>
          </div>

          {/* How to Get Started */}
          <div className="text-center bg-red-600 text-white rounded-lg p-12">
            <h3 className="mb-4 text-white">Ready to Get Started?</h3>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              Whether you can volunteer a few hours a week or contribute your professional skills remotely, we'd love to have you join our team. Reach out to learn more about current opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                Contact Us to Volunteer
              </a>
              <a
                href="/team"
                className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}