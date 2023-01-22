import React, { useContext, useRef, useState } from 'react';

import Search from './Search';
import ChatList from './ChatList';
import SearchList from './SearchList';
import Nav from './Nav';
import AddGroup from './AddGroup';
import { AppContext } from '../../context/AppProvider';
import ChatSearch from './ChatSearch';

const Sidebar = () => {
  const { isSearching } = useContext(AppContext);
  const { showConversation } = useContext(AppContext);

  return (
    <div
      className={`relative md:max-w-[340px] flex sm:flex h-full flex-col flex-1 `}
    >
      {/* Header */}
      <Nav />

      {/* Search */}
      {/* Chat List */}
      <ChatSearch isSearching={isSearching} />

      {/* Add Group */}
      <AddGroup />
    </div>
  );
};

export default Sidebar;
