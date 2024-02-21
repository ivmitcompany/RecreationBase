import Link from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'
import { Icons } from './Icons'

interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Logo: FC<LogoProps> = ({ className, href = '/', ...props }) => (
  <Link className={className} href={href} {...props}>
    <Icons.logo />
    <span className="sr-only">Головна</span>
  </Link>
)

export default Logo
