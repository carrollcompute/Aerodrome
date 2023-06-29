import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { listAerodromeTables, listCablesTables, listPisteConditionTables } from './graphql/queries';
import UpdateForm from './components/UpdateForm';
import aerodrome_img from './aerodrome.png';
import { Helmet } from 'react-helmet';
import { DataProvider } from './DataContext';


// Warning! API Configuration needs to be hidden
const awsconfig = {
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://7ssnermwcvchbiu5yjf2e5x6ze.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-62ncw563ajbtbbnmcsyr4hickm"
};

API.configure(awsconfig);

const UpdateButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/update');
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      Update
    </button>
  );
};

function App() {
  const [aerodromeTable, setAerodromeTable] = useState(null);
  const [cablesTables, setCablesTables] = useState([]);
  const [pisteConditionTables, setPisteConditionsTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const aerodromeresponse = await API.graphql(graphqlOperation(listAerodromeTables));
        const aerodromeTables = aerodromeresponse.data.listAerodromeTables.items;
        if (aerodromeTables.length > 0) {
          setAerodromeTable(aerodromeTables[0]);
        }

        const cablesTablesResponse = await API.graphql(graphqlOperation(listCablesTables));
        const cablesTablesData = cablesTablesResponse.data.listCablesTables.items;
        setCablesTables(cablesTablesData);

        const pisteConditionsTablesResponse = await API.graphql(graphqlOperation(listPisteConditionTables));
        console.log("Data:");
        console.log(pisteConditionsTablesResponse.data);
        const pisteConditionsTablesData = pisteConditionsTablesResponse.data.listPisteConditionTables.items;
        setPisteConditionsTable(pisteConditionsTablesData);

        console.log(pisteConditionsTablesData.length);

      } catch (error) {
        console.error('Error fetching Tables', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataProvider>
      <Router>
        <Helmet>
          <title>Aerodrome</title>
          <link rel="icon" type="image/png" href="path/to/your/icon.png" />
        </Helmet>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <div className="vertical-group">
                      <h1>Aerodome</h1>
                      
                      <div className="center">
                        <AerodromeTable aerodromeTable={aerodromeTable} />
                        <img src={aerodrome_img} alt="Aerodrome Image" className="aerodrome-img" />
                        <div className="small-group">
                          <CablesTables cablesTables={cablesTables} />
                          <PisteConditionTables pisteConditionTables={pisteConditionTables} />
                        </div>
                      </div>

                      <UpdateButton />
                    </div>
                  </>
                )
              }
            />
            <Route path="/update" element={isLoading ? <p>Loading...</p> : <UpdateForm aerodromeTable={aerodromeTable} />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

const AerodromeTable = ({ aerodromeTable }) => {
  if (aerodromeTable) {
    const aerodromeFields = [
      { label: 'Piste Active:', key: 'piste_active', className: '' },
      { label: 'Act Aviaire Locale:', key: 'act_aviaire_locale', className: 'green', condition: 'Faible' },
      { label: 'Act Aviaire Migratoire:', key: 'act_aviaire_migratoire', className: 'green', condition: 'Faible' },
      { label: 'ARFF:', key: 'arff', className: 'green', condition: 'Cat-5' },
      { label: 'SAR Statut:', key: 'sar_statut', className: 'green', condition: 'Vert' },
      { label: 'SAR Statut YTR:', key: 'sar_statut_ytr', className: 'green', condition: 'Vert' },
      { label: 'Champ Tir 9mm:', key: 'champ_tir_9mm', className: 'green', condition: 'Inactif' },
      { label: 'Champ Planeur:', key: 'champ_planeur', className: 'green', condition: 'Inactif' },
      { label: 'Circuit:', key: 'circuit', className: 'green', condition: 'Ouvert' },
      { label: 'Base Rescue:', key: 'base_rescue', className: 'green', condition: 'Vert' },
      { label: 'SAR Statut YZX:', key: 'sar_statut_yzx', className: 'green', condition: 'Vert' },
      { label: 'Grande Anse:', key: 'grande_anse', className: 'green', condition: 'Inactif' },
      { label: 'Remarques:', key: 'remarques', className: '' },
      { label: 'Crée:', key: 'createdAt', className: '' },
      { label: 'Updated:', key: 'updatedAt', className: '' },
    ];

    return (
      <div>
        <table className="table-data">
          <tbody>
            {aerodromeFields.map((field, index) => (
              <tr key={index}>
                <td className="field-label">{field.label}</td>
                <td className={`field-data ${field.className}`}>
                  {field.condition && aerodromeTable[field.key] === field.condition ? (
                    <span className="green">{aerodromeTable[field.key]}</span>
                  ) : (
                    <span className="red">{aerodromeTable[field.key]}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>No aerodrome table data available.</p>;
  }
};


const CablesTables = ({ cablesTables }) => {
  if (cablesTables.length > 0) {
    console.log(cablesTables);
    return (
      <table className="table-data">
        <thead>
          <tr>
            <th className="field-label">Cable</th>
            <th className="field-label">Condition</th>
          </tr>
        </thead>
        <tbody>
          {cablesTables.map((cablesTable, index) => (
            <tr key={index}>
              <td className="field-data bold">{cablesTable.name}</td>
              <td className="field-data">{cablesTable.Condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p>No cables tables data available.</p>;
  }
};



const PisteConditionTables = ({ pisteConditionTables }) => {
  if (pisteConditionTables.length > 0) {
    console.log(pisteConditionTables);
    return (
      <table className="table-data">
        <thead>
          <tr>
            <th className="field-label">Piste</th>
            <th className="field-label">Condition</th>
            <th className="field-label">CRFI</th>
            <th className="field-label">Precision</th>
          </tr>
        </thead>
        <tbody>
          {pisteConditionTables.map((pisteConditionTable, index) => (
            <tr key={index}>
              <td className="field-data">{pisteConditionTable.piste}</td>
              <td className="field-data">{pisteConditionTable.condition}</td>
              <td className="field-data">{pisteConditionTable.crfi}</td>
              <td className="field-data">{pisteConditionTable.precision}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p>No piste condition tables data available.</p>;
  }
};




export default App;
