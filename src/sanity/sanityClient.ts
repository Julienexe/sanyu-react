import { createClient } from '@sanity/client'

// Reads env token if dataset is private; otherwise omit 'token'
export const sanityClient = createClient({
  projectId: '6f5yaa5e',        // from your CLI config
  dataset: 'production',         // from your CLI config
  apiVersion: '2026-01-30',     // use today's date or a fixed version
  useCdn: true,                  // `true` for fast, cached public queries
})
