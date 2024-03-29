import { FC } from 'react';
import styles from './styles.module.scss';
import { TableDataInterface } from '../../utils/interfaces';

interface TableProps {
  tableData: TableDataInterface;
}

export const Table: FC<TableProps> = ({ tableData }) => tableData && (
  <table className={styles.tableData}>
    <caption className={styles.tableData_caption}>User Data</caption>
    <thead className={styles.tableData_head}>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody className={styles.tableData_body}>
      {Object.keys(tableData).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{typeof tableData[key] === 'boolean' ? (tableData[key] ? 'true' : 'false') : tableData[key]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
