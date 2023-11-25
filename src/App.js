import React from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Shows from './components/Shows/Shows'
import Offline from './components/Offline/Offline'
import Watch from './components/Watch/Watch'
import Kids from './components/Kids/Kids'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Shows />
      <Offline />
      <Watch />
      <Kids />
      <Questions />
      <Footer />
    </>
  )
}
