import '../styles/blog.scss'
import pragamticProgrammer from '../images/pragmatic.jpg'
import graphQL from '../images/graphql.jpg'
import solidityPart1 from '../images/solidity-part-1.png'
import myYouteach from '../images/my-youteach.png'

export const Blog = () => {
    return(
        <div className="blog">
            <div className='filterByCategory'>
                <h3>Choose a category:</h3>
                <ul>
                    <li>📚 Books</li>
                    <li>📝 Dan's Docs</li>
                    <li>🤖 Learning Web3</li>
                    <li>🔑 Crypto</li>
                    <li>🎮 Game Economics</li>
                </ul>
            </div>

            <div className='articles'>

                <div className='article'>
                    <div className='article-header-line'>
                        <h1>Learning Solidity - Part 1</h1>
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

                <div className='article'>
                    <div className='article-header-line'>
                        <h1>Top 5 Lessons from Reading 'The Pragmatic Programmer'</h1>
                        <span className='green-dot'></span>
                        <p>📚 Books</p>
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
                        <span className='green-dot'></span>
                        <p>📝 Dan's Docs</p>
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
        </div>
    )
}