
import './App.css';
import AerodromeStatus from './AerodromeStatus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AerodromeStatusForm } from './ui-components';

function App() {
  return (
    <div className="app-container">
    <Router>
      <Routes>
        <Route path="/" element={<AerodromeStatus />} />
        <Route path="/status-form" element={<AerodromeStatusForm AerodromeStatus={/*an existing %data model% record */}/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
