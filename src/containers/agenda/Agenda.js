import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  import './agenda.css'
  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function gridListWithCTA() {
    return (
        <div className = 'cofb__agenda-page' id='agenda'>
        <div className='cofb__agenda Manrope'>
            <h1>AGENDA</h1>
        </div>
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 color='#ffcd2a' fontSize="5xl" fontWeight="200" fontFamily={'Manrope'}>
                Vision
              </chakra.h2>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p fontFamily={'Manrope'} fontSize="2xl" color="white">
                To highlight the vast industries in which Blockchain technology is transforming the way they function through reshaping and forming new ecosystems. 
                Blockchain is not just a technology of the future that promises change, it is continuously reshaping the fabrics of society and we seek to illustrate this phenomenon as the key focal point of this conference.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 color='#ffcd2a' fontSize="5xl" fontWeight="200" fontFamily={'Noir'}>
                Mission
              </chakra.h2>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p fontFamily={'Noir'} fontSize="2xl" color="white">
              1. To promote awareness and bring representation of Blockchain in higher education by coordinating a student led effort to broadcast the message of its significance. 
            <br />
            2. To show a diverse range of use cases with Blockchain technology and how it touches upon a wide range of areas we interact with in our daily lives from sustainability to the arts.
            <br />
            3. To present the groundbreaking innovations that have taken place in the realm of Decentralised Finance (DeFi) and NFTs.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <br />
      <br />
      </div>
    );
  }