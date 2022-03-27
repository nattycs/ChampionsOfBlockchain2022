import React from 'react';
import kclbc from '../../assets/kclbc.png';
import './header.css';
import { Card, CardContent, Box, Grid, Link } from '@chakra-ui/react';
import { Button } from '@material-ui/core'
import image from "../../assets/site-background.png"; 
import { SocialIcon } from 'react-social-icons';


const Header = () => (
  <div className="gpt3__header section__padding" id="home" style={{ backgroundImage:`url(${image})` }}>
    <div className="gpt3__header-content">
      <h1 >CHAMPIONS OF BLOCKCHAIN <br /> <h2>GLOBAL TRANSFORMATION </h2></h1>
      <h3> 7 - 8 APRIL 2022 </h3>
        <p>
            THE LARGEST STUDENT-LED BLOCKCHAIN CONFERENCE IN THE UK.
        </p>
      <div className="gpt3__header-content__people">
        <h4>PROUDLY PRESENTED BY</h4>
        <img src={kclbc} />
      </div>
    </div>

    <div className="gpt3__header-image">
            <Button style={{
                borderRadius: 10,
                backgroundColor: "#ffcd2a",
                padding: "14px 28px",
                fontSize:"18px",
                fontFamily: "Noir",
                fontWeight:'400',
            }}
            _hover={{textDecoration:'none'}} 
            variant="contained"
            href="https://hopin.com/events/champions-of-blockchain-global-transformation">BOOK NOW</Button>

            <div>
            <SocialIcon className='sm-icons' url="https://www.facebook.com/championsofblockchain" network="facebook" bgColor="#3b537a" />
            <SocialIcon className='sm-icons' url="https://www.linkedin.com/events/championsofblockchain-globaldis6771465335553048577/" network="linkedin" bgColor="#3b537a" />
            <SocialIcon className='sm-icons' url="https://www.instagram.com/championsofblockchain/" network="instagram" bgColor="#3b537a" />
            <SocialIcon className='sm-icons' url="https://twitter.com/champsofblock" network="twitter" bgColor="#3b537a" />
            </div>
    </div>

  </div>

);

export default Header;