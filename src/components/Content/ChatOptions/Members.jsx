import React from 'react';
import Tippy from '@tippyjs/react';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Members = () => {
  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <div className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hover">
        <FontAwesomeIcon icon={faUsers} />
      </div>
    </div>
  );
};

export default Members;
