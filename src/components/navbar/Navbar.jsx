import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/cofblogo.png';
import './navbar.css';
import MediaQuery from 'react-responsive'

const Menu = () => (
    <>
    <p><a href="#home">HOME</a></p>
    <p><a href="#speakers">SPEAKERS</a></p>
    <p><a href="#agenda">AGENDA</a></p>
    <p><a href="#schedule">SCHEDULE</a></p>
    <p><a href="#tickets">TICKETS</a></p>
    <p><a href="#sponsors">SPONSORS</a></p>
    <p><a href="#contact">CONTACT</a></p>
    </>
  )

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar Manrope">
      <div className="gpt3__navbar-links Manrope">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container Manrope">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu Manrope">
        {toggleMenu
          ? <RiCloseLine color="#3b537a" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#3b537a" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center Manrope">
          <div className="gpt3__navbar-menu_container-links Manrope">
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;