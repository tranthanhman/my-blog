import React from 'react';
import { Outlet } from 'react-router';
import SideBar from '~components/SideBar';

const MainLayout: React.FC = () => {
  return (
    <div className="sm:ml-64">
      <SideBar />
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
