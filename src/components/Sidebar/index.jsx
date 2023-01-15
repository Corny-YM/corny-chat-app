import React, { useContext, useRef, useState } from 'react';

import Search from './Search';
import ChatList from './ChatList';
import SearchList from './SearchList';
import Nav from './Nav';
import AddGroup from './AddGroup';
import { AppContext } from '../../context/AppProvider';

const Sidebar = () => {
  const { isSearching } = useContext(AppContext);

  return (
    <div className={`relative md:max-w-[340px] flex h-full flex-col flex-1`}>
      {/* Header */}
      <Nav />

      {/* Search */}
      <Search />

      {/* Chat List */}
      {isSearching ? <SearchList /> : <ChatList />}

      {/* Add Group */}
      <AddGroup />
    </div>
  );
};

export default Sidebar;
