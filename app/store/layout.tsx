import { getCollections } from '@/app/services/collections'
import Link from 'next/link'
import { Collection } from '../types/Collection'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const collections: Collection[] = await getCollections()

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <nav className="p-2 gap-2 flex sm:flex-wrap  overflow-x-auto">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={'/store/' + collection.handle}
            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-2 text-sm text-purple-700 dark:bg-purple-700 dark:text-purple-100 mr-2"
          >
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </section>
  )
}
