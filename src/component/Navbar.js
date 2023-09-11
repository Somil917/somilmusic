import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
        <nav className="nav-bar">
            <div className="main-container">
                <div className="contain-logo">
                    <NavLink to="/somilmusic"><h2>SOMIL</h2></NavLink>
                </div>
                <div className={openMenu ?  "mobile-buttons" : "contain-buttons"}>
                    <ul>
                        <li><NavLink to="/somilmusic">Home</NavLink></li>
                        <li><a href="#web_foot">Services</a></li>
                        <li><a href="#contact_page">Contact</a></li>
                        <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                        <li><NavLink to="/login" id="loginbtn">LogIn</NavLink></li>
                    </ul>
                <div className="contain-menu">
                        <ion-icon className="open-menu" name="menu-outline" onClick={()=>setOpenMenu(!openMenu)}></ion-icon>   
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar