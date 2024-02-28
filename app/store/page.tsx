import { getProducts } from '../services/products'
import Card from '@/app/components/store-page/product-card'
import CardWrapper from '../components/store-page/product-wrapper'
export default async function Store() {
  const products = await getProducts()
  return (
    <CardWrapper>
      {products!.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </CardWrapper>
  )
}
