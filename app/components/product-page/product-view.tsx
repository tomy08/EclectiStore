import { Product } from '@/app/types/Product'

import QuantityInput from './quantity-input'
import AddToMyCartButton from './add-to-my-cart-button'

export default function ProductView({ product }: { product: Product }) {
  return (
    <div className="flex  flex-col-reverse md:flex-row gap-10 mt-20 ">
      <img
        src={product.image}
        alt={product.description}
        className="w-full md:max-w-[35%] rounded-lg sm:h-96 md:h-full object-cover"
      />

      <div>
        <h1 className="md:text-4xl text-3xl font-bold mb-8 text-balance">
          {product.title}
        </h1>
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-3 py-2  text-purple-700 dark:bg-purple-700 dark:text-purple-100 mb-2">
          {product.tags}
        </span>
        <p className="py-4 max-w-lg text-pretty">{product.description}</p>
        <p className="md:text-3xl text-2xl font-bold">${product.price}</p>

        <div className="flex gap-2 mt-8">
          <QuantityInput />
          <AddToMyCartButton />
        </div>
      </div>
    </div>
  )
}
