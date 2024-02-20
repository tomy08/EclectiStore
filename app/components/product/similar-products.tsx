import ProductCard from '../store/product-card'
import ProductWrapper from '../store/product-wrapper'
import { getProducts } from '@/app/services/products'

export default async function SimilarProducts({
  category,
  productId,
}: {
  category: string
  productId: number
}) {
  const products = await getProducts()
  const similarProducts = products?.filter(
    (product) => product.tags === category && product.id !== productId
  )

  return (
    <section className="mt-14 w-full">
      <h2 className="text-3xl font-bold mb-4">Similar products</h2>
      <ProductWrapper>
        {similarProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductWrapper>
    </section>
  )
}
