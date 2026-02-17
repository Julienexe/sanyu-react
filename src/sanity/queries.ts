export const GALLERY_QUERY = `
  *[_type == "gallery"][0]{
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
