export default function SignupForm() {
  return (
    <form className="flex flex-col w-full max-w-md mt-10">
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
        className="border-blue-500 text-white font-bold rounded-full p-2 mt-8"
      >
        Sign up
      </button>
    </form>
  )
}
