import { FunctionComponent } from 'react'
import Link from 'next/link'

export const ExampleSection: FunctionComponent = () => (
  <>
    <h2 className="text-center text-2xl mb-10">Examples</h2>
    <ul className="text-pink-900">
      <li className="text-center">
        <Link href="/years/since/1789-07-14">
          <a>
            Years since the Storming of the Bastille in the French Revolution
          </a>
        </Link>
      </li>
      <li className="text-center">
        <Link href="/days/since/1942-11-26">
          <a>Days since the movie release of Casablanca</a>
        </Link>
      </li>
      <li className="text-center">
        <Link href="/weeks/since/1948-12-10">
          <a>
            Weeks since the United Nations General Assembly accepted the
            Universal Declaration of Human Rights
          </a>
        </Link>
      </li>
      <li className="text-center">
        <Link href="/months/since/1990-12-20">
          <a>
            Months since publishing the world&apos;s first ever website by Tim
            Berners-Lee
          </a>
        </Link>
      </li>
      <li className="text-center">
        <Link href="/seconds/since/2000">
          <a>Seconds since the beginning of the year 2000</a>
        </Link>
      </li>
      <li className="text-center">
        <Link href="/minutes/since/2022-01-21T12:15:15+01:00">
          <a>Minutes since the first release of this website</a>
        </Link>
      </li>
      <li className="text-center">
        <Link href="/hours/since/thisWeek">
          <a>Hours since beginning of this week</a>
        </Link>
      </li>
    </ul>
  </>
)
