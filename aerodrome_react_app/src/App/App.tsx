import './App.css'
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Status from './Status/Status';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { LoginProvider } from './LoginContext';
import AerodromeImage from './Status/AerodromeImage';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <LoginProvider>
          <div className="nav-bar">
            <NavBar />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Status />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <AerodromeImage />
          </div>
        </LoginProvider>
      </div>
    </Router>
  );
}

export default App
