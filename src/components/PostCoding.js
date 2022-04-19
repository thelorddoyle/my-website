import moonboxOriginal from '../images/moonbox.png'
import moonboxGreen from '../images/moonbox-hovered.png'
import selfieskinOriginal from '../images/selfieskin.png'
import selfieskinGreen from '../images/selfieskin-hovered.png'
import generalAssemblyOriginal from '../images/generalassembly.png'
import generalAssemblyGreen from '../images/generalassembly-hovered.png'
import { useState } from 'react'

import '../styles/aboutMe.scss'

export const PostCoding = () => {

    const [moonbox, setMoonbox] = useState(moonboxOriginal)
    const [selfieskin, setSelfieskin] = useState(selfieskinOriginal)
    const [generalAssembly, setGeneralAssembly] = useState(generalAssemblyOriginal)

    const changeMoonbox = () => {
        if (moonbox === moonboxOriginal) {
            setMoonbox(moonboxGreen)
        } else {
            setMoonbox(moonboxOriginal)
        }
    }

    const changeSelfieskin = () => {
        if (selfieskin === selfieskinOriginal) {
            setSelfieskin(selfieskinGreen)
        } else {
            setSelfieskin(selfieskinOriginal)
        }
    }

    const changeGeneralAssembly = () => {
        if (generalAssembly === generalAssemblyOriginal) {
            setGeneralAssembly(generalAssemblyGreen)
        } else {
            setGeneralAssembly(generalAssemblyOriginal)
        }
    }

    const moonboxExperience = () => {
        return(
            <div className="experience" onMouseEnter={changeMoonbox} onMouseLeave={changeMoonbox}>
                <img src={moonbox} alt="moonbox"/>
                <h1>Moonbox, <span>2019-21</span></h1>
                <h2>Junior Software Engineer</h2>
                <hr className="experience-hr" />
                <p>Initially deployed and integrated Yotpo reviews system. After 1 year, removed Yotpo. Designed, built and deployed Reviews.io which has a seamless integration with Klaviyo. Upgraded Klaviyo so we could demonstrate realtime reviews and review requests in our e-mail automation. Improved our purchase-to-review ratio by over 300%.</p>
            </div>
        )
    }

    const selfieSkinExperience = () => {
        return(
            <div className="experience" onMouseEnter={changeSelfieskin} onMouseLeave={changeSelfieskin}>
                <img src={selfieskin} alt="selfie skin"/>
                <h1>Selfie Skin, <span>2019-22</span></h1>
                <h2>Founder & Web Developer</h2>
                <hr className="experience-hr" />
                <p>Achieved $600k revenue in first year, and $1.2m revenue in second year of operation through direct sales. Selfie Skin is now stocked in many of Australia's largest online retail stores including Adore Beauty and lookfantastic, as well as being stocked in the US by Urban Outfitters</p>
            </div>
        )
    }

    const generalAssemblyExperience = () => {
        return(
            <div className="experience" onMouseEnter={changeGeneralAssembly} onMouseLeave={changeGeneralAssembly}>
                <img src={generalAssembly} alt="general assembly"/>
                <h1>General Assembly, <span>2021-22</span></h1>
                <h2>Software Engineering Immersive</h2>
                <hr className="experience-hr" />
                <p>“GA gave me the foundational knowledge and confidence to pursue my career goals. With caring teachers, a supportive community, and up-to-date, challenging curriculum, I felt prepared and motivated to build and improve tech for the next generation!”</p>
            </div>
        )
    }

    const oldestToMostRecent = [moonboxExperience(), selfieSkinExperience(), generalAssemblyExperience()]
    const mostRecentToOldest = [generalAssemblyExperience(), selfieSkinExperience(), moonboxExperience()]

    const [toggled, setToggled] = useState(false)

    const handleToggle = () => {
        setToggled(!toggled)
    }

    return(
        <div className='pre-coding'>

            <div className="title">
                <button>Post-Coding</button>
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