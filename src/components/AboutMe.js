import { Link } from 'react-router-dom'

import cryptoMe from '../images/cryptome.png'

// Languages
import cssLogo from '../images/logos/css-logo.png'
import htmlLogo from '../images/logos/html-logo.png'
import javaScriptLogo from '../images/logos/javascript-logo.png'
import rubyLogo from '../images/logos/ruby-logo.png'
import rustLogo from '../images/logos/rust-logo.png'
import solidityLogo from '../images/logos/solidity-logo.png'
import typeScriptLogo from '../images/logos/typescript-logo.png'

// Frameworks
import expressLogo from '../images/logos/express-logo.png'
import googleMapsAPILogo from '../images/logos/google-maps-logo.png'
import graphQLLogo from '../images/logos/graphql-logo.png'
import nodeJsLogo from '../images/logos/node-logo.png'
import reactLogo from '../images/logos/react-logo.png'
import rtlLogo from '../images/logos/rtl-logo.png'
import rubyOnRailsLogo from '../images/logos/ruby-on-rails-logo.png'
import sassLogo from '../images/logos/sass-logo.png'
import xStateLogo from '../images/logos/xstate-logo.png'

// Databases
import mongoDBLogo from '../images/logos/mongodb-logo.png'
import postgreSQLLogo from '../images/logos/postgresql-logo.png'

import '../styles/aboutMe.scss'

export const AboutMe = () => {

    return(
        <div className="about-me">
            <div className='about-me-top'>
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
            <div className='about-me-bottom'>
                <h1>Experience with:</h1>

                <div className='flex-row-about'>
                    <div className='bottom-section'>
                        <h2>Languages:</h2>
                        <ul>
                            <li><img className='tech-logo' src={javaScriptLogo} alt="javascript" /><figcaption>JavaScript</figcaption></li>
                            <li><img className='tech-logo' src={typeScriptLogo} alt="typescript" /><figcaption>TypeScript</figcaption></li>
                            <li><img className='tech-logo' src={rubyLogo} alt="ruby" /><figcaption>Ruby</figcaption></li>
                            <li><img className='tech-logo' src={htmlLogo} alt="html" /><figcaption>HTML</figcaption></li>
                            <li><img className='tech-logo' src={cssLogo} alt="css" /><figcaption>CSS</figcaption></li>
                        </ul>
                    </div>
                    <div className='bottom-section'>
                    <h2>Learning:</h2>
                    <ul>
                        <li><img className='tech-logo' src={solidityLogo} alt="" /><figcaption>Solidity</figcaption></li>
                        <li><img className='tech-logo' src={rustLogo} alt="" /><figcaption>Rust</figcaption></li>
                    </ul>
                </div>
                    <div className='bottom-section'>
                        <h2>Databases:</h2>
                        <ul>
                            <li><img className='tech-logo' src={mongoDBLogo} alt="" /><figcaption>Mongo DB</figcaption></li>
                            <li><img className='tech-logo' src={postgreSQLLogo} alt="" /><figcaption>PostgreSQL</figcaption></li>
                        </ul>
                    </div>
                </div>

                <div className='bottom-section'>
                    <h2>Frameworks:</h2>
                    <ul>
                        <li><img className='tech-logo' src={reactLogo} alt="" /><figcaption>React JS</figcaption></li>
                        <li><img className='tech-logo' src={nodeJsLogo} alt="" /><figcaption>Node JS</figcaption></li>
                        <li><img className='tech-logo' src={rubyOnRailsLogo} alt="" /><figcaption>Ruby on Rails</figcaption></li>
                        <li><img className='tech-logo' src={graphQLLogo} alt="" /><figcaption>Graph QL</figcaption></li>
                        <li><img className='tech-logo' src={expressLogo} alt="" /><figcaption>Express</figcaption></li>
                        <li><img className='tech-logo' src={xStateLogo} alt="" /><figcaption>XState</figcaption></li>
                        <li><img className='tech-logo' src={sassLogo} alt="" /><figcaption>SASS</figcaption></li>
                        <li><img className='tech-logo' src={rtlLogo} alt="" /><figcaption>React Testing Library</figcaption></li>
                        <li><img className='tech-logo' src={googleMapsAPILogo} alt="" /><figcaption>Google Maps API</figcaption></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}