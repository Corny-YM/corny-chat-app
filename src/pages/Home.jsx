import React from 'react';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import SearchSideBarProvider from '../context/SearchSideBarProvider';

const Home = () => {
  // sidebar
  // content

  return (
    <div
      className="w-screen h-screen bg-dark text-slate-100
      md:flex-center p-4 gap-6 duration-200"
    >
      <SearchSideBarProvider>
        <Sidebar />
      </SearchSideBarProvider>
      <Content />
    </div>
  );
};

export default Home;
