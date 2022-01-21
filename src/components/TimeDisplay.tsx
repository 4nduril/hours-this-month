import { FunctionComponent } from 'react'

export const TimeDisplay: FunctionComponent = ({ children }) => (
  <div className="text-center italic font-bold text-2xl lg:text-4xl text-stone-800">
    {children}
  </div>
)
