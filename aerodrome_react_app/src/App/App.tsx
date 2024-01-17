import './App.css'
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Status from './Status/Status';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginProvider } from './LoginContext';


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
          </div>
        </LoginProvider>
      </div>
    </Router>
  );
}

export default App
