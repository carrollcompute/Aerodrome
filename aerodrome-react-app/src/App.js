import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { listAerodromeTables, listCablesTables, listPisteConditionTables } from './graphql/queries';
import UpdateForm from './components/UpdateForm';
import aerodrome_img from './aerodrome.png';
import { Helmet } from 'react-helmet';
import { DataProvider } from './DataContext';
import conditionalFormattingData from './conditional_formatting.json';



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
          <title>Aérodrome</title>
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
                    <div>
                      <h1>Aerodome</h1>
                      
                      <div className="center">
                        <AerodromeTable aerodromeTable={aerodromeTable} />
                        <img src={aerodrome_img} alt="Aerodrome Image" className="aerodrome-img" />
                        <div>
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

const keyLabels = {
  piste_active: 'Piste Active',
  act_aviaire_locale: 'Act Aviaire Locale',
  act_aviaire_migratoire: 'Act Aviaire Migratoire',
  arff: 'ARFF',
  sar_statut: 'SAR Statut',
  sar_statut_ytr: 'SAR Statut YTR',
  champ_tir_9mm: 'Champ Tir 9mm',
  champ_planeur: 'Champ Planeur',
  circuit: 'Circuit',
  base_rescue: 'Base Rescue',
  sar_statut_yzx: 'SAR Statut YZX',
  grande_anse: 'Grande Anse',
  remarques: 'Remarques',
  asr: 'ASR',
  ssr: 'SSR',
  par: 'PAR',
  ils: 'ILS',
  tacan: 'TACAN',
  ndb: 'NDB',
};

const AerodromeTable = ({ aerodromeTable }) => {
  if (aerodromeTable) {
    return (
      <div>
        <table className="table-data">
          <tbody>
            {Object.entries(aerodromeTable).map(([key, value]) => {
              if (
                key === 'id' ||
                key === 'CablesTables' ||
                key === 'PIREPSTables' ||
                key === 'PisteConditionTables' ||
                key === 'createdAt' ||
                key === 'updatedAt' ||
                key === '__typename' ||
                key === 'remarques'
              ) {
                return null; // Skip rendering for ignored fields
              }
              const label = keyLabels[key] || key; // Use the label from the lookup table, or the raw key if not found
              const formattingData = conditionalFormattingData[key];
              const className = formattingData && formattingData[value];
              return (
                <tr key={key}>
                  <td className="field-label">{label}</td>
                  <td className={`field-data ${className}`}>{value}</td>
                </tr>
              );
            })}
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
    return (
      <table className="table-data">
        <thead>
          <tr>
            <th className="field-label">Cable</th>
            <th className="field-label">Condition</th>
          </tr>
        </thead>
        <tbody>
          {cablesTables.map((cablesTable, index) => {
            const formattingData = conditionalFormattingData[cablesTable.name];
            const conditionClassName = formattingData && formattingData[cablesTable.Condition];
            
            return (
              <tr key={index}>
                <td className="field-data bold">{cablesTable.name}</td>
                <td className={`field-data ${conditionClassName}`}>{cablesTable.Condition}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <p>No cables tables data available.</p>;
  }
};



const PisteConditionTables = ({ pisteConditionTables }) => {
  if (pisteConditionTables.length > 0) {
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
          {pisteConditionTables.map((pisteConditionTable, index) => {
            const formattingData = conditionalFormattingData[pisteConditionTable.piste];
            const conditionClassName = formattingData && formattingData[pisteConditionTable.condition];
            
            return (
              <tr key={index}>
                <td className="field-data">{pisteConditionTable.piste}</td>
                <td className={`field-data ${conditionClassName}`}>{pisteConditionTable.condition}</td>
                <td className="field-data">{pisteConditionTable.crfi}</td>
                <td className="field-data">{pisteConditionTable.precision}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <p>No piste condition tables data available.</p>;
  }
};




export default App;
