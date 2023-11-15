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
          <NavBar />
          <div className="flex-container">
            <Routes>
              <Route path="/" element={<Status />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <AerodromeImage />
            <Routes>
              <Route path="/" element={<Status />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </LoginProvider>
      </div>
    </Router>
  );
}

export default App
