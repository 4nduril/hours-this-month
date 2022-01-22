import { FunctionComponent } from 'react'
import { BuyMeACoffee } from './BuyMeACoffee'

export const Footer: FunctionComponent = () => (
  <footer className="text-center text-base text-stone-500 p-8">
    <div className="font-sans italic mb-4">
      Made with boredom, an idea and a little spare time in Berlin.
    </div>
    <div className="font-sans text-base mb-4">
      By <a href="https://tobias-barth.net">Tobias Barth</a>
    </div>
    <BuyMeACoffee />
  </footer>
)
