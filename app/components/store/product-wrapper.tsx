export default function CardWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </ul>
  )
}
