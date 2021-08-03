import { Option } from './styles'
import Link from 'next/link'

function MenuOption({ children }) {
  return (
    <Option>
      <Link href=''>{children}</Link>
    </Option>
  )
}

export default MenuOption