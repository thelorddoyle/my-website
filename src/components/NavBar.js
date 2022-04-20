import '../styles/navbar.scss';
import logoWhite from '../images/DLlogo.png'
import logoGreen from '../images/logoOnHover.png'
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const [logo, setLogo] = useState(logoWhite)
    const [navBarClass, setNavBarClass] = useState('navbar-container')

    const changeLogoColour = () => {
        if (logo === logoWhite) {
            setLogo(logoGreen)
        } else {
            setLogo(logoWhite)
        }
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavBarClass('navbar-container navbar-scrolled')
        } else {
            setNavBarClass('navbar-container')
        }
    }

    return(
        <div className={navBarClass} onClick={handleScroll}>
            <div className='grain'></div>

            <Link to="/my-website/">
                <img className='logo' src={logo} alt="" onMouseEnter={changeLogoColour} onMouseLeave={changeLogoColour} />
            </Link>
            <div className='links'>
                <ul>
                    <NavLink className={(navData) => (navData.isActive ? "active" : null)} to='/about-me'><li>About Me</li></NavLink>
                    <NavLink className={(navData) => (navData.isActive ? "active" : null)} to="/projects"><li>Projects</li></NavLink>
                    <NavLink className={(navData) => (navData.isActive ? "active" : null)} to="/blog"><li>Blog</li></NavLink>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}