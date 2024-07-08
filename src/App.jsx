import React from 'react'
import Navbar from './components/Navbar'
import Vid from './components/Vid'
import Feature from './components/Feature'
import Guide from './components/Guide'
import Hike from './components/Hike'
import About from './components/About'
import Destination from './components/Destination'
import Get from './components/Get'

const App = () => {
  return (
    <>
    <Navbar/>
    <Vid/> 
    <Feature/>
    <Guide/>
    <Hike/>
    <About/>
    <Destination/>
    <Get/>
    </>
  )
}

export default App