import React from 'react';
import { API } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.css';
import Aerodrome from './components/Aerodrome';
import UpdateForm from './components/UpdateForm';

// Warning! API Configuration needs to be hidden
const awsconfig = {
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://7ssnermwcvchbiu5yjf2e5x6ze.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-62ncw563ajbtbbnmcsyr4hickm"
};


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
