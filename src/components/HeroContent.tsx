import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroContent() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl">
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Bringing Happiness and Hope to Single Mothers and Vulnerable Children in Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-md transition-colors"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
