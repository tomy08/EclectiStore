import Link from 'next/link'

export function Hero() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-16 flex sm:h-[83vh] items-center h-auto pt-12 sm:pt-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl ">
          EclectiStore
          <span className="sm:block">
            Elevate Your Lifestyle with Every Purchase!
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl sm:text-xl/relaxed text-base/relaxed ">
          Your One-Stop Shop for Fashion, Electronics, Furniture, and Toys!
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <Link
            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  )
}
