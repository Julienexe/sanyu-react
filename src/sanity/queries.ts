export const GALLERY_QUERY = `
  *[_type == "gallery"]{
    title,
    images[]{
      asset,
      caption,
      categories[]->{
        title,
        slug
      }
    }
  }
`
