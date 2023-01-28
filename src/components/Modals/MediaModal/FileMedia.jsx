import React from 'react';

import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FileMedia = () => {
  return (
    <div className="w-full max-w-[280px] md:max-w-sm h-[320px] mt-4  overflow-auto">
      <div className="flex flex-wrap gap-1 items-center">
        {/* Item */}
        <div className="w-full flex-center">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/corny-chat.appspot.com/o/files%2Fdocument.pdf?alt=media&token=2081e679-7970-4e37-8166-0261f416684e"
            className="file-shared"
            download
            target="_blank"
          >
            <div className="flex-center mr-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
            <div className="w-full max-w-xs text-center truncate text-white">
              Nguyen-The-Anh
            </div>
            <div className="flex-center ml-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
          </a>
        </div>
        <div className="w-full flex-center">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/corny-chat.appspot.com/o/files%2Fdocument.pdf?alt=media&token=2081e679-7970-4e37-8166-0261f416684e"
            className="file-shared"
            download
            target="_blank"
          >
            <div className="flex-center mr-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
            <div className="w-full max-w-xs text-center truncate text-white">
              Nguyen-The-Anh
            </div>
            <div className="flex-center ml-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
          </a>
        </div>
        <div className="w-full flex-center">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/corny-chat.appspot.com/o/files%2Fdocument.pdf?alt=media&token=2081e679-7970-4e37-8166-0261f416684e"
            className="file-shared"
            download
            target="_blank"
          >
            <div className="flex-center mr-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
            <div className="w-full max-w-xs text-center truncate text-white">
              Nguyen-The-Anh
            </div>
            <div className="flex-center ml-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
          </a>
        </div>
        <div className="w-full flex-center">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/corny-chat.appspot.com/o/files%2Fdocument.pdf?alt=media&token=2081e679-7970-4e37-8166-0261f416684e"
            className="file-shared"
            download
            target="_blank"
          >
            <div className="flex-center mr-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
            <div className="w-full max-w-xs text-center truncate text-white">
              Nguyen-The-Anh
            </div>
            <div className="flex-center ml-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
          </a>
        </div>
        <div className="w-full flex-center">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/corny-chat.appspot.com/o/files%2Fdocument.pdf?alt=media&token=2081e679-7970-4e37-8166-0261f416684e"
            className="file-shared"
            download
            target="_blank"
          >
            <div className="flex-center mr-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
            <div className="w-full max-w-xs text-center truncate text-white">
              Nguyen-The-Anh
            </div>
            <div className="flex-center ml-2">
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FileMedia;
