import React from 'react';

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VidMedia = ({ data }) => {
  return (
    <div className="w-full max-w-[280px] md:max-w-sm mt-4 h-[320px] overflow-auto">
      <div className="flex flex-wrap gap-5 items-center">
        {/* Item */}
        {data.map((value) => (
          <div
            key={value?.id}
            className="relative flex-center w-20 h-20 rounded-xl overflow-hidden"
          >
            <video
              className="video-shared object-cover w-full h-full"
              src={value?.chatContent}
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer">
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VidMedia;
