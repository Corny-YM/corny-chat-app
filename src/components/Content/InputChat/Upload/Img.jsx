import React from 'react';

import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Img = () => {
  return (
    <div className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hover">
      <input type="file" accept="image/*" id="fileImg" className="hidden" />
      <label className="flex-center cursor-pointer" htmlFor="fileImg">
        <FontAwesomeIcon className="text-xl text-main-color" icon={faImage} />
      </label>
    </div>
  );
};

export default Img;
