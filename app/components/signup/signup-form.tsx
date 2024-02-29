'use client'
import { useState } from 'react'
import { handleCreateUser } from '@/app/actions'
import Link from 'next/link'

export default function SignupForm() {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    try {
      await handleCreateUser(formData)
    } catch (error) {
      setError('Error al crear usuario. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md mt-10 overflow-hidden"
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="Your name"
          className="border-b-2 border-gray-800 py-2 pl-2 bg-transparent focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Your lastname"
          className="border-b-2 border-gray-800 py-2 pl-2 bg-transparent focus:outline-none focus:border-blue-500"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Your phone"
        className="border-b-2 border-gray-800 p-2 bg-transparent mb-4 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="border-b-2 border-gray-800 p-2 bg-transparent mb-4 focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Your password"
        className="border-b-2 border-gray-800 p-2 bg-transparent focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="border-2 border-blue-900 text-white font-bold rounded-full p-2 mt-8 hover:bg-blue-900  focus:outline-none"
      >
        Sign up
      </button>
      <p className="text-sm text-center text-gray-500 mt-2 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-gray-700 underline dark:text-gray-200"
        >
          Log in
        </Link>
        .
      </p>
    </form>
  )
}
