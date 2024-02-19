import { Collection } from '../types/Collection'
import type { Product } from '../types/Product'
import type { ShopifyProduct } from '../types/ShopifyProduct'
export const getCollections = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/smart_collections.json`,
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

export const getCollectionProducts = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`,
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
        },
      }
    )
    const { products } = await res.json()

    const data: Product[] = products.map((product: ShopifyProduct) => ({
      id: product.id,
      title: product.title,
      description: product.body_html,
      tags: product.tags,
      image: product.images[0].src,
    }))

    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
