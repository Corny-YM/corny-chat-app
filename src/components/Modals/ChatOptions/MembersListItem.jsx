import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const MembersListItem = ({ memberInfo, memberSelected, setMemberSelected }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    if (memberSelected == memberInfo?.uid) {
      setMemberSelected('');
      setShowOptions(false);
      return;
    }
    setMemberSelected(memberInfo?.uid);
    setShowOptions(true);
  };

  return (
    <li className="flex items-center gap-3">
      <img
        src={memberInfo?.photoURL}
        alt={memberInfo?.displayName}
        className="rounded-full aspect-square object-cover h-10"
      />
      <div className="flex flex-col justify-center flex-1">
        <p className="text-sm capitalize">{memberInfo?.displayName}</p>
        <span className="text-xs text-gray-400">
          {memberInfo?.isAdmin ? 'Admin' : 'Member'}
        </span>
      </div>
      {!memberInfo?.isAdmin && (
        <div
          onClick={handleClick}
          className="relative flex-center rounded-full p-2 select-none cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <FontAwesomeIcon className="text-xl" icon={faEllipsis} />
          {showOptions && memberSelected == memberInfo?.uid && (
            <ul
              onClick={(e) => e.stopPropagation()}
              className="z-10 absolute w-max rounded-md dark:bg-lightDarkMode bg-inputLightMode top-0 right-0 translate-y-[60%] py-1 px-2 select-none"
            >
              <li className="duration-150 rounded p-1 px-2 dark:hover:bg-gray-600 hover:bg-slate-400">
                Add as Admin
              </li>
              <li className="duration-150 rounded p-1 px-2 dark:hover:bg-gray-600 hover:bg-slate-400">
                Remove
              </li>
            </ul>
          )}
        </div>
      )}
    </li>
  );
};

export default MembersListItem;
