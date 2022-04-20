import '../styles/homepage.scss'
import quickLinkResume from '../images/quickLinkResume.png'
import pragamticProgrammer from '../images/pragmatic.jpg'
import graphQL from '../images/graphql.jpg'

export const HomePage = () => {
    return(
        <div className='home-page-container'>

            <div className="tldr">
                <h1>tl;dr</h1>
                <p>My name is Daniel Lord-Doyle. I am a junior software engineer based in Sydney. I am always trying to learn more about (1) how <span>cryptocurrency and blockchain</span> can impact the world, (2) the benefits of <span>decentralisation</span> and (3) everything about in-game <span>NFTs, economics & incentive</span> systems.</p>
            </div>

            <div className='latest-articles'>
                <h1>Latest Articles</h1>
                <div className='article'>
                    <div className='article-header-line'>
                        <h1>Top 5 Lessons from Reading 'The Pragmatic Programmer'</h1>
                        <span className='green-dot'></span>
                        <p>Category: Books</p>
                    </div>
                    <div className='article-description'>
                        <img src={pragamticProgrammer} alt="" />
                        <div>
                            <p>The book “The Pragmatic Programmer” by David Thomas and Andrew Hunt is one of the “must-read” for a developer. Co-author Andrew Hunt took part in the creation of the Agile Manifesto back in 2001.
                            This book can give you a lot of practical advice on how to write flexible, dynamic, and adaptable software.</p>
                            <div className='article-button-section'>
                            <button>Read more</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='article'>
                    <div className='article-header-line'>
                        <h1>How To Get Started With GraphQL</h1>
                        <span className='red-dot'></span>
                        <p>Category: Don't Read The F*&king Manual</p>
                    </div>
                    <div className='article-description'>
                        <img src={graphQL} alt="" />
                        <div>
                            <p>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p>
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