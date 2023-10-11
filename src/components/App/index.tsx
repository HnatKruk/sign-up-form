import { FC, useState } from 'react';
import { Form, Table } from '..';
import styles from './styles.module.scss';

export const App: FC = () => {
  const [formData, setIsFormData] = useState(null);

  return (
    <div className={styles.app}>
      <h1 className={styles.app_header}>Sign Up</h1>
      <Form setIsFormData={setIsFormData}/>
      {formData?.rememberMe && <Table tableData={formData} />}
    </div>
  );
};
