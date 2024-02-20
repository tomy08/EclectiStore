type Props = {
  name: string
  href: string
}
export default function List({ name, href }: Props) {
  return (
    <li>
      <a
        className="text-base text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
        href={href}
      >
        {name}
      </a>
    </li>
  )
}
