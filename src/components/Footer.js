import { useState } from 'react'

import '../styles/footer.scss'

import emailWhite from '../images/email.png'
import emailGreen from '../images/email-hover.png'
import linkedinWhite from '../images/linkedin.png'
import linkedinGreen from '../images/linkedin-hover.png'
import githubWhite from '../images/github.png'
import githubGreen from '../images/github-hover.png'
import twitterWhite from '../images/twitter.png'
import twitterGreen from '../images/twitter-hover.png'

export const Footer = () => {

    const [email, setEmail] = useState(emailWhite)
    const [linkedin, setLinkedin] = useState(linkedinWhite)
    const [github, setGithub] = useState(githubWhite)
    const [twitter, setTwitter] = useState(twitterWhite)

    const changeEmailColour = () => {
        if (email === emailWhite) {
            setEmail(emailGreen)
        } else {
            setEmail(emailWhite)
        }
    }

    const changeLinkedInColour = () => {
        if (linkedin === linkedinWhite) {
            setLinkedin(linkedinGreen)
        } else {
            setLinkedin(linkedinWhite)
        }
    }

    const changeGithubColour = () => {
        if (github === githubWhite) {
            setGithub(githubGreen)
        } else {
            setGithub(githubWhite)
        }
    }

    const changeTwitterColour = () => {
        if (twitter === twitterWhite) {
            setTwitter(twitterGreen)
        } else {
            setTwitter(twitterWhite)
        }
    }

    return(
        <div className="footer-section">

            <hr className='dotted-line'/>

            <h1>How To Contact Me</h1>
            <div className="socials">
                <img src={email} alt="" onMouseEnter={changeEmailColour} onMouseLeave={changeEmailColour}/>
                <img src={linkedin} alt="" onMouseEnter={changeLinkedInColour} onMouseLeave={changeLinkedInColour}/>
                <img src={github} alt="" onMouseEnter={changeGithubColour} onMouseLeave={changeGithubColour}/>
                <img src={twitter} alt="" onMouseEnter={changeTwitterColour} onMouseLeave={changeTwitterColour}/>
            </div>
            <h1 className='copyright'>Copyright Daniel Lord-Doyle © 2022</h1>
        </div>
    )
}