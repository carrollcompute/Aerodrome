import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AerodromeStatus.css';
import aerodromeImage from './assets/aerodrome.png';
import { Link } from 'react-router-dom';

const AerodromeStatus  = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://qmv9g6ixta.execute-api.us-east-2.amazonaws.com/dev/');
        console.log(response.data);
        setData(JSON.parse(response.data.body));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
        <div className="data-fetcher">
          {data && (
            <div className="tables-container">

              <div className="table">
                <h3>Statut de l'Aérodrome</h3>
                <table>
                  <tbody>
                    {Object.entries(data).map(([key, value]) => {
                      if (key !== "Remarques" && typeof value !== "object") {
                        return (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                          </tr>
                        );
                      }
                      return null; // Exclude "Remarques" and nested objects from the table
                    })}
                  </tbody>
                </table>
              </div>

              <div className="image-container">
                  <img src={aerodromeImage} alt="Aerodrome" className="aerodrome-image" />
              </div>

              <div className="table">
                  <h3>Condition de piste</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Condition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(data['Condition de piste']).map(([key, value]) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{value.Condition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h3>État des cables</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Câble</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(data['État des cables'].Cables).map(([cable, statut]) => (
                        <tr key={cable}>
                          <td>{cable}</td>
                          <td>{statut}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h3>Action de Freinage</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Piste</th>
                        <th>Heure</th>
                        <th>Détails</th>
                        <th>Type d'avion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(data['Action de Freinage'].Piste).map(([piste, item]) => (
                        <tr key={piste}>
                          <td>{piste}</td>
                          <td>{item.Heure}</td>
                          <td>{item['Détails']}</td>
                          <td>{item['Type d\'avion']}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>

              <div className="table">
                <h3>NAVAIDS</h3>
                <table>
                  <thead>
                    <tr>
                      <th>ASR</th>
                      <th>SSR</th>
                      <th>PAR</th>
                      <th>ILS</th>
                      <th>TACAN</th>
                      <th>NDB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.NAVAIDS.ASR}</td>
                      <td>{data.NAVAIDS.SSR}</td>
                      <td>{data.NAVAIDS.PAR}</td>
                      <td>{data.NAVAIDS.ILS}</td>
                      <td>{data.NAVAIDS.TACAN}</td>
                      <td>{data.NAVAIDS.NDB}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='table'>
                <h3>Remarques</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{data.Remarques}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='form-button'>
                <Link to="/form">
                <button>Input Form</button>
                </Link>
              </div>

            </div>
          )}
        </div>
        
  );
};

export default AerodromeStatus ;
