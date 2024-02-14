import ProductWrapper from '@/app/components/store/product-wrapper'
import Card from '@/app/components/store/product-card'
import { getProducts } from '@/app/services/products'

interface CategoryProps {
  params: {
    categories: string[]
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts()

  const { categories } = props.params

  return (
    <ProductWrapper>
      {products!.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </ProductWrapper>
  )
}
