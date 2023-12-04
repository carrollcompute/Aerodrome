import React, { useState, useCallback, useContext, useEffect } from 'react';
import './RunwayStatus.css';
import runwayStatusData from '../../../data/RunwayData.json';
import selectionOptions from '../../../data/Selection_options.json';
import { LoginContext } from '../../LoginContext';


export interface RunwayItem {
  Name: string;
  Condition: string;
  CRFI: string;
  Precision: string;
}

interface RunwayStatusTableComponentProps {
  data: { [key: string]: RunwayItem };
  children: (item: RunwayItem, key: string) => React.ReactNode;
}

const RunwayStatusTable: React.FC<RunwayStatusTableComponentProps> = ({ data, children }) => (
  <div className="runway-status">
    <div className="runway-title">Runway Status</div>
    <table className="runway-status-table">
        <thead>
        <tr>
            <th>Runway</th>
            <th>Condition</th>
            <th className="cfri-column">CRFI</th>
            <th>Precision</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(data).map(([key, item]) => (
            <tr key={key}>
            <td>{item.Name}</td>
            <td className={`status-${item.Condition.toLowerCase()}`}>
                {children(item, key)}
            </td>
            <td className="cfri-column">{item.CRFI}</td>
            <td>{item.Precision}</td>
            </tr>
        ))}
        </tbody>
    </table>
  </div>
);

const ConditionSelector: React.FC<{ condition: string; options: string[]; onChange: (newCondition: string) => void }> = ({ condition, options, onChange }) => (
  <select value={condition} onChange={(e) => onChange(e.target.value)}>
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

const RStatusForm: React.FC<{ data: { [key: string]: RunwayItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: RunwayItem }>(data);

  // Load condition options from the JSON file
  const [conditionOptions, setConditionOptions] = useState<string[]>([]);
  
  useEffect(() => {
    // Load condition options for runway_conditions
    const options = selectionOptions.runway_conditions ? selectionOptions.runway_conditions.Condition : [];
    setConditionOptions(options);
  }, []);

  const handleConditionChange = useCallback((key: string, newCondition: string) => {
    setStatusData(prevData => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Condition: newCondition,
      },
    }));
  }, []);

  return (
    <form>
      <RunwayStatusTable data={statusData}>
        {(item, key) => (
          <ConditionSelector
            condition={item.Condition}
            options={conditionOptions}
            onChange={(newCondition) => handleConditionChange(key, newCondition)}
          />
        )}
      </RunwayStatusTable>
    </form>
  );
};

const RStatusTable: React.FC<{ data: { [key: string]: RunwayItem } }> = ({ data }) => (
  <RunwayStatusTable data={data}>
    {(item) => item.Condition}
  </RunwayStatusTable>
);

const RunwayStatus: React.FC = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? <RStatusForm data={runwayStatusData} /> : <RStatusTable data={runwayStatusData} />;
};

export default RunwayStatus;