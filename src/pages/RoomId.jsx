import React from 'react';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const RoomId = () => {
  return (
    <div
      className="w-screen h-screen bg-lightMode dark:bg-darkMode dark:text-slate-100
      sm:flex-center p-4 gap-2 duration-200"
    >
      <Sidebar />
      <Content />
    </div>
  );
};

export default RoomId;
