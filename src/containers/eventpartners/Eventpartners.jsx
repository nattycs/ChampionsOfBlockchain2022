import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import yellow from '../../assets/yellow-champions.png'
import { SocialIcon } from 'react-social-icons';
import React from 'react'
import './eventpartners.css'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const Eventpartners = () => {
  return (
    <div className="cofb__eventpartners-page" id='eventpartners'>
    <div className='cofb__eventpartners Manrope'>
    <h1>EVENT PARTNERS</h1>
    <Box textAlign="center" py={10} px={6}>
      <img src={yellow} />
      <Heading color={'white'} as="h2" size="xl" fontFamily="Manrope" fontWeight="200" mt={6} mb={2}>
        COMING SOON
      </Heading>
      <Text color={'white'} fontFamily="Manrope">
        Follow Our Socials To Keep Updated.
      </Text>
      <br />
    <div>
        <SocialIcon className='sm-icons' url="https://www.facebook.com/championsofblockchain" network="facebook" bgColor="#ffcd2a" />
        <SocialIcon className='sm-icons' url="https://www.linkedin.com/events/championsofblockchain-globaldis6771465335553048577/" network="linkedin" bgColor="#ffcd2a" />
        <SocialIcon className='sm-icons' url="https://www.instagram.com/championsofblockchain/" network="instagram" bgColor="#ffcd2a" />
        <SocialIcon className='sm-icons' url="https://twitter.com/champsofblock" network="twitter" bgColor="#ffcd2a" />
    </div>
    </Box>
    </div>
    </div>
  )
}

export default Eventpartners