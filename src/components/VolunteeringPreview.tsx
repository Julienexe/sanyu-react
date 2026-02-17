import { Users, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VolunteeringPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4 text-red-600">Join Our Volunteer Community</h2>
            <div className="w-20 h-1 bg-red-600 mb-6" />
            <p className="text-gray-700 mb-6">
              Whether you're in Uganda or across the world, there are meaningful ways to contribute your time and skills to support single mothers and vulnerable children. Our volunteers are the heart of our mission.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">Local Volunteers</h4>
                  <p className="text-gray-600 text-sm">Work directly with families in Masaka and Kampala through programs, events, and community outreach.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">International Volunteers</h4>
                  <p className="text-gray-600 text-sm">Support our mission remotely through fundraising, awareness campaigns, and professional skills.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">Make a Difference</h4>
                  <p className="text-gray-600 text-sm">Every hour volunteered creates ripple effects of positive change in the lives of mothers and children.</p>
                </div>
              </div>
            </div>

            <Link 
              to="/volunteering" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Learn More About Volunteering
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVyJTIwd29ya3xlbnwxfHx8fDE3NjcwMzA3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Volunteers making a difference"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
