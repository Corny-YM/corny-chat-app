import React from 'react';
import Tippy from '@tippyjs/react';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GroupName = () => {
  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <div className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
        <FontAwesomeIcon icon={faPenNib} />
      </div>
    </div>
  );
};

export default GroupName;
