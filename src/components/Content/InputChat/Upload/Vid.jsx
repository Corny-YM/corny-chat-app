import React from 'react';

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Vid = () => {
  return (
    <div className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hover">
      <input type="file" accept="video/*" id="fileVid" className="hidden" />
      <label className="flex-center cursor-pointer" htmlFor="fileVid">
        <FontAwesomeIcon
          className="text-xl text-main-color"
          icon={faCirclePlay}
        />
      </label>
    </div>
  );
};

export default Vid;
