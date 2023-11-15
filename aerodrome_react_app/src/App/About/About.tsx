import React from 'react';
import './About.css';

// Importing the data from the JSON file
import aboutData from './aboutData.json';

// About Page
const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>About This App</h2>
      <table className="about-table">
        <tbody>
          <tr>
            <td className="about-label">Description:</td>
            <td>{aboutData.description}</td>
          </tr>
          <tr>
            <td className="about-label">Date:</td>
            <td>{aboutData.date}</td>
          </tr>
          <tr>
            <td className="about-label">Version:</td>
            <td>{aboutData.version}</td>
          </tr>
          <tr>
            <td className="about-label">Contact:</td>
            <td><a href={`mailto:${aboutData.contact}`}>{aboutData.contact}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
