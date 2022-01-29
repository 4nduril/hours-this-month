import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="As time goes by"
        description="Find out how much time went by between now and then. Years, months, weeks, days, hours, minutes, seconds – they all will be lost in time like tears in rain."
      />
      <PlausibleProvider
        domain="as-time-goes-by.dev"
        enabled={process.env.VERCEL_ENV === 'production'}
      >
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  )
}

export default MyApp
