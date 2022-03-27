import React from 'react';
import './socialmedia.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Socialmedia = () => (
  <div className="gpt3__brand-section__padding">
      <h1 className="cofb__follow">Follow Us:</h1>
    <div>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(59,83,122,1)" iconSize="3" roundness="50%" url="https://www.facebook.com/championsofblockchain" size="50" />
    </div>
    <div>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(59,83,122,1)" iconSize="3" roundness="12%" url="https://www.linkedin.com/events/championsofblockchain-globaldis6771465335553048577/" size="50" />
    </div>
    <div>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="inset" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(59,83,122,1)" iconSize="3" roundness="25%" url="https://www.instagram.com/championsofblockchain/" size="50" />
    </div>
   </div>
);

export default Socialmedia;