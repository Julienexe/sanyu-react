import {sanityClient} from './sanityClient'
import {GALLERY_QUERY} from './queries'

export async function fetchGallery() {
  return await sanityClient.fetch(GALLERY_QUERY)
}
