import React from 'react';
import aerodromeImage from '../../../assets/Aerodrome.png';
import './AerodromeImage.css';
import activeRunway from '../../../data/ActiveRunwayData.json';

const AerodromeImage: React.FC = () => {
    return (
      <div className="aerodrome-image-container">
        <div className='aerodrome-image-title'>
          <h2>Active Runway: {activeRunway.Runway}</h2>
        </div>
        <img src={aerodromeImage} alt="Aerodrome" className="aerodrome-image" />
      </div>
    );
  }

export default AerodromeImage;
