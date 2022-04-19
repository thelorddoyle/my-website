import moonboxOriginal from '../images/moonbox.png'
import moonboxGreen from '../images/moonbox-hovered.png'
import { useState } from 'react'

import '../styles/aboutMe.scss'

export const PostCoding = () => {

    const [moonbox, setMoonbox] = useState(moonboxOriginal)

    const changeMoonbox = () => {
        if (moonbox === moonboxOriginal) {
            setMoonbox(moonboxGreen)
        } else {
            setMoonbox(moonboxOriginal)
        }
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

            <div className="experience" onMouseEnter={changeMoonbox} onMouseLeave={changeMoonbox}>
                <img src={moonbox} alt="moonbox"/>
                <h1>Moonbox, <span>2019-21</span></h1>
                <h2>Junior Software Engineer</h2>
                <hr className="experience-hr" />
                <p>Initially deployed and integrated Yotpo reviews system. After 1 year, removed Yotpo. Designed, built and deployed Reviews.io which has a seamless integration with Klaviyo. Upgraded Klaviyo so we could demonstrate realtime reviews and review requests in our e-mail automation. Improved our purchase-to-review ratio by over 300%.</p>
            </div>

        </div>
    )
}