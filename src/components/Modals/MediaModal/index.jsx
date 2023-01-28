import React, { useState } from 'react';

import ModalsTemplate from '../ModalsTemplate';
import FileMedia from './FileMedia';
import ImgMedia from './ImgMedia';
import VidMedia from './VidMedia';

const MediaModal = () => {
  const [content, setContent] = useState('img');

  return (
    <ModalsTemplate>
      <div className="flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="w-full flex-center justify-around border-b border-gray-500 mb-3">
          <div
            onClick={() => setContent('img')}
            className={`select-none min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer ${
              content == 'img' && 'bg-inputLightMode dark:bg-hover'
            }`}
          >
            Images
          </div>
          <div
            onClick={() => setContent('vid')}
            className={`select-none min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer ${
              content == 'vid' && 'bg-inputLightMode dark:bg-hover'
            }`}
          >
            Videos
          </div>
          <div
            onClick={() => setContent('file')}
            className={`select-none min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer ${
              content == 'file' && 'bg-inputLightMode dark:bg-hover'
            }`}
          >
            Files
          </div>
        </div>

        {/* Type Media */}
        {content == 'img' && <ImgMedia />}
        {content == 'vid' && <VidMedia />}
        {content == 'file' && <FileMedia />}
      </div>
    </ModalsTemplate>
  );
};

export default MediaModal;
