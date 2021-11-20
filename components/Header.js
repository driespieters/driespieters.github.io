import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div>
        <Link href="/" passHref>
          <a className="cursor-pointer">
Dries Pieters
          </a>
        </Link>
      </div>
    </header>
  )
}