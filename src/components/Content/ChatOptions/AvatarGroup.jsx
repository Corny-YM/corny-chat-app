import React from 'react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AvatarGroup = () => {
  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <div className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
        <FontAwesomeIcon icon={faImage} />
      </div>
    </div>
  );
};

export default AvatarGroup;
