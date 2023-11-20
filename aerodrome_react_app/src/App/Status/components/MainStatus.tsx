import React, { useState, useCallback, useContext } from 'react';
import './MainStatus.css';
import mainStatusData from '../../../data/MainData.json';
import { LoginContext } from '../../LoginContext';


export interface StatusItem {
  Name: string;
  Status: string;
}

interface MainStatusTableComponentProps {
  data: { [key: string]: StatusItem };
  children: (item: StatusItem, key: string) => React.ReactNode;
}

const MainStatusTable: React.FC<MainStatusTableComponentProps> = ({ data, children }) => (
  <table className="main-status-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(data).map(([key, item]) => (
        <tr key={key}>
          <td>{item.Name}</td>
          <td className={`status-${item.Status.toLowerCase()}`}>
            {children(item, key)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const STATUS_ACTIVE = 'Active';
const STATUS_INACTIVE = 'Inactive';

const StatusSelector: React.FC<{ status: string; onChange: (newStatus: string) => void }> = ({ status, onChange }) => (
  <select value={status} onChange={(e) => onChange(e.target.value)}>
    <option value={STATUS_ACTIVE}>{STATUS_ACTIVE}</option>
    <option value={STATUS_INACTIVE}>{STATUS_INACTIVE}</option>
  </select>
);

const MStatusForm: React.FC<{ data: { [key: string]: StatusItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: StatusItem }>(data);

  const handleStatusChange = useCallback((key: string, newStatus: string) => {
    setStatusData(prevData => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Status: newStatus,
      },
    }));
  }, []);

  return (
    <form>
      <MainStatusTable data={statusData}>
        {(item, key) => <StatusSelector key={key} status={item.Status} onChange={(newStatus) => handleStatusChange(key, newStatus)} />}
      </MainStatusTable>
    </form>
  );
};



const MStatusTable: React.FC<{ data: { [key: string]: StatusItem } }> = ({ data }) => (
  <MainStatusTable data={data}>
    {(item) => item.Status}
  </MainStatusTable>
);

const Status: React.FC = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? <MStatusForm data={mainStatusData} /> : <MStatusTable data={mainStatusData} />;
}

export default Status;
