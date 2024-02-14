import { Collection } from '../types/Collection'

export const getCollections = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
        },
      }
    )
    const { smart_collections } = await response.json()
    const transformedCollections = smart_collections.map(
      (collection: Collection) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle,
        }
      }
    )
    return transformedCollections
  } catch (error) {
    console.log(error)
  }
}
