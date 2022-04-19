import { useState } from 'react'
import { Link } from 'react-router-dom'

import cryptoMe from '../images/cryptome.png'
import prevMe from '../images/prevme.png'

import '../styles/aboutMe.scss'

export const AboutMe = () => {

    const [pfp, setPfp] = useState(cryptoMe)

    const changeToPrevMe = () => {
        setPfp(prevMe)
    }

    const changeToCryptoMe = () => {
        setPfp(cryptoMe)
    }

    return(
        <div className="about-me">
            <div className='pfp-section'>
                <img src={pfp} alt="" />
            </div>
            <div className='info-section'>
                <h2>Hello, my name is Daniel Lord-Doyle.</h2>
                <h2>There are two versions of me.</h2>
                <h2 className='last-info'>Which would you like to learn about?</h2>
                <div className='about-me-buttons'>
                    <Link to='/about-me/before'><button onMouseEnter={changeToPrevMe}>Pre-Coding</button></Link>
                    <Link to='/about-me/now'><button onMouseEnter={changeToCryptoMe}>Post-Coding</button></Link>
                </div>
            </div>
        </div>
    )
}