export const GALLERY_QUERY = `
  *[_type == "gallery"]{
    title,
    images[]{
      asset,
      "uploadedAt": asset->_createdAt,
      caption,
      categories[]->{
        title,
        slug
      }
    }
  }
`
