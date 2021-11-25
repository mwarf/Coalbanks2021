import React from "react"
import Layout from "../components/Layout"
import Cta from "../components/Cta"
import Hero from "../components/Hero"
import Blogposts from "../components/Blog"
import Showreel from "../components/Showreel"
import Feature from "../components/Feature"


const Home = () => {
  return(
    <Layout>
      <Hero/>
      <Feature/>
      <Showreel/>
      <Blogposts/>
      <Cta/>
    </Layout>
  )
}

export default Home