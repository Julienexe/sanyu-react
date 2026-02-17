import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

import { fetchGallery } from '../sanity/galleryAPI'
import { urlFor } from '../sanity/image'
import type { GalleryImage } from '../types/galleryImage'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch from Sanity and map to GalleryImage
  useEffect(() => {
    setLoading(true)
    fetchGallery()
      .then((data) => {
        if (!data || !data.images) throw new Error('No gallery data found')
        const mappedImages: GalleryImage[] = data.images.map((img: any, i: number) => ({
          id: i,
          title: img.caption ?? 'Untitled',
          image_square_url: urlFor(img.asset)
            .width(400)
            .height(400)
            .auto('format')
            .url(),
          image_large_url: urlFor(img.asset)
            .width(1200)
            .auto('format')
            .url(),
          // keep categories as array for multi-filter support
          categories: img.categories?.map((c: any) => c.title) ?? ['Uncategorized'],
        }))
        setImages(mappedImages)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  // Compute category list dynamically
  const categories = [
    'All',
    ...Array.from(new Set(images.flatMap((img) => img.categories))),
  ]

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.categories.includes(selectedCategory))

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-red-600">Photo Gallery</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore moments captured from our work in the field, events, and the lives we've touched across Uganda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-red-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading / Error States */}
        {loading && (
          <p className="text-center text-gray-600 mb-6">Loading gallery…</p>
        )}

        {error && (
          <>
            <p className="text-center text-red-600 mb-6">{error}</p>
            {console.error('Gallery fetch error:', error)}
          </>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            >
              <ImageWithFallback
                src={image.image_square_url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{image.title}</p>
                  <p className="text-gray-300 text-sm">{image.categories.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage.image_large_url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <div className="mt-4 text-center text-white">
                <h3 className="mb-2 text-white">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.categories.join(', ')}</p>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </section>
  )
}
