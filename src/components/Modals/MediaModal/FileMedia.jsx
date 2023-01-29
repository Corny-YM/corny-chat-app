import React from 'react';

import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FileMedia = ({ data }) => {
  return (
    <div className="w-full max-w-[280px] md:max-w-sm h-[320px] mt-4  overflow-auto">
      <div className="flex flex-wrap gap-1 items-center">
        {/* Item */}
        {data.map((value) => (
          <div key={value?.id} className="w-full flex-center">
            <a
              href={value?.chatContent}
              className="file-shared hover:bg-hoverLightMode dark:hover:bg-hover"
              download
              target="_blank"
            >
              <div className="flex-center mr-2">
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </div>
              <div className="w-full max-w-xs text-center truncate dark:text-white">
                {value?.fileName}
              </div>
              <div className="flex-center ml-2">
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileMedia;
