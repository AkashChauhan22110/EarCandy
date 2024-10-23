import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '3jkh1g8b',
  dataset: dataset || 'production',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
