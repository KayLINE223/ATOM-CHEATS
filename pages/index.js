import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ATOM!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome To Atom Cheats!" />
        <p className="Here are All Of Our Socials">
        </p>
      </main>

      <Footer />
    </div>
  )
}
