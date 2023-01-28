import React, { useContext } from 'react';

import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../../../context/AppProvider';

const Img = ({ handleUpload }) => {
  const { topicTheme } = useContext(AppContext);

  return (
    <label
      className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hoverLightMode dark:hover:bg-hover cursor-pointer"
      htmlFor="fileImg"
    >
      {/* file, pathFolder, type, content */}
      <input
        onChange={(e) =>
          handleUpload(e.target.files[0], 'imgs', 'image', 'Sent a image')
        }
        type="file"
        accept="image/*"
        id="fileImg"
        className="hidden"
      />
      <div className="flex-center">
        <FontAwesomeIcon
          style={{ color: topicTheme }}
          className="text-xl"
          icon={faImage}
        />
      </div>
    </label>
  );
};

export default Img;
