import { Heart, Award, Mail, Globe } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import type { Donor } from '../types/donor'

interface DonorSlideProps {
  donor: Donor
}

export function DonorSlide({ donor }: DonorSlideProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-5 gap-0">
        {/* Image column */}
        <div className="md:col-span-2 relative">
          <div className="relative h-full min-h-[400px] md:min-h-[600px]">
            <ImageWithFallback
              src={donor.image}
              alt={donor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent" />

            <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-red-600 fill-red-600" />
            </div>
          </div>
        </div>

        {/* Content column */}
        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
          {/* Identity */}
          <div className="mb-8">
            <h3 className="mb-2">{donor.name}</h3>
            <p className="text-red-600">{donor.title}</p>
          </div>

          {/* Story */}
          <div className="mb-8">
            <h4 className="mb-3 text-gray-900 flex items-center gap-2">
              <div className="w-1 h-6 bg-red-600 rounded-full" />
              Her Story
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {donor.story}
            </p>
          </div>

          {/* Gratitude */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-600 mb-8">
            <h4 className="mb-3 text-red-600 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Our Gratitude
            </h4>
            <p className="text-gray-900 text-lg">
              {donor.gratitude}
            </p>
          </div>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-700 italic text-sm">
              “{donor.quote}”
            </p>
            <p className="text-red-600 text-sm mt-2">
              {donor.quoteAuthor}
            </p>
          </div>

          {/* Links */}
          {(donor.email || donor.website) && (
            <div className="flex gap-4 items-center">
              <p className="text-gray-600 text-sm">Connect:</p>

              {donor.email && (
                <a
                  href={`mailto:${donor.email}`}
                  className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors group"
                  aria-label="Email donor"
                >
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                </a>
              )}

              {donor.website && (
                <a
                  href={donor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors group"
                  aria-label="Visit website"
                >
                  <Globe className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
