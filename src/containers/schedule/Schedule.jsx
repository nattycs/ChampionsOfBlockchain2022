import React from 'react'
import './schedule.css'
import day1 from '../../assets/schedule_1.png'
import day2 from '../../assets/schedule_2.png'
import champions from '../../assets/champions-3.png'
import { SocialIcon } from 'react-social-icons';
import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const Schedule = () => {
  return (
    <div className='cofb__schedule Manrope' id='schedule'>
      <h1>SCHEDULE</h1>
    <Box textAlign="center" py={10} px={6}>
      <img src={day1} />
      <img src={day2} />
      <br />
      <Text color={'gray.500'} fontFamily="Manrope">
        Follow Our Socials To Keep Updated.
      </Text>
      <br />
    <div>
        <SocialIcon className='sm-icons' url="https://www.facebook.com/championsofblockchain" network="facebook" bgColor="#3b537a" />
        <SocialIcon className='sm-icons' url="https://www.linkedin.com/company/champions-of-blockchain" network="linkedin" bgColor="#3b537a" />
        <SocialIcon className='sm-icons' url="https://www.instagram.com/championsofblockchain/" network="instagram" bgColor="#3b537a" />
        <SocialIcon className='sm-icons' url="https://twitter.com/champsofblock" network="twitter" bgColor="#3b537a" />
    </div>
    </Box>
    </div>
  )
}

export default Schedule