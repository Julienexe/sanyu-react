import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { Statistics } from '../components/Statistics';
import { Vision } from '../components/Vision';
import { MentalHealth } from '../components/MentalHealth';
import { About } from '../components/About';
import { SuccessStoriesPreview } from '../components/SuccessStoriesPreview';
import { Impact } from '../components/Impact';
import { VolunteeringPreview } from '../components/VolunteeringPreview';
import { Partners } from '../components/Partners';
import { CallToAction } from '../components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Statistics />
      <Vision />
      <MentalHealth />
      <About />
      <SuccessStoriesPreview />
      <Impact />
      <VolunteeringPreview />
      <Partners />
      <CallToAction />
    </>
  );
}