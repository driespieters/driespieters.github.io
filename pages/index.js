import Head from 'next/head'
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Freelance webdesigner | Dries Pieters</title>
        <meta name="description" content="Portfolio of Dries Pieters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />     
    </div>
  )
}
