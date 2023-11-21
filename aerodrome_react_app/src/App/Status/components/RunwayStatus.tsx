import React, { useState, useCallback, useContext } from 'react';
import './RunwayStatus.css';
import runwayStatusData from '../../../data/RunwayData.json';
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
  <div>
    <h3>Runway Status</h3>
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

const CONDITION_OPEN = "Open";
const CONDITION_CLOSED = "Closed";

const ConditionSelector: React.FC<{ condition: string; onChange: (newCondition: string) => void }> = ({ condition, onChange }) => (
  <select value={condition} onChange={(e) => onChange(e.target.value)}>
    <option value={CONDITION_OPEN}>{CONDITION_OPEN}</option>
    <option value={CONDITION_CLOSED}>{CONDITION_CLOSED}</option>
  </select>
);

const RStatusForm: React.FC<{ data: { [key: string]: RunwayItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: RunwayItem }>(data);

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