import { Heart, Users, MessageCircle, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mentalHealthImg from '../assets/home-page-children.jpeg'

export function MentalHealth() {
  const services = [
    {
      icon: MessageCircle,
      title: 'One-on-One Counseling',
      description: 'Individual sessions with trained counselors who understand the unique challenges single mothers face.'
    },
    {
      icon: Users,
      title: 'Support Groups',
      description: 'Safe spaces where mothers can share experiences, build connections, and support each other.'
    },
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Immediate assistance for mothers experiencing emotional distress or difficult life situations.'
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Activities and workshops focused on self-care, stress management, and building resilience.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <ImageWithFallback
              src={mentalHealthImg}
              alt="Mental health support"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-red-600">Mental Health & Counseling</h2>
            <div className="w-20 h-1 bg-red-600 mb-6" />
            <p className="text-gray-700 mb-8">
              Beyond meeting physical needs, we recognize that single mothers carry heavy emotional burdens. Our mental health and psychosocial support programs provide a safe space for healing, growth, and renewal.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-gray-900">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-red-50 p-6 rounded-lg">
              <p className="text-gray-700 text-sm">
                <span className="text-red-600">You are not alone.</span> Our trained counselors and support networks are here to walk alongside you through life's challenges. Mental wellbeing is just as important as physical health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
