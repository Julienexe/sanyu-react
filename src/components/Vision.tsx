import { Droplets, Hospital, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Vision() {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Our Vision</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            We envision a future where single mothers and their children thrive in communities equipped with essential resources. Our long-term vision centers on empowering single mothers while building sustainable infrastructure that benefits entire communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="mb-2">Empowering Single Mothers</h3>
                <p className="text-gray-600">
                  Our primary focus is supporting single mothers to become self-reliant, confident, and capable of providing for their families. Through skills training, emotional support, and access to resources, we help mothers build better futures for themselves and their children.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2">Clean Water for Communities</h3>
                <p className="text-gray-600">
                  We envision building boreholes to provide safe, clean water access throughout the communities we serve. Clean water dramatically improves the health and quality of life for single mothers and their families, reducing waterborne illnesses and freeing up time previously spent on water collection.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Hospital className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2">Accessible Healthcare Facilities</h3>
                <p className="text-gray-600">
                  We plan to establish health facilities where communities can access affordable medical care. In Uganda, medication is expensive and many single mothers cannot afford healthcare for themselves or their children. Accessible healthcare directly supports mothers' ability to work, care for their families, and break the cycle of poverty.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="mb-2">Thriving Communities</h3>
                <p className="text-gray-600">
                  By developing community infrastructure and resources, we create environments where single mothers can flourish. Strong communities provide support networks, economic opportunities, and a foundation for lasting change across generations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVZ2FuZGElMjBjb21tdW5pdHklMjB3YXRlcnxlbnwxfHx8fDE3NjUxMjYxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community water project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}