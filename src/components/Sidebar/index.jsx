import React, { useContext, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import {
  faArrowRightFromBracket,
  faMoon,
  faUser,
  faUsersRectangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from './Search';
import ChatList from './ChatList';
import { SearchSideBarContext } from '../../context/SearchSideBarProvider';
import SearchList from './SearchList';

const renderControlAccount = (attrs) => (
  <div
    className="p-2 w-48 flex flex-col gap-1 
    border-[2px] rounded-md rounded-b
    border-gray-600 text-white bg-dark"
    tabIndex="10"
    {...attrs}
  >
    <div
      className="hover-smooth p-2 flex items-center rounded-md 
      gap-2 cursor-pointer hover:bg-hover"
    >
      <FontAwesomeIcon
        className="flex-center w-5 h-5 text-[20px]"
        icon={faUser}
      />
      <span>My Information</span>
    </div>
    <div
      className="hover-smooth p-2 flex items-center rounded-md 
      gap-2 cursor-pointer hover:bg-hover"
    >
      <FontAwesomeIcon
        className="flex-center w-5 h-5 text-[20px]"
        icon={faMoon}
      />
      <span>Dark Mode</span>
    </div>
    <div
      className="hover-smooth p-2 flex items-center rounded-md 
      gap-2 cursor-pointer hover:bg-hover"
    >
      <FontAwesomeIcon
        className="flex-center w-5 h-5 text-[20px]"
        icon={faArrowRightFromBracket}
      />
      <span>Log out</span>
    </div>
  </div>
);

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const { isSearching } = useContext(SearchSideBarContext);

  return (
    <div className={`relative md:max-w-[340px] flex h-full flex-col flex-1`}>
      {/* Header */}
      <header className="flex-center justify-between my-2">
        <span className="font-bold text-2xl">CornyChat</span>
        <Tippy
          interactive
          visible={visible}
          placement="bottom-end"
          onClickOutside={() => setVisible(false)}
          render={renderControlAccount}
        >
          <div
            onClick={() => setVisible(!visible)}
            className="w-9 h-9 rounded-[50%] overflow-hidden 
            border-2 cursor-pointer "
          >
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
        </Tippy>
      </header>

      {/* Search */}
      <Search />

      {/* Chat List */}
      {isSearching ? <SearchList /> : <ChatList />}

      {/* Add Group */}
      <div className="w-full h-14 flex-center absolute bottom-0 bg-dark">
        <div className="flex-center p-2 rounded-xl cursor-pointer hover:bg-hover">
          <FontAwesomeIcon icon={faUsersRectangle} />
          <span className="px-2 font-bold">Add a new group conversation</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
