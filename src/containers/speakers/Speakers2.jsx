import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import './speakers.css'
import champions from '../../assets/champions-3.png'
import { SocialIcon } from 'react-social-icons';
import { MediaQuery, Wrapper, DeskTopView, Banner, Retina } from 'react-responsive'

export default function Info() {
  return (
    <Wrapper>
    <MediaQuery minWidth={1224}>
      <DeskTopView>This will display in desktop screen</DeskTopView>
      <MediaQuery minWidth={1824}>
        <Banner text="this will dsiplay on larger screen size" />
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {(matches) =>
        matches
          ? <Retina>This is a retina view</Retina>
          : <div>This isn't a retina</div>
      }
    </MediaQuery>
  </Wrapper>
  );
}