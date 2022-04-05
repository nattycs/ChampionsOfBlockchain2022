import React from 'react'
import { Footer, Header , Speakers, Agenda, Schedule, Networking, Sponsor, Eventpartners} from './containers'
import { Navbar, Feature, Socialmedia } from './components'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import image from "./assets/site-background.png"; 
import MediaQuery from 'react-responsive'


const App = () => {
  return (
    <>
    <ChakraProvider>
    <div className='App' >
      <div>
        <Navbar />
        <Header />
      </div>
      <Speakers />
      <Agenda />
      <Schedule />
      <Networking />
      <Sponsor />
      <Footer />
    </div>
    </ChakraProvider>
    </>
  )
}

export default App
