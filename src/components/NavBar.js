import '../styles/navbar.scss';
import logoWhite from '../images/DLlogo.png'
import logoGreen from '../images/logoOnHover.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [logo, setLogo] = useState(logoWhite)

    const changeLogoColour = () => {
        if (logo === logoWhite) {
            setLogo(logoGreen)
        } else {
            setLogo(logoWhite)
        }
    }



    return(
        <div className='navbar-container'>
            <div className='grain'></div>

            <Link to="/">
                <img className='logo' src={logo} alt="" onMouseEnter={changeLogoColour} onMouseLeave={changeLogoColour} />
            </Link>
            <div className='links'>
                <ul>
                    <Link to='/about-me'><li>About Me</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}