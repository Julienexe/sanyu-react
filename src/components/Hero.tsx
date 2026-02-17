import { Navbar } from './Navbar';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <HeroContent />
    </div>
  );
}
