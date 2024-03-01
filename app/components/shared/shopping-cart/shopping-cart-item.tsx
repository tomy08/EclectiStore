import type { CartItem } from '@/app/types/ShoopingCart'
import { useShoppingCartState } from '@/app/context/shopping-cart-context'
export default function ShoppingCartItem({ cartItem }: { cartItem: CartItem }) {
  const { setShoppingCart } = useShoppingCartState()

  const handleDelete = () => {
    setShoppingCart((prev) => ({
      items: prev!.items.filter(
        (item) => item.product.id !== cartItem.product.id
      ),
      totalItems: prev!.totalItems - cartItem.quantity,
      totalPrice:
        prev!.totalPrice - Number(cartItem.product.price) * cartItem.quantity,
    }))
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value)
    setShoppingCart((prev) => ({
      items: prev!.items.map((item) => {
        if (item.product.id === cartItem.product.id) {
          return {
            product: item.product,
            quantity: newQuantity,
          }
        }
        return item
      }),
      totalItems: prev!.totalItems + newQuantity - cartItem.quantity,
      totalPrice:
        prev!.totalPrice +
        (newQuantity - cartItem.quantity) * Number(cartItem.product.price),
    }))
  }
  return (
    <li className="flex items-center gap-4">
      <img
        src={cartItem.product.image}
        alt={cartItem.product.title}
        className="size-16 rounded object-cover"
      />

      <div>
        <h3 className="text-sm text-gray-200">{cartItem.product.title}</h3>

        <p className="mt-0.5 space-y-px text-[10px] text-gray-300">
          ${cartItem.product.price} x {cartItem.quantity} = $
          {Number(cartItem.product.price) * cartItem.quantity}
        </p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <label htmlFor="quantity" className="sr-only">
            Quantity
          </label>

          <input
            type="number"
            min="1"
            id="quantity"
            defaultValue={cartItem.quantity}
            onChange={handleQuantityChange}
            className="h-8 w-12 rounded border-gray-200 bg-gray-800 p-0 text-center text-xs text-gray-400 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          />
        </form>

        <button
          onClick={handleDelete}
          className="text-gray-400 transition hover:text-red-600"
        >
          <span className="sr-only">Remove item</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}
