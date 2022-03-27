import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/cofblogo.png'

const Menu = () => (
  <>
  <p><a href="#home">HOME</a></p>
  <p><a href="#speakers">SPEAKERS</a></p>
  <p><a href="#agenda">AGENDA</a></p>
  <p><a href="#schedule">SCHEDULE</a></p>
  <p><a href="#netorking">NETWORKING</a></p>
  <p><a href="#sponsor">SPONSOR</a></p>
  <p><a href="#eventpartners">EVENT PARTNERS</a></p>
  <p><a href="#contact">CONTACT</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cofb2022__navbar">
      <div className="cofb2022__navbar-links">
        <div className="cofb2022__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="cofb2022__navbar-links_container">
        <Menu />
      </div>
      </div>
      <div className="cofb2022__navbar-menu">
      {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />}
        {
          toggleMenu && (
            <div className = "cofb2022_navbar-menu_container scale-up-center">
              <div className = "cofb2022_navbar-menu_container-links">
                <Menu />
              </div> 
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
