import durhamOriginal from '../images/durham.png'
import durhamGreen from '../images/durham-hovered.png'
import oaktreeOriginal from '../images/oaktree.png'
import oaktreeGreen from '../images/oaktree-hovered.png'
import gradTouchOriginal from '../images/gradtouch.png'
import gradTouchGreen from '../images/gradtouch-hovered.png'
import { useState } from 'react'

import '../styles/aboutMe.scss'

export const PreCoding = () => {

    const [durham, setDurham] = useState(durhamOriginal)
    const [oaktree, setOaktree] = useState(oaktreeOriginal)
    const [gradtouch, setGradTouch] = useState(gradTouchOriginal)

    const changeDurham = () => {
        if (durham === durhamOriginal) {
            setDurham(durhamGreen)
        } else {
            setDurham(durhamOriginal)
        }
    }

    const changeOaktree = () => {
        if (oaktree === oaktreeOriginal) {
            setOaktree(oaktreeGreen)
        } else {
            setOaktree(oaktreeOriginal)
        }
    }

    const changeGradTouch = () => {
        if (gradtouch === gradTouchOriginal) {
            setGradTouch(gradTouchGreen)
        } else {
            setGradTouch(gradTouchOriginal)
        }
    }

    const durhamUniExperience = () => {
        return(
            <div className="experience" onMouseEnter={changeDurham} onMouseLeave={changeDurham}>
                <img src={durham} alt="durham university"/>
                <h1>Durham University, <span>2007-10</span></h1>
                <h2>BA, Sociology</h2>
                <hr className="experience-hr" />
                <p>Studied Sociology, the study of large groups of humans and their behaviour.</p>
            </div>
        )
    }

    const oaktreeExperience = () => {
        return(
            <div className="experience" onMouseEnter={changeOaktree} onMouseLeave={changeOaktree}>
                <img src={oaktree} alt="oaktree telemarketing"/>
                <h1>Oaktree, <span>2012-15</span></h1>
                <h2>Sales Operations Manager</h2>
                <hr className="experience-hr" />
                <p>A range of direct roles including client acquisition, logistics management, human resources, support service management, leading a team of Account Managers and working with the Directors to determine the overall operational strategy.</p>
            </div>
        )
    }

    const gradTouchExperience = () => {
        return(
            <div className="experience" onMouseEnter={changeGradTouch} onMouseLeave={changeGradTouch}>
                <img src={gradtouch} alt="gradtouch"/>
                <h1>Gradtouch, <span>2015-18</span></h1>
                <h2>Sales & Marketing Lead</h2>
                <hr className="experience-hr" />
                <p>Oversaw the production, build and release of our new B2B website. Managed social media strategy across all channels, including copy and content creation. Developed proficiency in understanding all associated marketing data, and using this data to influence ongoing strategy.</p>
            </div>
        )
    }

    const oldestToMostRecent = [durhamUniExperience(), oaktreeExperience(), gradTouchExperience()]
    const mostRecentToOldest = [gradTouchExperience(), oaktreeExperience(), durhamUniExperience()]

    const [toggled, setToggled] = useState(false)

    const handleToggle = () => {
        setToggled(!toggled)
    }

    return(
        <div className='pre-coding'>

            <div className="title">
                <button>Pre-Coding</button>
            </div>

            <div className="tldr">
                <h1>tl;dr</h1>
                <p>Startup growth expert who has built companies internationally. In the role of <span>sales and marketing lead</span>, I have done this and done that. Focus on technical tasks, agile teams and other stuff etc etc. I remember I remember the 5th of November.</p>
            </div>

            <div className='toggle-container'>
                <h3>Toggle me:</h3>
                <div>
                    {
                        toggled
                        ?
                        <button className='toggle' onClick={handleToggle}>Ancient History First</button>
                        :
                        <button className='toggle' onClick={handleToggle}>Most Recent First</button>
                    }
                </div>
            </div>

            {
                toggled
                ?
                mostRecentToOldest.map(experience => experience)
                :
                oldestToMostRecent.map(experience => experience)
            }

        </div>
    )
}