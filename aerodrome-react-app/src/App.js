import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { listAerodromeTables } from './graphql/queries';
import UpdateForm from './components/UpdateForm';
import { useNavigate } from 'react-router-dom';
import aerodrome_img from './aerodrome.png';


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
  const [aerodromeTable, setAerodromeTable] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAerodromeTable = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listAerodromeTables));
        const aerodromeTables = response.data.listAerodromeTables.items;
        if (aerodromeTables.length > 0) {
          setAerodromeTable(aerodromeTables[0]);
        }
      } catch (error) {
        console.error('Error fetching aerodromeTable', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAerodromeTable();
  }, []);

  

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={isLoading ? <p>Loading...</p> : <AerodromeTable aerodromeTable={aerodromeTable} />} />
          <Route path="/update" element={isLoading ? <p>Loading...</p> : <UpdateForm aerodromeTable={aerodromeTable} />} />
        </Routes>
      </div>
    </Router>
  );
}

const AerodromeTable = ({ aerodromeTable }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {navigate('/update');};
  
  if (aerodromeTable) {
    const tableFields = [
      { label: 'Piste Active:', data: aerodromeTable.piste_active },
      { label: 'Act Aviaire Locale:', data: aerodromeTable.act_aviaire_locale },
      { label: 'Act Aviaire Migratoire:', data: aerodromeTable.act_aviaire_migratoire },
      { label: 'ARFF:', data: aerodromeTable.arff },
      { label: 'SAR Statut:', data: aerodromeTable.sar_statut },
      { label: 'SAR Statut YTR:', data: aerodromeTable.sar_statut_ytr },
      { label: 'Champ Tir 9mm:', data: aerodromeTable.champ_tir_9mm },
      { label: 'Champ Planeur:', data: aerodromeTable.champ_planeur },
      { label: 'Circuit:', data: aerodromeTable.circuit },
      { label: 'Base Rescue:', data: aerodromeTable.base_rescue },
      { label: 'SAR Statut YZX:', data: aerodromeTable.sar_statut_yzx },
      { label: 'Grande Anse:', data: aerodromeTable.grande_anse },
      { label: 'Remarques:', data: aerodromeTable.remarques },
      { label: 'Created At:', data: aerodromeTable.createdAt },
      { label: 'Updated At:', data: aerodromeTable.updatedAt },
    ];
    

    return (
      <div>
        <div className="tables-wrapper">
          <h1>Aerodrome Table</h1>

          <div className="table-container">
            <table className="table-data">
              <tbody>
                {tableFields.map((field, index) => (
                  <tr key={index}>
                    <td className="field-label">{field.label}</td>
                    <td className="field-data">{field.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <img src={aerodrome_img} alt="Nothing" className="aerodrome-img" />
          </div>         
          <button type="submit" onClick={handleButtonClick}>Update</button>
        </div>
      </div>
    );
  } else {
    return <p>No aerodrome table data available.</p>;
  }
};


export default App;