import React from 'react';
import cofblogo from '../../assets/cofblogo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding" id='contact'>
    <div className="gpt3__footer-heading Manrope">
      <h1>Contact Us</h1>
    </div>
    <div className="cofb__email Manrope">
    Questions? Email us at <a>championsofblockchain@gmail.com.</a>
    </div>

    <div className="gpt3__footer-copyright Manrope">
      <p>@2022 Champions Of Blockchain. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;