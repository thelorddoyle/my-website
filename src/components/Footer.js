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
                <a target='_blank' rel='noreferrer' href="mailto:dlorddoyle@gmail.com"><img src={email} alt="" onMouseEnter={changeEmailColour} onMouseLeave={changeEmailColour}/></a>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/daniel-lord-doyle/"><img src={linkedin} alt="" onMouseEnter={changeLinkedInColour} onMouseLeave={changeLinkedInColour}/></a>
                <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/"><img src={github} alt="" onMouseEnter={changeGithubColour} onMouseLeave={changeGithubColour}/></a>
                <a target='_blank' rel='noreferrer' href="https://twitter.com/thelorddoyle"><img src={twitter} alt="" onMouseEnter={changeTwitterColour} onMouseLeave={changeTwitterColour}/></a>
            </div>
            <h1 className='copyright'>Copyright Daniel Lord-Doyle ?? 2022</h1>
        </div>
    )
}