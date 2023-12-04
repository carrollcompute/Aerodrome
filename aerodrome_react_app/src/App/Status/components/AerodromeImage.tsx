import React, { useState, useContext, useEffect } from 'react';
import aerodromeImage from '../../../assets/Aerodrome.png';
import './AerodromeImage.css';
import activeRunwayData from '../../../data/ActiveRunwayData.json';
import runwayOptions from '../../../data/Selection_options.json'; 
import { LoginContext } from '../../LoginContext';

const AerodromeImage: React.FC = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const [activeRunway, setActiveRunway] = useState(activeRunwayData.Runway); 

  // Load runway options from the JSON file
  const [runwaySelection, setRunwaySelection] = useState<string[]>([]);

  useEffect(() => {
    setRunwaySelection(runwayOptions.Piste_active);
  }, []);

  const handleRunwayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveRunway(event.target.value);
  };

  return (
    <div className="aerodrome-image-container">
      <div className='aerodrome-image-title'>
        Active Runway:  
        {isLoggedIn ? (
          <select value={activeRunway} onChange={handleRunwayChange}>
            {runwaySelection.map((runway, index) => (
              <option key={index} value={runway}>{runway}</option>
            ))}
          </select>
        ) : (
          activeRunway
        )}
      </div>
      <img src={aerodromeImage} alt="Aerodrome" className="aerodrome-image" />
    </div>
  );
}

export default AerodromeImage;
