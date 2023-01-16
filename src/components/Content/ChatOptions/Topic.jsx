import React from 'react';
import Tippy from '@tippyjs/react';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Topic = () => {
  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <div className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full bg-main-color hover:opacity-80">
        <FontAwesomeIcon icon={faPalette} />
      </div>
    </div>
  );
};

export default Topic;
