import type { Product } from '../types/Product'
import type { ShopifyProduct } from '../types/ShopifyProduct'

export const getProducts = async (id?: string) => {
  try {
    const apiUrl = id
      ? `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json?ids=${id}`
      : `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`

    const res = await fetch(apiUrl, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
      },
    })

    const { products } = await res.json()

    const data: Product[] = products.map((product: ShopifyProduct) => ({
      id: product.id,
      title: product.title,
      description: product.body_html,
      price: product.variants[0].price,
      tags: product.tags,
      image: product.images[0].src,
    }))

    return data
  } catch (error) {
    console.error(error)
  }
}
