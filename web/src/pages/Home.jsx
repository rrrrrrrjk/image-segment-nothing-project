import React from 'react'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import Sliders from '../components/Sliders'

export const Home = () => {
  return (
    <>
      <section>
        <Hero/>
      </section>
      <section>
        <Sliders/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}
export default Home