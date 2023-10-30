import React from 'react';
import './StatusTable.css';
import StatusTableComponent, { StatusItem } from './StatusTableComponent'; // Import StatusItem here

interface StatusTableProps {
  data: { [key: string]: StatusItem };
}

const StatusTable: React.FC<StatusTableProps> = ({ data }) => {
  return (
    <StatusTableComponent data={data}>
      {(item) => item.Status}
    </StatusTableComponent>
  );
}

export default StatusTable;
