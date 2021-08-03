import NextLink from 'next/link'

function Link({ children, href }) {
  return (
    <NextLink href={href}>
      {children}
    </NextLink>
  )
}

export default Link