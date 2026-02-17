import { Heart, Users, Smile } from 'lucide-react';

export function Mission() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Our Mission</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="mb-3">Instilling Love & Hope</h3>
            <p className="text-gray-600">
              When life gets too hard, people become hopeless. We're here to restore hope and show love to those in need.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="mb-3">Supporting Single Mothers</h3>
            <p className="text-gray-600">
              We support single mothers and vulnerable children with the basic needs they require to live dignified lives.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smile className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="mb-3">Promoting Wellbeing</h3>
            <p className="text-gray-600">
              We promote the wellbeing of single mothers and children by ensuring they receive the basic needs that they need.
            </p>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-lg">
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Our mission is to provide help to those in need which includes instilling love and hope into them because when life gets too hard, people become hopeless. <span className="text-red-600">Sanyu means happiness in Luganda.</span> We are here to support single mothers and vulnerable children with basic needs.
          </p>
        </div>
      </div>
    </section>
  );
}
