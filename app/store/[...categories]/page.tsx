import ProductWrapper from '@/app/components/store/product-wrapper'
import Card from '@/app/components/store/product-card'

import { getProducts } from '@/app/services/products'
import {
  getCollectionProducts,
  getCollections,
} from '@/app/services/collections'

import { Collection } from '@/app/types/Collection'
import { Product } from '@/app/types/Product'

interface CategoryProps {
  params: {
    categories: string[]
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params
  const collections = await getCollections()

  const collection = collections.find(
    (collection: Collection) => collection.handle === categories[0]
  ).id

  const products = await getCollectionProducts(collection)

  return (
    <ProductWrapper>
      {products?.map((product) => (
        <li key={product.id}>
          <Card product={product} />
        </li>
      ))}
    </ProductWrapper>
  )
}
