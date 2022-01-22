import { FunctionComponent } from 'react'
import { Footer } from './Footer'

export const Layout: FunctionComponent = ({ children }) => (
  <div className="container mx-auto text-stone-800 flex flex-col min-h-screen">
    <main className="flex-grow">{children}</main>
    <div className="mt-40">
      <Footer />
    </div>
  </div>
)
