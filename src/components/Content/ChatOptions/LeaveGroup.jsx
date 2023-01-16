import React from 'react';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const LeaveGroup = () => {
  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <div className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hover">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </div>
    </div>
  );
};

export default LeaveGroup;
