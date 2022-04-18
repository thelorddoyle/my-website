import '../styles/navbar.scss';
import logoWhite from '../images/DLlogo.png'
import logoGreen from '../images/logoOnHover.png'
import { useState } from 'react';

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
            <img className='logo' src={logo} alt="" onMouseEnter={changeLogoColour} onMouseLeave={changeLogoColour} />
            <div className='links'>
                <ul>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}