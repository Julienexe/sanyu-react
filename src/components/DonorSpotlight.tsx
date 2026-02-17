import { Award } from 'lucide-react'
import { useState } from 'react'
import { DonorSlide } from './DonorSlide'
import type { Donor } from '../types/donor'
import marissa from '../assets/marissa.jpeg';

const donors: Donor[] = [
  {
    name: 'Anna Reams',
    title: 'Wildlife Rehabilitator & Humanitarian',
    image: 'https://cdn.voyagela.com/wp-content/uploads/2018/03/personal_photo-266-e1521017890447-733x600-1.jpg',
    story:
      'Anna Reams began volunteering in the 1990s after discovering a lack of support for injured wild animals...',
    gratitude:
      'Our first donor – Anna generously donated 2 suitcases of clothes and backpacks to help the needy in Uganda.',
    quote:
      'Anna’s generosity set the foundation for our mission.',
    quoteAuthor: '— Edron, Founder',
    email: 'anna@example.com',
    website: 'https://wildlifecaresocal.org',
  },
  {
    name: 'Marissa',
    title: 'MRI Technologist, Creative & Traveler',
    image: marissa,
    story:
      'Marissa is an MRI technologist born in Southern California, a place she considers her forever home. Over the past few years, she has lived in Hawaii and traveled throughout South America, experiences that deepened her appreciation for culture, movement, and human connection. Outside of her medical career, Marissa is a dancer, motorcycle rider, and tattoo designer who finds inspiration by the ocean and through creative self-expression.',
    gratitude:
      'Marissa supported our mission by believing in our work and choosing to stand with vulnerable families. Her generosity reflects a quiet but powerful commitment to using her opportunities to uplift others.',
    quote:
      'I believe in helping where you can, and supporting people in ways that respect their dignity and individuality.',
    quoteAuthor: '— Marissa',
  },

]

export function DonorSpotlight() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % donors.length)
  const prev = () => setIndex((i) => (i - 1 + donors.length) % donors.length)

  return (
    <section className="relative py-20 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md mb-4">
            <Award className="w-5 h-5 text-red-600" />
            <span className="text-red-600">Donor Spotlight</span>
          </div>
          <h2 className="text-red-600">Meet Our Supporters</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
        </div>
        {/* Controls */}
        {donors.length > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-full bg-white shadow hover:bg-red-50"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="px-4 py-2 rounded-full bg-white shadow hover:bg-red-50"
            >
              ›
            </button>
          </div>
        )}
        {/* Slide */}
        <DonorSlide donor={donors[index]} />


      </div>
    </section>
  )
}
