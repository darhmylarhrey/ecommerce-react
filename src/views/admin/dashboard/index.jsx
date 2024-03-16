import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';

const Dashboard = () => {
  useDocumentTitle('Welcome | Admin Dashboard');
  useScrollTop();

  return (
    <div className="loader">
      <h2>Welcome to admin dashboard</h2>

      <p>Dashboard in progess ...</p>
    </div>
  );
};

export default Dashboard;
