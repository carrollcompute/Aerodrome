import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import { listAerodromeTables, listCablesTables, listPisteConditionTables } from './graphql/queries';
import UpdateForm from './components/UpdateForm';
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
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <AerodromeTable aerodromeTable={aerodromeTable} />
                  <img src={aerodrome_img} alt="Nothing" className="aerodrome-img" />
                  <div className="side-tables">
                    <CablesTables cablesTables={cablesTables} />
                    <PisteConditionTables pisteConditionTables={pisteConditionTables} />
                  </div>
                  <UpdateButton />
                </>
              )
            }
          />
          <Route path="/update" element={isLoading ? <p>Loading...</p> : <UpdateForm aerodromeTable={aerodromeTable} />} />
        </Routes>
      </div>
    </Router>
  );
}

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
              <td className="field-data">{cablesTable.name}</td>
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


const AerodromeTable = ({ aerodromeTable }) => {
  if (aerodromeTable) {
    const aerodromeFields = [
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
      { label: 'Crée:', data: aerodromeTable.createdAt },
      { label: 'Updated:', data: aerodromeTable.updatedAt },
    ];

    return (
      <div>
        <div className="tables-wrapper">
          <h1>Aerodrome</h1>
          <table className="table-data">
            <tbody>
              {aerodromeFields.map((field, index) => (
                <tr key={index}>
                  <td className="field-label">{field.label}</td>
                  <td className="field-data">{field.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <p>No aerodrome table data available.</p>;
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
