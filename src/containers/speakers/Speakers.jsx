import React from 'react'
import './speakers.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import lanningham from '../../assets/lanningham.png'
import kataruka from '../../assets/Saiba-Kataruka.png'
import sokolin from '../../assets/Lex-Sokolin.png'
import vatchev from '../../assets/David-Vatchev.png'
import mckenzie from '../../assets/Ian-Mckenzie.png'
import buonomo from '../../assets/Massimo-Buonomo.png'
import loth from '../../assets/Antoine-Loth.png'
import gokhberg from '../../assets/Evgeny-Gokhberg.png'
import hileman from '../../assets/Garrick-Hileman.png'
import spradlin from '../../assets/Ashley-Spradlin.png'
import gong from '../../assets/Deli-Gong.png'
import krishnavanshi from '../../assets/Vijay-Krishnavanshi.png'
import tekisalp from '../../assets/Emre-Tekisalp.png'
import kholostenko from '../../assets/Valerie-Kholostenko.png'
import taylor from '../../assets/Matty-Taylor.png'
import degenhardt from '../../assets/Patrick-Degenhardt.png'
import lamoureux from '../../assets/Paul-Lamoureux.png'
import leveille from '../../assets/Genevieve-Leveille.png'
import neocleous from '../../assets/Dimitris-Neocleous.png'
import { Box } from '@chakra-ui/react'

const Speakers = () => {
  return (
    <div className='cofb__speakers-page' id='speakers'>
    <div className="cofb__speakers">
      <h1>SPEAKERS</h1>
      <br/>
      <br/>
      <Box>
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={19}
      visibleSlides={3}
      >

        <Slider>
        <div className='img__spacing'>
          <Slide index={0}>
            <img src={vatchev} /> 
            <span className='caption'>David Vatchev</span>
          </Slide>

          <Slide index={1}>
          <img src={sokolin} /> 
            <span className='caption'>Lex Sokolin</span>
          </Slide>

          <Slide index={2}>
            <img src={kataruka} /> 
            <span className='caption'>Saiba Kataruka</span>
          </Slide>

          <Slide index={3}>
            <img src={mckenzie} /> 
            <span className='caption'>Ian Mckenzie</span>
          </Slide>

          <Slide index={4}>
            <img src={buonomo} /> 
            <span className='caption'>Massimo Buonomo</span>
          </Slide>

          <Slide index={5}>
            <img src={loth} /> 
            <span className='caption'>Antoine Loth</span>
          </Slide>

          <Slide index={6}>
            <img src={gokhberg} /> 
            <span className='caption'>Evgeny Gokhberg</span>
          </Slide>

          <Slide index={7}>
            <img src={hileman} /> 
            <span className='caption'>Garrick Hileman</span>
          </Slide>

          <Slide index={8}>
            <img src={spradlin} /> 
            <span className='caption'>Ashley Spradlin</span>
          </Slide>

          <Slide index={9}>
            <img src={lanningham} /> 
            <span className='caption'>Pi Lanningham</span>
          </Slide>

          <Slide index={10}>
            <img src={gong} /> 
            <span className='caption'>Deli Gong</span>
          </Slide>

          <Slide index={11}>
            <img src={krishnavanshi} /> 
            <span className='caption'>Vijay Krishnavanshi</span>
          </Slide>

          <Slide index={12}>
            <img src={tekisalp} /> 
            <span className='caption'>Emre Tekişalp</span>
          </Slide>

          <Slide index={13}>
            <img src={kholostenko} /> 
            <span className='caption'>Valarie Kholostenko</span>
          </Slide>

          <Slide index={14}>
            <img src={taylor} /> 
            <span className='caption'>Matty Taylor</span>
          </Slide>

          <Slide index={15}>
            <img src={degenhardt} /> 
            <span className='caption'>Patrick Degenhardt</span>
          </Slide>

          <Slide index={16}>
            <img src={lamoureux} /> 
            <span className='caption'>Paul-Adrien Lamoureux</span>
          </Slide>

          <Slide index={17}>
            <img src={leveille} /> 
            <span className='caption'>Genevieve Leveille</span>
          </Slide>

          <Slide index={18}>
            <img src={neocleous} /> 
            <span className='caption'>Dimitris Neocleous</span>
          </Slide>

          </div>
        </Slider>

        <div className='buttons'>
        <div className='child'>
        <ButtonBack className='arrow-button'><AiOutlineArrowLeft size={50}/></ButtonBack>
        <ButtonNext className='arrow-button'><AiOutlineArrowRight size={50}/></ButtonNext>
        </div>
        </div>
      </CarouselProvider>
      </Box>
    </div>
    </div>
  )
}

export default Speakers