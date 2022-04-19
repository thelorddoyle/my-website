import { Link } from 'react-router-dom'

import cryptoMe from '../images/cryptome.png'

import '../styles/aboutMe.scss'

export const AboutMe = () => {

    return(
        <div className="about-me">
            <div className='pfp-section'>
                <img src={cryptoMe} alt="" />
            </div>
            <div className='info-section'>
                <h2>Hello, my name is Daniel Lord-Doyle.</h2>
                <h2>There are two versions of me.</h2>
                <h2 className='last-info'>Which would you like to learn about?</h2>
                <div className='about-me-buttons'>
                    <Link to='/about-me/before'><button>Pre-Coding</button></Link>
                    <Link to='/about-me/now'><button>Post-Coding</button></Link>
                </div>
            </div>
        </div>
    )
}