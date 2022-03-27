import React from 'react'
import './speakers.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import lanningham from '../../assets/lanningham.png'
import elena from '../../assets/Elena.png'
import sokolin from '../../assets/Lex-Sokolin.png'
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
      totalSlides={3}
      visibleSlides={3}
      >
        <Slider>
          <Slide index={0} className='slide-image'><img src={lanningham} /> <br/> Pi Lannigham</Slide>
          <Slide index={1} className='slide-image'><img src={elena} /> <br/> Elena Sinelnikova</Slide>
          <Slide index={2} className='slide-image'><img src={sokolin} /> <br/> Lex Sokolin </Slide>
        </Slider>
        <div className='buttons'>
        <div className='child'>
        <ButtonBack className='arrow-button'><AiOutlineArrowLeft size={40}/></ButtonBack>
        <ButtonNext className='arrow-button'><AiOutlineArrowRight size={40}/></ButtonNext>
        </div>
        </div>
      </CarouselProvider>
      </Box>
    </div>
    </div>
  )
}

export default Speakers