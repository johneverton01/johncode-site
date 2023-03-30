import Link from 'next/link'

interface ButtonLinkProps {
  url: string
  label: string
  css: string
}

export function ButtonLink({ url, label, css }: ButtonLinkProps) {
  return (
    <Link href={url} className={css}>
      {label}
    </Link>
  )
}
