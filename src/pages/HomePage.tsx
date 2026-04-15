import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { SuccessStoriesPreview } from '../components/SuccessStoriesPreview';
import { CallToAction } from '../components/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <SuccessStoriesPreview />
      <CallToAction />
    </>
  );
}