import React, { useState } from 'react';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faMoon,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const renderControlAccount = (attrs) => {
  return (
    attrs && (
      <div
        className="p-2 w-48 flex flex-col gap-1 border-[2px] rounded-md rounded-b border-gray-600 text-white bg-dark"
        tabIndex="10"
      >
        <div className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hover">
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faUser}
          />
          <span>My Information</span>
        </div>
        <div className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hover">
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faMoon}
          />
          <span>Dark Mode</span>
        </div>
        <div className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hover">
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faArrowRightFromBracket}
          />
          <span>Log out</span>
        </div>
      </div>
    )
  );
};

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="flex-center justify-between my-2">
      <span className="font-rubikWet font-bold text-xl sm:text-2xl md:text-3xl text-main-color select-none">
        CornyChat
      </span>
      <Tippy
        interactive
        visible={visible}
        placement="bottom-end"
        onClickOutside={() => setVisible(false)}
        render={() => renderControlAccount(visible)}
      >
        <div
          onClick={() => setVisible(!visible)}
          className="w-9 h-9 rounded-[50%] overflow-hidden 
            border-2 cursor-pointer "
        >
          <img className="object-cover" src="https://i.pravatar.cc/150?img=3" />
        </div>
      </Tippy>
    </header>
  );
};

export default Nav;
