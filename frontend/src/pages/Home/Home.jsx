import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'


export default function Home() {
  return (
    <div  className="relative min-h-screen overflow-hidden">
        <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
            <Hero/>
            <Features/>
        </div>
        <Footer/>
    </div>
  )
}
