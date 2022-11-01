import { FunctionComponent } from 'react'
import Link from 'next/link'

export const ExampleSection: FunctionComponent = () => (
  <>
    <h2 className="text-center text-2xl mb-10">Examples</h2>
    <ul className="text-pink-900">
      <li className="text-center">
        <Link href="/years/since/1789-07-14">
          Years since the Storming of the Bastille in the French Revolution
        </Link>
      </li>
      <li className="text-center">
        <Link href="/days/since/1942-11-26">
          Days since the movie release of Casablanca
        </Link>
      </li>
      <li className="text-center">
        <Link href="/weeks/since/1948-12-10">
          Weeks since the United Nations General Assembly accepted the Universal
          Declaration of Human Rights
        </Link>
      </li>
      <li className="text-center">
        <Link href="/months/since/1990-12-20">
          Months since publishing the world&apos;s first ever website by Tim
          Berners-Lee
        </Link>
      </li>
      <li className="text-center">
        <Link href="/seconds/since/2000">
          Seconds since the beginning of the year 2000
        </Link>
      </li>
      <li className="text-center">
        <Link href="/minutes/since/2022-01-21T12:15:15+01:00">
          Minutes since the first release of this website
        </Link>
      </li>
      <li className="text-center">
        <Link href="/hours/since/thisWeek">
          Hours since beginning of this week
        </Link>
      </li>
    </ul>
  </>
)
