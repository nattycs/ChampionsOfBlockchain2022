import React from 'react'
import { Footer, Header , Speakers, Agenda, Schedule, Networking, Sponsor, Eventpartners} from './containers'
import { Navbar, Feature, Socialmedia } from './components'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import image from "./assets/site-background.png"; 
import MediaQuery from 'react-responsive'
import theme from './theme'


const App = () => {
  return (
    <>
    <ChakraProvider theme={theme}>
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
      <Eventpartners />
      <Footer />
    </div>
    </ChakraProvider>
    </>
  )
}

export default App
