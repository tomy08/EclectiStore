import type { Product } from '../types/Product'
import type { ShopifyProduct } from '../types/ShopifyProduct'

export const refactoredProducts = (product: ShopifyProduct): Product => {
  if (product.variants) {
    return {
      id: product.id,
      title: product.title,
      description: product.body_html,
      price: product.variants[0]?.price,
      tags: product.tags,
      image: product.images[0]?.src,
      gql_id: product.variants[0]?.admin_graphql_api_id,
    }
  } else {
    return {
      id: product.id,
      title: product.title,
      description: product.body_html,
      price: '0',
      tags: product.tags,
      image: product.images[0]?.src,
      gql_id: '',
    }
  }
}

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

    const data: Product[] = products.map((product: ShopifyProduct) =>
      refactoredProducts(product)
    )

    return data
  } catch (error) {
    console.error(error)
  }
}

export const getMainProducts = async () => {
  try {
    const apiUrl = `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/430486520038/products.json`

    const res = await fetch(apiUrl, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
      },
    })

    const { products } = await res.json()

    const data: Product[] = products.map((product: ShopifyProduct) =>
      refactoredProducts(product)
    )

    return data
  } catch (error) {
    console.error(error)
  }
}
