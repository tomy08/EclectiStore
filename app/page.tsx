import { Header } from './components/header'
import { Hero } from './components/home/hero'
import { NewCollection } from './components/home/new_collection'

export default function Home() {
  return (
    <main className='bg-gray-900 text-white'>
      <Header />
      <Hero />
      <NewCollection />
    </main>
  )
}
