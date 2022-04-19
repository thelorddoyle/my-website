import './styles/general.scss';
import './styles/navbar.scss';
import { NavBar } from './components/NavBar'
import { HomePage } from './components/HomePage'
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer'
import { PreCoding } from './components/PreCoding'
import { PostCoding } from './components/PostCoding';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about-me" element={<AboutMe/>} />
            <Route path="/about-me/before" element={<PreCoding />} />
            <Route path="/about-me/now" element={<PostCoding />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
