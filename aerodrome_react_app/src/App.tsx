import './App.css'
import NavBar from './components/NavBar';
import AppContainer from './components/AppContainer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StatusForm from './components/StatusForm';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/form" element={<StatusForm />} />
          <Route path="/" element={<AppContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
