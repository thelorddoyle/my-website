import '../styles/projects.scss'

import {useState} from 'react'

import MFCPreview from '../images/project-MFC.png'
import MFCv1Preview from '../images/project-MFCv1.png'
import UnleashedPreview from '../images/project-unleashed.png'
import CovidKillerPreview from '../images/project-covidKiller.png'
import ReactFormPreview from '../images/virtually-human.png'
import TicTacZodiakPreview from '../images/tictaczodiak.png'

export const Projects = () => {

    const [chosen, setChosen] = useState([])
    const [notChosen, setNotChosen] = useState(['React JS', 'JavaScript', 'TypeScript', 'Node.js', 'GraphQL', 'XState', 'MongoDB', 'Express', 'Ruby on Rails'])
    const defaultTech = ['React JS', 'JavaScript', 'TypeScript', 'Node.js', 'GraphQL', 'XState', 'MongoDB', 'Express', 'Ruby on Rails']
    const [currentTech, setCurrentTech] = useState(null)

    const handleChoice = (ev) => {
        const choice = ev.target.innerHTML

        if (!currentTech) {
            setNotChosen(notChosen.filter(technology => technology !== choice))
            setChosen([choice]);
            projectFilter(choice);
            setCurrentTech(choice);
        } else {
            setNotChosen(defaultTech.filter(tech => tech !== choice))
            setChosen([choice]);
            projectFilter(choice);
            setCurrentTech(choice);
        }

    }

    const handleChosen = () => {
        setCurrentTech(false)
        setChosen([])
        setNotChosen(['React JS', 'JavaScript', 'TypeScript', 'Node.js', 'GraphQL', 'XState', 'MongoDB', 'Express', 'Ruby on Rails']);
        setProjectsToShow([accountFormProject(), mfc2Project(), unleashedProject(), mfc1Project(), covidKillerProject(), ticTacZodiacProject()])
    }

    const accountFormProject = () => {
        return(
            <div key='account-form' className='project-container'>
                <div className='image'>
                    <img src={ReactFormPreview} alt="react form project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>User Account Form - With Custom Date Picker & Image Drag-and-Drop</h1>
                        <h2>Languages used: <span>JavaScript</span>, <span>CSS</span>, <span>HTML</span></h2>
                        <h2>Frameworks used: <span>React JS</span>, <span>React Testing Library</span></h2>
                        <hr className='project-line'/>
                        <p>Front end user account form to practice TDD and React. Custom date picker and drag-and-drop image upload. 11 test suites and 49 tests throught React Testing Library.</p>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://thelorddoyle.github.io/virtually-human-form/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/virtually-human-form"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const mfc2Project = () => {
        return(
            <div key='mfc2' className='project-container'>
                <div className='image'>
                    <img src={MFCPreview} alt="mfc v2 project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>MFC v2.0 - NFT game inspired by MMA sports</h1>
                        <h2>Languages used: <span>TypeScript</span>, <span>JavaScript</span>, <span>CSS</span>, <span>HTML</span></h2>
                        <h2>Frameworks used: <span>React JS</span>, <span>GraphQL</span>, <span>Express</span>, <span>Node.js</span>, <span>XState</span>, <span>SASS</span></h2>
                        <h2>Database used: <span>MongoDB</span></h2>
                        <hr className='project-line'/>
                        <p>For my final project in General Assembly, I decided to re-make and improve my Metaverse Fighting Championship app. Built with a MERN stack the NFT-game really evolved, added in (1) an XState Random Fight Generator (2) GraphQL (3) TypeScript (5) Game Wiki, (4) User Dashboard and (4) custom art.</p>
                        <p className='mfc2'>This is a utility-driven, MMA-inspired NFT game. Connect your wallet (register or login), view your profile, mint your first NFT, view your fighters, view your tournaments, watch a fight, view rankings and edit your account.</p>
                        <h2><span>Username:</span> test <span>Password:</span> password</h2>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://metaverse-fc.netlify.app/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/mfc-front-end"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const mfc1Project = () => {
        return(
            <div key='mfc1' className='project-container'>
                <div className='image'>
                    <img src={MFCv1Preview} alt="mfc v1 project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>MFC v1.0 - NFT game inspired by MMA sports</h1>
                        <h2>Languages used: <span>Ruby</span>, <span>JavaScript</span>, <span>CSS</span>, <span>HTML</span></h2>
                        <h2>Frameworks used: <span>Ruby on Rails</span>, <span>JavaScript</span>, <span>jQuery</span></h2>
                        <h2>Database used: <span>PostgreSQL</span></h2>
                        <hr className='project-line'/>
                        <p>Metaverse Fighting Championship is an NFT-fighting-game emulator. It is not connected to any smart contracts but allows a player to register/login and authenticates users sessions. Users can add Ethereum to their wallet and mint NFT fighters. Once minted, they can either fight or compete in a tournament. A 'fight' is a 50/50 chance and is represented via text through game commentary. An individual NFT's fight history is stored on their unique page along with other relevant stats. Tournaments can be re-watched on the User Profile or Tournaments Page.</p>
                        <h2><span>Username:</span> dlorddoyle@gmail.com <span>Password:</span> chicken</h2>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://metaverse-fc.herokuapp.com/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/MFC-v1"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const unleashedProject = () => {
        return(
            <div key='unleashed' className='project-container'>
                <div className='image'>
                    <img src={UnleashedPreview} alt="unleashed project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>Unleashed - Uber-esque Dog-Walking App</h1>
                        <h2>Languages used: <span>JavaScript</span>, <span>CSS</span>, <span>Ruby</span>, <span>HTML</span></h2>
                        <h2>Frameworks used: <span>React JS</span>, <span>Google Maps API</span>, <span>SASS</span>, <span>Ruby on Rails</span></h2>
                        <h2>Database used: <span>PostgreSQL</span></h2>
                        <hr className='project-line'/>
                        <p>2-sided app where users can join as an Owner or a Walker. An owner can register new pets, edit their current pets and post a walk. Walkers can see these 'walks' that appear in their local area and accept the job. The walker is then guided to their location by the app, and once they have confirmed receipt of the owners pet the owner can watch in real-time as their beloved pet is walked the designated amount of time. The owner can then rate the quality of the walker.</p>
                        <h2><span>Owner:</span> owner@ga.com <span>Walker:</span> walker@ga.com <span>Password:</span> chicken</h2>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://unleashed-client.netlify.app/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jesus-fhz/unleashed-client"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const covidKillerProject = () => {
        return(
            <div key='covidkiller' className='project-container'>
                <div className='image'>
                    <img src={CovidKillerPreview} alt="covid killer project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>Covid Killer - Fun, canvas-based shooter</h1>
                        <h2>Technologies used: <span>JavaScript</span>, <span>HTML Canvas</span>, <span>CSS</span></h2>
                        <hr className='project-line'/>
                        <p>A small side-project during the General Assembly course, I wanted to play around with the HTML Canvas. Inspired by the arcade space shooters, you use your mouse (or finger on mobile!) to shoot approaching covid molecules that explode in a fun way! Over time, the amount of Covid attackers will increase and you compete for the high score for the longest survival time & covid germs killed!</p>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://thelorddoyle.github.io/covid-killer/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/covid-killer"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ticTacZodiacProject = () => {
        return(
            <div key='tictaczodiac' className='project-container'>
                <div className='image'>
                    <img src={TicTacZodiakPreview} alt="tic tac zodiac project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>Tic Tac Zodiac - My first ever project!</h1>
                        <h2>Technologies used: <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span></h2>
                        <hr className='project-line'/>
                        <p>This was my first ever true coding project. A simple tic-tac-toe game, I spiced it up by adding in a small user data collection of their names and birthdays. Geared towards being played with a romantic partner, after 3 games the mystical super-algorithm (not really!) in the background will help you determine if you will are astronomically aligned with each other. Some small highlights: date validation, name validation, some nice CSS and jQuery effects.</p>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://thelorddoyle.github.io/tic-tac-toe/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/tic-tac-toe"><button>Repo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const projects = {
        accountForm: {
            languages: ['React JS', 'JavaScript', 'React Testing Library', 'CSS'],
            jsx: accountFormProject()
        },
        mfc2: {
            languages: ['React JS', 'JavaScript', 'TypeScript', 'GraphQL', 'XState', 'SASS'],
            jsx: mfc2Project()
        },
        mfc1: {
            languages: ['Ruby on Rails', 'SQL', 'JavaScript', 'SASS'],
            jsx: mfc1Project()
        },
        unleashed: {
            languages: ['Google Maps API', 'JavaScript', 'React JS', 'SASS', 'Ruby on Rails'],
            jsx: unleashedProject()
        },
        covidKiller: {
            languages: ['JavaScript', 'CSS', 'HTML'],
            jsx: covidKillerProject()
        },
        ticTacZodiac: {
            languages: ['JavaScript', 'CSS', 'HTML'],
            jsx: ticTacZodiacProject()
        }
    }

    const [projectsToShow, setProjectsToShow] = useState([accountFormProject(), mfc2Project(), unleashedProject(), mfc1Project(), covidKillerProject(), ticTacZodiacProject()])

    const projectFilter = (choice) => {
        let filtered = Object.entries(projects).filter(([key, value]) => {
            if (value.languages.includes(choice)) {
                return key
            } else {
                return null
            }
        })
        const requiredJSX = filtered.map(([_, value]) => {
            return value.jsx
        })

        setProjectsToShow(requiredJSX)
    }

    return(
        <div className="projects">

            <div className='filterByTech'>
                <h3>Choose a technology:</h3>
                <ul>
                    {
                        chosen.map(technology => {
                            return(<li key={technology} onClick={handleChosen} className='chosen'>{technology}</li>)
                        })
                    }
                    {
                        notChosen.map(technology => {
                            return(<li key={technology} onClick={handleChoice}>{technology}</li>)
                        })
                    }
                </ul>
            </div>

            {
                projectsToShow.map(project => project)
            }

        </div>
    )
}