import React, { useContext } from 'react';

import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../../../context/AppProvider';

const Img = () => {
  const { topicTheme } = useContext(AppContext);

  return (
    <div className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
      <input type="file" accept="image/*" id="fileImg" className="hidden" />
      <label className="flex-center cursor-pointer" htmlFor="fileImg">
        <FontAwesomeIcon
          style={{ color: topicTheme }}
          className="text-xl"
          icon={faImage}
        />
      </label>
    </div>
  );
};

export default Img;
