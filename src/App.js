import './styles/general.scss';
import './styles/navbar.scss';
import { NavBar } from './components/NavBar'
import { HomePage } from './components/HomePage'
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer'
import { PreCoding } from './components/PreCoding'
import { PostCoding } from './components/PostCoding';

import {TransitionGroup, CSSTransition} from 'react-transition-group'

import {
    BrowserRouter as Router,
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
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="about-me" element={<AboutMe/>} />
                    <Route path="/about-me/before" element={<PreCoding />} />
                    <Route path="/about-me/now" element={<PostCoding />} />
                </Routes>

            </CSSTransition>
        </TransitionGroup>
        <Footer />
    </div>
  );
}

export default App;
