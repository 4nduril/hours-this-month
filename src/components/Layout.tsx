import { FunctionComponent } from 'react'

export const Layout: FunctionComponent = ({ children }) => (
  <div className="container mx-auto">
    <main>{children}</main>
  </div>
)
