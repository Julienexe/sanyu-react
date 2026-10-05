import {sanityClient} from './sanityClient'
import {GALLERY_QUERY} from './queries'

export async function fetchGallery() {
  const galleries = await sanityClient.fetch(GALLERY_QUERY)

  if (!Array.isArray(galleries)) {
    return galleries
  }

  const images = galleries
    .flatMap((gallery) => gallery?.images ?? [])
    .sort((a, b) => (b?.uploadedAt ?? '').localeCompare(a?.uploadedAt ?? ''))

  return {
    title: galleries.find((gallery) => gallery?.title)?.title ?? 'Gallery',
    images,
  }
}
