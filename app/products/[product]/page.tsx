import { getProducts } from '@/app/services/products'

import ProductNotFound from '@/app/components/product/product-not-found'
import ProductView from '@/app/components/product/product-view'
import SimilarProducts from '@/app/components/product/similar-products'

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products![0]

  if (!product) {
    return <ProductNotFound />
  }

  product.description = product.description.replace(/<[^>]*>?/gm, '')

  return (
    <section className="mx-auto max-w-screen-xl mt-10 flex items-center justify-center flex-col px-2">
      <ProductView product={product} />
      <SimilarProducts category={product.tags} productId={product.id} />
    </section>
  )
}
