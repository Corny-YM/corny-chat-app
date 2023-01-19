import React, { useContext } from 'react';

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../../../context/AppProvider';

const Vid = () => {
  const { topicTheme } = useContext(AppContext);

  return (
    <div className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hover">
      <input type="file" accept="video/*" id="fileVid" className="hidden" />
      <label className="flex-center cursor-pointer" htmlFor="fileVid">
        <FontAwesomeIcon
          style={{ color: topicTheme }}
          className="text-xl "
          icon={faCirclePlay}
        />
      </label>
    </div>
  );
};

export default Vid;
