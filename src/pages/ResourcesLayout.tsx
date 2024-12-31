import React from 'react';
import { Outlet } from 'react-router-dom';

const ResourcesLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10 pointer-events-none" />
      <div className="relative">
        <Outlet />
      </div>
    </div>
  );
};

export default ResourcesLayout;