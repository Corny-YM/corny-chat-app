import React, { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MembersListItem from './MembersListItem';

const MembersList = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <ul className="mt-5 w-full flex flex-col gap-2 overflow-y-scroll h-[360px]">
      <MembersListItem onClick={handleClick} showOptions={showOptions} />
      <MembersListItem onClick={handleClick} showOptions={showOptions} />
      <MembersListItem onClick={handleClick} showOptions={showOptions} />
      <li className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=5"
          alt=""
          className="rounded-full aspect-square h-10"
        />
        <div className="flex flex-col justify-center flex-1">
          <p className="text-sm">CORNY</p>
          <span className="text-xs text-gray-400">Member</span>
        </div>
        <div className="flex-center rounded-full p-2 cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover">
          <FontAwesomeIcon className="text-xl" icon={faEllipsis} />
        </div>
      </li>
      <li className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/150?img=7"
          alt=""
          className="rounded-full aspect-square h-10"
        />
        <div className="flex flex-col justify-center flex-1">
          <p className="text-sm">Ryan</p>
          <span className="text-xs text-gray-400">Member</span>
        </div>
        <div className="flex-center rounded-full p-2 cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover">
          <FontAwesomeIcon className="text-xl" icon={faEllipsis} />
        </div>
      </li>
    </ul>
  );
};

export default MembersList;
