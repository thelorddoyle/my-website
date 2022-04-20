import '../styles/projects.scss'

import {useState} from 'react'

import MFCPreview from '../images/project-MFC.png'
import MFCv1Preview from '../images/project-MFCv1.png'
import UnleashedPreview from '../images/project-unleashed.png'
import CovidKillerPreview from '../images/project-covidKiller.png'
import ReactForm from '../images/virtually-human.png'

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
        setProjectsToShow([accountFormProject(), mfc2Project(), mfc1Project(), unleashedProject(), covidKillerProject()])
    }

    const accountFormProject = () => {
        return(
            <div key='account-form' className='project-container'>
                <div className='image'>
                    <img src={ReactForm} alt="react form project" />
                </div>
                <div className='project-description'>
                    <div>
                        <h1>User Account Form - With Custom Date Picker & Image Drag-and-Drop</h1>
                        <h2>Technologies used: <span>React JS</span>, <span>JavaScript</span>, <span>React Testing Library</span>, <span>CSS</span></h2>
                        <hr className='project-line'/>
                        <p>Front end user account form to practice TDD and React. Custom date picker and drag-and-drop image upload. 11 test suites and 49 tests throught React Testing Library.</p>
                        <div className='project-buttons'>
                            <a href=""><button>Website</button></a>
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
                        <h2>Technologies used: <span>React JS</span>, <span>TypeScript</span>, <span>GraphQL</span>, <span>JavaScript</span>, <span>XState</span>, <span>SASS</span></h2>
                        <hr className='project-line'/>
                        <p>Front & back-end MERN application that allows users to purchase NFTs, and compete in multiplayer tournaments earning Ethereum prizes.</p>
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
                        <h2>Technologies used: <span>Ruby on Rails</span>, <span>SQL</span>, <span>JavaScript</span>, <span>SASS</span></h2>
                        <hr className='project-line'/>
                        <p>Full stack Ruby on Rails application that authenticates users, allows them  to mint NFTs, and compete in a range of multiplayer tournaments earning Ethereum prizes.</p>
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
                        <h2>Technologies used: <span>Google Maps API</span>, <span>JavaScript</span>, <span>React JS</span>, <span>SASS</span>, <span>Ruby on Rails (back-end)</span></h2>
                        <hr className='project-line'/>
                        <p>Two-sided app where users can join as an Owner or a Walker. An owner can register new pets, edit their current pets and post a walk. Walkers can see these 'walks' that appear in their local area and accept the job. The walker is then guided to their location by the app, and once they have confirmed receipt of the owners pet the owner can watch in real-time as their beloved pet is walked the designated amount of time. The owner can then rate the quality of the walker.</p>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href=""><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href=""><button>Repo</button></a>
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
                        <p>Two-sided app where users can join as an Owner or a Walker. An owner can register new pets, edit their current pets and post a walk. Walkers can see these 'walks' that appear in their local area and accept the job. The walker is then guided to their location by the app, and once they have confirmed receipt of the owners pet the owner can watch in real-time as their beloved pet is walked the designated amount of time. The owner can then rate the quality of the walker.</p>
                        <div className='project-buttons'>
                            <a target='_blank' rel='noreferrer' href="https://thelorddoyle.github.io/covid-killer/"><button>Website</button></a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/thelorddoyle/covid-killer"><button>Repo</button></a>
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
        }
    }

    const [projectsToShow, setProjectsToShow] = useState([accountFormProject(), mfc2Project(), mfc1Project(), unleashedProject(), covidKillerProject()])

    const projectFilter = (choice) => {
        let filtered = Object.entries(projects).filter(([key, value]) => {
            if (value.languages.includes(choice)) {
                return key
            } 
        })
        const requiredJSX = filtered.map(([key, value]) => {
            return value.jsx
        })

        setProjectsToShow(requiredJSX)
    }

    return(
        <div className="projects">

            <div className="title">
                <button>Projects</button>
            </div>

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