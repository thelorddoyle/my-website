import '../styles/blog.scss'
import pragamticProgrammer from '../images/pragmatic.jpg'
import graphQL from '../images/graphql.jpg'

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