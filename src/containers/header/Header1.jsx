import React from 'react'
import './header.css'
import { Button, ButtonGroup, Link, Stack, Box } from '@chakra-ui/react'
import limage from '../../assets/home1_image.png'
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <div className="cofb2022__header section__padding" id="home">
      <div className="cofb2022__header-content">
        <h1 className="large__text">
          <img src={limage} alt="limage" />
        </h1>
        <h2 className="small__text">
          7 - 8 April 2022
          <br />
          THE LARGEST STUDENT-LED BLOCKCHAIN CONFERENCE IN THE UK.
        </h2>
        <div className = "cofb2022__right">
        <div className='cofb2022__book-now'>
          Header
          <Box bg='#3b537a' w='60%' p={24} color='white'>
          <Link href="https://hopin.com/events/champions-of-blockchain-global-disruption">
          <Stack direction='row' spacing={4} align='center'>
            <Button type="button">
              BOOK NOW
            </Button>
          </Stack>
          </Link>
          </Box>
        </div>
        <div>
          <SocialIcon url="https://www.linkedin.com/cohttps://www.linkedin.com/company/champions-of-blockchain/mpany/champions-of-blockchain/" />
          
          <SocialIcon url="https://www.instagram.com/championsofblockchain/" />
          
          <SocialIcon url="https://www.facebook.com/championsofblockchain" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header