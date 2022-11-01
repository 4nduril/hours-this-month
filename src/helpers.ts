import { FunctionComponent, ReactNode } from 'react'

export type FCWithChildren<T = unknown> = FunctionComponent<
  T & { children?: ReactNode }
>
