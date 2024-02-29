'use client'

import { handleLoginUser } from '@/app/actions'
import Link from 'next/link'

export default function LoginForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await handleLoginUser(formData)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md mt-10"
    >
      <input
        type="email"
        id="email"
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
        Login
      </button>
      <p className="text-sm text-center text-gray-500 mt-2 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          href="/signup"
          className="text-gray-700 underline dark:text-gray-200"
        >
          Sign up
        </Link>
        .
      </p>
    </form>
  )
}
