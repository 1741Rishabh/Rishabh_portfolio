import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Head>
        <title>Rishabh Kumar Portfolio </title>
      </Head>
      {/* nav  */}
      <Header/>

      <section id="hero" className='snap-center '>
        <Hero/>
      </section>

      {/* about */}
      <section id="about" className='snap-start'>
        <About/>
      </section>
      {/* experience  */}
      <section className='snap-center' id="experience">
        <Experience/>
      </section>
      {/* skill  */}
      {/* project  */}
      {/* contect me  */}
    </div>
  
   
  )
}
