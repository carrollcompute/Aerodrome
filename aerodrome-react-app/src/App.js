import React from 'react';
import { API } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.css';
import Aerodrome from './components/Aerodrome';
import UpdateForm from './components/UpdateForm';
import awsconfig from './aws-exports';

API.configure(awsconfig);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Rest of the code */}
          <nav>
                <Aerodrome />
          </nav>
        </header>

        <Routes>
          <Route path="/update" element={<UpdateForm />}>
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} /> {/* New Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
