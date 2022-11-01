import { FunctionComponent } from 'react'
import Image from 'next/image'

export const BuyMeACoffee: FunctionComponent = () => (
  <div className="flex justify-center">
    <a
      href="https://www.buymeacoffee.com/tobiasbarth"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
        alt="Buy Me A Coffee"
        height="40"
        width="145"
      />
    </a>
  </div>
)
