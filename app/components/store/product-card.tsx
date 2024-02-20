import type { Product } from '@/app/types/Product'
export default function CardComponent({ product }: { product: Product }) {
  const handle = product.title.toLowerCase().replace(/ /g, '-')
  return (
    <a href={`/products/${handle}`} className="group block overflow-hidden">
      <div className="relative h-[250px] sm:h-[350px]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 h-full w-full rounded object-cover ospacity-100 "
        />
      </div>

      <div className="relative pt-3">
        <h3 className="text-sm text-gray-300 group-hover:underline group-hover:underline-offset-4">
          {product.title}
        </h3>

        <p className="mt-1.5 tracking-wide text-gray-400">${product.price}</p>
      </div>
    </a>
  )
}
