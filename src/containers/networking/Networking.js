import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Text
  } from '@chakra-ui/react';
import {Button} from '@material-ui/core'
  import './networking.css'
  import bronze from '../../assets/bronze.png';
  import silver from '../../assets/silver.png';
  import gold from '../../assets/gold.png';

  
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
        <div className='cofb__networking-page' id='tickets'>
        <div className= 'cofb__networking'>
        <h1>TICKETS</h1>
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                <SimpleGrid color={'white'} fontFamily='Noir' columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <div className='cofb__networking-blocks'>
                <img src={bronze} width='150px'/>
                <a>STUDENTS</a>
                {/* <StatsCard title={'This event'} stat={'Is an opportunity to network with industry experts from a wide range of sectors in the Blockchain landscape and attend Q&As to have your questions addressed.'} /> */}
                <Box w={'full'} borderRadius='10px' borderColor='white' borderWidth='1px' h={300}>
                  <Text textAlign='center' fontWeight={'400'} fontSize={'28px'} p={5}>
                    - Access to conference
                  </Text>
                </Box>
                </div>
                <div className='cofb__networking-blocks'>
                <img src={silver} width='150px'/>
                <a>STUDENTS PLUS</a>
                {/* <StatsCard title={' '} stat={'- Access to the conference -Access to the event recordings - Certificate of participation'} /> */}
                <Box w={'full'} borderRadius='10px' borderColor='white' borderWidth='1px' h={300}>
                  <Text textAlign='center' fontWeight={'400'} fontSize={'28px'} p={5}>
                    - Access to conference
                    <br />
                    - Access to event recordings
                    <br />
                    - Certificate of participation
                  </Text>
                </Box>
                </div>
                <div className='cofb__networking-blocks'>
                <img src={gold} width='150px'/>
                <a>PROFESSIONALS</a>
                {/* <StatsCard title={'2. Networking Roulette:'} stat={'1 to 1 speed networking amongst all attendees'} /> */}
                <Box w={'full'} borderRadius='10px' borderColor='white' borderWidth='1px' h={300}>
                  <Text textAlign='center' fontWeight={'400'} fontSize={'28px'} p={5}>
                    - Access to conference
                    <br />
                    - Access to event recordings
                    <br />
                    - Certificate of participation
                  </Text>
                </Box>
                </div>
                </SimpleGrid>
                </Box>
                <br/>
                <br/>
                <div className='cofb__networking-button'>
                <a>BOOK HERE NOW:</a>
                <Button style={{
                borderRadius: 10,
                backgroundColor: "#ffcd2a",
                padding: "14px 28px",
                fontSize:"18px",
                fontFamily: "Noir",
                fontWeight:'400',
                color: 'black'
                }} variant="contained"
                href="https://hopin.com/events/champions-of-blockchain-global-transformation">BOOK NOW</Button>
                </div>
                <br />
                <br />
            </div>
            </div>
    );
  }