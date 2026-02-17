import { ImageWithFallback } from './figma/ImageWithFallback';

export function CallToAction() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759709042164-0dd78a39028b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwaGVscGluZyUyMGhhbmRzfGVufDF8fHx8MTc2NTA5MjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Helping hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="mb-6">Make a Difference Today</h2>
        <p className="text-xl mb-8 text-gray-200">
          Your support can bring happiness and hope to single mothers and vulnerable children in Uganda. Every contribution helps us provide essential needs and build a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors">
            Donate Now
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-md transition-colors">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}
