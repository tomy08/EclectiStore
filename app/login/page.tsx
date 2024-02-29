import LoginForm from '../components/signup/login-form'

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-screen-xl mt-16 flex items-center justify-center flex-col px-2">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl h-14">
        Login
      </h1>
      <LoginForm />
    </section>
  )
}
