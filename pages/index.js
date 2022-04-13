import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ATOM!</title>
        <link rel="icon" href="/Untitled.ico" />
      </Head>

      <main>
        <Header title="Welcome To Atom Cheats!" />
        <p>HTML images are defined with the img tag:</p>

        <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
        <p className="Here are All Of Our Socials">
        </p>
      </main>

      <Footer />
    </div>
  )
}
