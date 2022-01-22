import { FunctionComponent } from 'react'
import Image from 'next/image'

export const BuyMeACoffee: FunctionComponent = () => (
  <a
    href="https://www.buymeacoffee.com/tobiasbarth"
    target="_blank"
    rel="noreferrer"
  >
    <Image
      src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
      alt="Buy Me A Coffee"
      height="40px"
      width="145px"
    />
  </a>
)
