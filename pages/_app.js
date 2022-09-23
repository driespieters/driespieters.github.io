import '../styles/globals.css'
import Layout from '../components/Layout'
import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="driespieters.com">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}