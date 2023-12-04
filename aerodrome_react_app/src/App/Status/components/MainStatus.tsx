import React, { useState, useCallback, useContext, useEffect } from 'react';
import './MainStatus.css';
import mainStatusData from '../../../data/MainData.json';
import selectionOptions from '../../../data/Selection_options.json';
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
  <div>
    <h3 className='title'>Main Status</h3>
    <table className="main-status-table">
      <thead>
        <tr>
          <th className='first-col'></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, item]) => (
          <tr key={key}>
            <td className='first-col'>{item.Name}</td>
            <td className={`status-${item.Status.toLowerCase()}`}>
              {children(item, key)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StatusSelector: React.FC<{ status: string; options: string[]; onChange: (newStatus: string) => void }> = ({ status, options, onChange }) => (
  <select value={status} onChange={(e) => onChange(e.target.value)}>
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

const MStatusForm: React.FC<{ data: { [key: string]: StatusItem } }> = ({ data }) => {
  const [statusData, setStatusData] = useState<{ [key: string]: StatusItem }>(data);

  // Load status options from the JSON file
  const [statusOptions, setStatusOptions] = useState<{ [key: string]: string[] }>({});
  
  useEffect(() => {
    setStatusOptions(selectionOptions.Main_status);
  }, []);

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
        {(item, key) => (
          <StatusSelector
            key={key}
            status={item.Status}
            options={statusOptions[key] || []}
            onChange={(newStatus) => handleStatusChange(key, newStatus)}
          />
        )}
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
