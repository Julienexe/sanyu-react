import { Shirt, BookOpen, Stethoscope, HandHeart } from 'lucide-react';

export function Impact() {
  const impactAreas = [
    {
      icon: Shirt,
      title: 'Clothing & Shoes',
      description: 'Providing essential clothing and shoes to vulnerable children so they can attend school with dignity.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Educational Materials',
      description: 'Supplying books, uniforms, and school bags to ensure children have the tools they need to learn.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Support',
      description: 'Assisting single mothers in accessing affordable medication and healthcare for their children.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: HandHeart,
      title: 'Basic Needs',
      description: 'Supporting families with essential needs to help them live with dignity and hope for the future.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Our Impact</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            We focus on providing essential support to single mothers and vulnerable children across central Uganda, addressing their most pressing needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${area.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-red-600 mb-2">2024</div>
              <p className="text-gray-600">Year Founded</p>
            </div>
            <div>
              <div className="text-4xl text-red-600 mb-2">2+</div>
              <p className="text-gray-600">Cities Served</p>
            </div>
            <div>
              <div className="text-4xl text-red-600 mb-2">100%</div>
              <p className="text-gray-600">Commitment to Change</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
