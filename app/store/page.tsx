import { getProducts } from '../services/products'
import Card from '@/app/components/store/product-card'
import CardWrapper from '../components/store/product-wrapper'
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
