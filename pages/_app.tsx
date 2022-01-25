import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="As time goes by"
        description="Find out how much time went by between now and then. Years, months, weeks, days, hours, minutes, seconds – they all will be lost in time like tears in rain."
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
