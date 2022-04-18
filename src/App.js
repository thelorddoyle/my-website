import './styles/general.scss';
import './styles/navbar.scss';
import { NavBar } from './components/NavBar'
import { HomePage } from './components/HomePage'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <HomePage />
        <Footer />
    </div>
  );
}

export default App;
