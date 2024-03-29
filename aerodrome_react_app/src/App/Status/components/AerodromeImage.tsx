import React from 'react';
import aerodromeImage from '../../../assets/Aerodrome.png';
import './AerodromeImage.css';
import activeRunway from '../../../data/ActiveRunwayData.json';

const AerodromeImage: React.FC = () => {
    return (
      <div className="aerodrome-image-container">
        <div className='aerodrome-image-title'>Active Runway: {activeRunway.Runway}</div>
        <img src={aerodromeImage} alt="Aerodrome" className="aerodrome-image" />
      </div>
    );
  }

export default AerodromeImage;
