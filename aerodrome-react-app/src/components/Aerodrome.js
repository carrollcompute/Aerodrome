import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';



const listAerodromeTables = /* GraphQL */ `
  query ListAerodromeTables {
    listAerodromeTables {
      items {
        id
        act_aviaire_locale
        act_aviaire_migratoire
        arff
        base_rescue
        champ_planeur
        champ_tir_9mm
        circuit
        grande_anse
        piste_active
        remarques
        sar_statut
        sar_statut_ytr
        sar_statut_yzx
      }
    }
  }
`;

function Aerodrome() {
    const [aerodromeTables, setAerodromeTables] = useState([]);
  
    useEffect(() => {
      const fetchAerodromeTables = async () => {
        try {
          const response = await API.graphql(graphqlOperation(listAerodromeTables));
          const aerodromeTables = response.data.listAerodromeTables.items;
          console.log(aerodromeTables);
          setAerodromeTables(aerodromeTables);
        } catch (error) {
          console.log('Error fetching aerodrome tables', error);
        }
      };
  
      fetchAerodromeTables();
    }, []);
  
    if (!aerodromeTables || aerodromeTables.length === 0) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1>Aerodrome Tables</h1>
        {aerodromeTables.map((table) => (
          <div key={table.id}>
            <h2>{table.base_rescue}</h2>
            <p>Act Aviaire Locale: {table.act_aviaire_locale}</p>
            <p>Act Aviaire Migratoire: {table.act_aviaire_migratoire}</p>
            <p>ARFF: {table.arff}</p>
            {/* Render other fields as needed */}
          </div>
        ))}
      </div>
      
    );
  }

export default Aerodrome;
