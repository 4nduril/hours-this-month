import { FCWithChildren } from '../helpers'

export const TimeDisplay: FCWithChildren = ({ children }) => (
  <div className="text-center italic font-bold text-3xl lg:text-6xl px-4">
    {children}
  </div>
)
