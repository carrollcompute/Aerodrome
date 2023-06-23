import logo from './logo.svg';
import './App.css';
import AerodromeStatus from './AerodromeStatus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
    <Router>
      <Routes>
        <Route path="/" element={<AerodromeStatus />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
