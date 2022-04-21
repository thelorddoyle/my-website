import '../styles/homepage.scss'
import quickLinkResume from '../images/quickLinkResume.png'
import solidityPart1 from '../images/solidity-part-1.png'
import myYouteach from '../images/my-youteach.png'

export const HomePage = () => {
    return(
        <div className='home-page-container'>

            <div className="tldr">
                <h1>tl;dr</h1>
                <p>My name is Daniel Lord-Doyle. I am a junior software engineer based in Sydney. I am always trying to learn more about (1) how <span>cryptocurrency and blockchain</span> can impact the world, (2) the benefits of <span>decentralisation</span> and (3) everything about in-game <span>NFTs, economics & incentive</span> systems.</p>
            </div>

            <div className='articles'>

                <div className='article'>
                    <div className='article-header-line'>
                        <h1>Learning Solidity for Free - Part 1</h1>
                        <span className='green-dot'></span>
                        <p>🤖 Learning Web3</p>
                    </div>
                    <div className='article-description'>
                        <img src={solidityPart1} alt="" />
                        <div>
                            <p>In my beginner's web3 journey I decided to learn Solidity. This first article outlines my self-made curriculum. You will find links for all of the resources I found and a rating for how useful I found them! Hopefully this helps other beginners get started on their own Solidity journey.</p>
                            <div className='article-button-section'>
                            <button>Read more</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='article'>
                    <div className='article-header-line'>
                        <h1>My YouTeach Presentation: The History of Money & Cryptocurrency</h1>
                        <span className='green-dot'></span>
                        <p>🔑 Crypto</p>
                    </div>
                    <div className='article-description'>
                        <img src={myYouteach} alt="" />
                        <div>
                            <p>As part of General Assembly (the software immersive I completed recently) we were all asked to do a 20-minute presentation on something we are passionate about. In this video, I discuss the history of money, what makes a form of currency high quality and how cryptocurrency stacks up against fiat currency.</p>
                            <div className='article-button-section'>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='quick-links'>
                <h1>Quick Links</h1>
                <div className='quick-links-bar'>
                    <div className='quick-links-resume'>                        
                        <img className='resume-image' src={quickLinkResume} alt="Quick link to download resumé"/>
                        <a href="">Download Resumé</a>
                    </div>
                </div>
            </div>
        </div>
    )
}