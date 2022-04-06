import React from 'react'
import './speakers.css'
import MediaQuery from 'react-responsive'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import lanningham from '../../assets/Pi-Lanningham.png'
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
import r3 from '../../assets/r3-logo.png'
import consensys from '../../assets/consensys-logo.png'
import hashtagger from '../../assets/hashtagger-logo.png'
import osborne from '../../assets/osborne-logo.png'
import valk from '../../assets/valk-logo.png'
import re7 from '../../assets/re7-logo.png'
import blockchain from '../../assets/blockchain-logo.png'
import metis from '../../assets/metis-logo.png'
import sundaeswap from '../../assets/sundaeswap-logo.png'
import automata from '../../assets/automata-logo.png'
import adaptiv from '../../assets/adaptiv-logo.png'
import o1 from '../../assets/o1-logo.png'
import astar from '../../assets/astar-logo.png'
import solana from '../../assets/solana-logo.png'
import whaleroom from '../../assets/whaleroom-logo.png'
import agriledger from '../../assets/agriledger-logo.png'
import vechain from '../../assets/vechain-logo.png'

const Speakers = () => {
  return (
    <div className='cofb__speakers-page' id='speakers'>
    <div className="cofb__speakers">
      <h1>SPEAKERS</h1>
      <br/>
      <br/>
      
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={135}
      totalSlides={19}
      visibleSlides={3}
      interval={5000}
      isPlaying={true}
      >

        <Slider>
        <div className='img__spacing'>
          <Slide index={0}>
            <img src={vatchev} /> 
            <span className='caption'>David Vatchev</span>
            <p className='description'>Global Head of Venture Development at R3</p>
            <img src={r3} />
          </Slide>

          <Slide index={1}>
          <img src={sokolin} /> 
            <span className='caption'>Lex Sokolin</span>
            <p className='description'>Global Fintech Co-Head and Head Economosit at ConsenSys</p>
            <img src={consensys} />
          </Slide>

          <Slide index={2}>
            <img src={kataruka} /> 
            <span className='caption'>Saiba Kataruka</span>
            <p className='description'>Founder & CEO at Hashtagger</p>
            <img src={hashtagger} />
          </Slide>

          <Slide index={3}>
            <img src={mckenzie} /> 
            <span className='caption'>Ian Mckenzie</span>
            <p className='description'>Associate Director at Osborne Clarke</p>
            <img src={osborne} />
          </Slide>

          <Slide index={4}>
            <img src={buonomo} /> 
            <span className='caption'>Massimo Buonomo</span>
            <p className='description'>Blockchain, DeFi, NFT & Metaverse Expert</p>
          </Slide>

          <Slide index={5}>
            <img src={loth} /> 
            <span className='caption'>Antoine Loth</span>
            <p className='description'>Co-Founder and CEO at Valk</p>
            <img src={valk} />
          </Slide>

          <Slide index={6}>
            <img src={gokhberg} /> 
            <span className='caption'>Evgeny Gokhberg</span>
            <p className='description'>Managing Partner at Re7 Capital</p>
            <img src={re7} />
          </Slide>

          <Slide index={7}>
            <img src={hileman} /> 
            <span className='caption'>Garrick Hileman</span>
            <p className='description'>Head of Research at Blockchain.com</p>
            <img src={blockchain} />
          </Slide>

          <Slide index={8}>
            <img src={spradlin} /> 
            <span className='caption'>Ashley Spradlin</span>
            <p className='description'>Educational Program Manager at Metis</p>
            <img src={metis} />
          </Slide>

          <Slide index={9}>
            <img src={lanningham} /> 
            <span className='caption'>Pi Lanningham</span>
            <p className='description'>CIO at SundaeSwap</p>
            <img src={sundaeswap} />
          </Slide>

          <Slide index={10}>
            <img src={gong} /> 
            <span className='caption'>Deli Gong</span>
            <p className='description'>Co-Founder of Automata Network</p>
            <img src={automata} />
          </Slide>

          <Slide index={11}>
            <img src={krishnavanshi} /> 
            <span className='caption'>Vijay Krishnavanshi</span>
            <p className='description'>CTO at Adaptiv</p>
            <img src={adaptiv} />
          </Slide>

          <Slide index={12}>
            <img src={tekisalp} /> 
            <span className='caption'>Emre Tekişalp</span>
            <p className='description'>CEO of O(1) Labs</p>
            <img src={o1} />
          </Slide>

          <Slide index={13}>
            <img src={kholostenko} /> 
            <span className='caption'>Valarie Kholostenko</span>
            <p className='description'>CMO at Astar Network</p>
            <img src={astar} />
          </Slide>

          <Slide index={14}>
            <img src={taylor} /> 
            <span className='caption'>Matty Taylor</span>
            <p className='description'>Head of Growth at Solana Labs</p>
            <img src={solana} />
          </Slide>

          <Slide index={15}>
            <img src={degenhardt} /> 
            <span className='caption'>Patrick Degenhardt</span>
            <p className='description'>Marketing Consultant at Degenhardt & Partners</p>
          </Slide>

          <Slide index={16}>
            <img src={lamoureux} /> 
            <span className='caption'>Paul-Adrien Lamoureux</span>
            <p className='description'>Co-Founder & COO at Whaleroom</p>
            <img src={whaleroom} />
          </Slide>

          <Slide index={17}>
            <img src={leveille} /> 
            <span className='caption'>Genevieve Leveille</span>
            <p className='description'>Principal Founder & CEO at AgriLedger</p>
            <img src={agriledger} />
          </Slide>

          <Slide index={18}>
            <img src={neocleous} /> 
            <span className='caption'>Dimitris Neocleous</span>
            <p className='description'>EU and UK Ecosystem Manager at VeChain</p>
            <img src={vechain} />
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
      
    </div>
    </div>
  )
}

export default Speakers