import { Handshake } from 'lucide-react';

export function Partners() {
  // Placeholder partners - can be updated with real logos later
  const localPartners = [
    'Local Partner 1',
    'Local Partner 2',
    'Local Partner 3',
    'Local Partner 4'
  ];

  const internationalPartners = [
    'International Partner 1',
    'International Partner 2',
    'International Partner 3',
    'International Partner 4'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Our Partners</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            We're grateful to work alongside dedicated partners who share our vision of empowering single mothers and building stronger communities across Uganda.
          </p>
        </div>

        {/* Local Partners */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Handshake className="w-5 h-5 text-red-600" />
            <h3 className="text-center">Local Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {localPartners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-gray-200 rounded-lg p-8 flex items-center justify-center hover:border-red-300 transition-colors"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Handshake className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Partners */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Handshake className="w-5 h-5 text-red-600" />
            <h3 className="text-center">International Partners</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {internationalPartners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-gray-200 rounded-lg p-8 flex items-center justify-center hover:border-red-300 transition-colors"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Handshake className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-red-50 rounded-lg p-8">
          <h3 className="mb-3">Interested in Partnering With Us?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We welcome partnerships with organizations that share our commitment to supporting vulnerable families. Together, we can create lasting change.
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
