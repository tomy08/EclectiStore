import Link from 'next/link'
import List from './list'
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
            {customer.firstName ? (
              <div className="w-10 h-10 rounded-full border-2 border-gray-500 text-center m-auto text-black font-bold overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/personas/svg?seed=${customer.firstName}&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede`}
                  alt="Account"
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

            <button className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
