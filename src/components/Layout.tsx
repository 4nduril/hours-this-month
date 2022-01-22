import { FunctionComponent } from 'react'

export const Layout: FunctionComponent = ({ children }) => (
  <div className="container mx-auto text-stone-800">
    <main>{children}</main>
  </div>
)
