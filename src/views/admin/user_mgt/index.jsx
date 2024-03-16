import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';

const UserMgt = () => {
  useDocumentTitle('User Management | ShopEasy Admin');
  useScrollTop();

  return (
    <div className="loader">
      <h2>Welcome to admin user mangement list</h2>

      <p>User Management in progess ...</p>
    </div>
  );
};

export default UserMgt;
