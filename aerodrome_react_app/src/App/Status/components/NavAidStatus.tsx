import React, { useState, useCallback, useContext } from 'react';
import './NavAidStatus.css';
import navaidStatusData from '../../../data/NavaidData.json';
import { LoginContext } from '../../LoginContext';

export interface NavAidItem {
  Name: string;
  Details: string;
  Return: string;
}

interface NavAidStatusTableComponentProps {
  data: { [key: string]: NavAidItem };
  children: (item: NavAidItem, key: string) => React.ReactNode;
}

const NavAidStatusTable: React.FC<NavAidStatusTableComponentProps> = ({ data, children }) => (
  <div>
    <h3>NavAid Status</h3>
    <table className="navaid-status-table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Return to Operations</th>
        </tr>
        </thead>
        <tbody>
        {Object.entries(data).map(([key, item]) => (
            <tr key={key}>
            <td>{item.Name}</td>
            <td>{item.Details}</td>
            <td>{children(item, key)}</td>
            </tr>
        ))}
        </tbody>
    </table>
  </div>
);

const ReturnSelector: React.FC<{ returnVal: string; onChange: (newReturn: string) => void }> = ({ returnVal, onChange }) => (
  <select value={returnVal} onChange={(e) => onChange(e.target.value)}>
    <option value="Good">Good</option>
    <option value="Bad">Bad</option>
  </select>
);

const NStatusForm: React.FC<{ data: { [key: string]: NavAidItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: NavAidItem }>(data);

  const handleReturnChange = useCallback((key: string, newReturn: string) => {
    setStatusData(prevData => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Return: newReturn,
      },
    }));
  }, []);

  return (
    <form>
        <NavAidStatusTable data={statusData}>
            {(item, key) => (
                <ReturnSelector
                returnVal={item.Return}
                onChange={(newReturn) => handleReturnChange(key, newReturn)}
                />
            )}
        </NavAidStatusTable>
    </form>
  );
};

const NStatusTable: React.FC<{ data: { [key: string]: NavAidItem } }> = ({ data }) => (
  <NavAidStatusTable data={data}>
    {(item) => item.Return}
  </NavAidStatusTable>
);

const NavAidStatus: React.FC = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? <NStatusForm data={navaidStatusData} /> : <NStatusTable data={navaidStatusData} />;
};

export default NavAidStatus;
