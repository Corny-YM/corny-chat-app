import React from 'react';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const Home = () => {
  return (
    <div
      className="w-screen h-screen bg-dark text-slate-100
      sm:flex-center p-4 gap-2 duration-200"
    >
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
