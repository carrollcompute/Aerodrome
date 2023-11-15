import './App.css'
import NavBar from './NavBar/NavBar';
import About from './About/About';
import AppContainer from './AppContainer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { LoginProvider } from './LoginContext';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <LoginProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<AppContainer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </LoginProvider>
      </div>
    </Router>
  );
}

export default App
