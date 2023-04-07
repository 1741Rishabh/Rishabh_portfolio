import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rishabh Kumar Portfolio </title>
      </Head>
      {/* nav  */}

      {/* header  */}
      <Header/>
      {/* hero  */}
      <section>
        <Hero/>
      </section>
      {/* about */}
      {/* experience  */}
      {/* skill  */}
      {/* project  */}
      {/* contect me  */}
    </div>
  
   
  )
}
