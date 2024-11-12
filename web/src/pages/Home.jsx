import React from 'react'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import Example from '../sections/Example'

export const Home = () => {
  return (
    <>
      <section>
        <Hero/>
      </section>
      <section>
        <Example/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}
export default Home