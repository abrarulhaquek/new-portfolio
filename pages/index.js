import About from '@/components/About'
import Acadenic from '@/components/Acadenic'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Navbar from '@/components/navbar'
import React from 'react'

export default function index() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Acadenic />
      <Contact />
    </div>
  )
}
