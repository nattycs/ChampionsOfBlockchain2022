import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import './speakers.css'
import champions from '../../assets/champions-3.png'
import { SocialIcon } from 'react-social-icons';

export default function Info() {
  return (
    <div className='cofb__speakers-page' id='speakers'>
    <div className="cofb__speakers"> 
    <h1>SPEAKERS</h1>
    <Box textAlign="center" py={10} px={6}>
      <img src={champions} />
      <Heading as="h2" size="xl" fontFamily="Noir" fontWeight="200" mt={6} mb={2}>
        COMING SOON
      </Heading>
      <Text color={'gray.500'} fontFamily="Noir">
        Follow Our Socials To Keep Updated.
      </Text>
      <br />
    <div>
        <SocialIcon className='sm-icons' url="https://www.facebook.com/championsofblockchain" network="facebook" bgColor="#3b537a" />
        <SocialIcon className='sm-icons' url="https://www.linkedin.com/events/championsofblockchain-globaldis6771465335553048577/" network="linkedin" bgColor="#3b537a" />
        <SocialIcon className='sm-icons' url="https://www.instagram.com/championsofblockchain/" network="instagram" bgColor="#3b537a" />
        <SocialIcon className='sm-icons' url="https://twitter.com/champsofblock" network="twitter" bgColor="#3b537a" />
    </div>
    </Box>
    </div>
    </div>
  );
}