export interface GalleryImage {
  id: number;
  title: string;
  categories: string[];       // multi-category support
  image_square_url: string;   // small thumbnail / gallery grid
  image_large_url: string;    // large / lightbox view
  // optional: include creation timestamp if you fetch it
  uploaded_at?: string;       
}
