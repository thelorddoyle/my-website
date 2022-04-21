import './styles/general.scss';
import './styles/navbar.scss';
import { NavBar } from './components/NavBar'
import { HomePage } from './components/HomePage'
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer'
import { PreCoding } from './components/PreCoding'
import { PostCoding } from './components/PostCoding';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog'
import { Contact } from './components/Contact';

import {TransitionGroup, CSSTransition} from 'react-transition-group'

import {
    Routes,
    Route,
    useLocation
  } from "react-router-dom";

function App() {

    const location = useLocation()

  return (
    <div className="App">
        <NavBar />
        <TransitionGroup>
            <CSSTransition
                timeout={500}
                classNames='fade'
                key={location.key}>

                <Routes location={location}>
                    <Route path="/my-website/" element={<HomePage/>}/>
                    <Route path="about-me" element={<AboutMe/>} />
                    <Route path="/about-me/before" element={<PreCoding />} />
                    <Route path="/about-me/now" element={<PostCoding />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>

            </CSSTransition>
        </TransitionGroup>
        {location.pathname !== '/contact' && <Footer /> }
    </div>
  );
}

export default App;
