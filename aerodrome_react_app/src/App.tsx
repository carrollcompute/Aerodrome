import './App.css'
import NavBar from './components/NavBar';
import About from './components/About';
import AppContainer from './components/AppContainer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
