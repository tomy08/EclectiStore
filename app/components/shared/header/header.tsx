import Link from 'next/link'
import List from './list'
import ShoppingCartBtn from './shopping-cart-btn'
import { validateAccessToken } from '@/app/utils/auth/validateAccessToken'

export async function Header() {
  const customer = await validateAccessToken()

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-between">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <List name="Home" href="/" />
              <List name="Store" href="/store" />
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {customer?.firstName ? (
              <div className="w-10 h-10 rounded-full border-2 border-gray-500 text-center m-auto text-black font-bold overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/personas/svg?seed=${customer.firstName}&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede`}
                  alt="Account"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <Link
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                href="/signup"
              >
                Sign In
              </Link>
            )}

            <ShoppingCartBtn />
          </div>
        </div>
      </div>
    </header>
  )
}
