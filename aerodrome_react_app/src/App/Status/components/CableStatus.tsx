import React, { useState, useCallback, useContext, useEffect } from 'react';
import './CableStatus.css';
import cableStatusData from '../../../data/CableData.json';
import selectionOptions from '../../../data/Selection_options.json';
import { LoginContext } from '../../LoginContext';


export interface ConditionItem {
  Name: string;
  Condition: string;
}

interface CableStatusTableComponentProps {
  data: { [key: string]: ConditionItem };
  children: (item: ConditionItem, key: string) => React.ReactNode;
}

const CableStatusTable: React.FC<CableStatusTableComponentProps> = ({ data, children }) => (
  <div className="cable-status">
    <div className="cable-table-title">Cable Status</div>
    <table className="cable-status-table">
      <thead>
        <tr>
          <th>Cable</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, item]) => (
          <tr key={key}>
            <td>{item.Name}</td>
            <td className={`status-${item.Condition.toLowerCase()}`}>
              {children(item, key)}
            </td>
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

const CStatusForm: React.FC<{ data: { [key: string]: ConditionItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: ConditionItem }>(data);

  // Load condition options from the JSON file
  const [conditionOptions, setConditionOptions] = useState<string[]>([]);
  
  useEffect(() => {
    const options = selectionOptions.Cable_conditions ? Object.values(selectionOptions.Cable_conditions) : [];
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
      <CableStatusTable data={statusData}>
        {(item, key) => (
          <ConditionSelector
            condition={item.Condition}
            options={conditionOptions}
            onChange={(newCondition) => handleConditionChange(key, newCondition)}
          />
        )}
      </CableStatusTable>
    </form>
  );
};

const CStatusTable: React.FC<{ data: { [key: string]: ConditionItem } }> = ({ data }) => (
  <CableStatusTable data={data}>
    {(item) => item.Condition}
  </CableStatusTable>
);

const CableStatus: React.FC = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? <CStatusForm data={cableStatusData} /> : <CStatusTable data={cableStatusData} />;
};

export default CableStatus;