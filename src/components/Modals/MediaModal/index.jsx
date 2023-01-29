import React, { useState } from 'react';
import useSharedData from '../../../hooks/useSharedData';

import ModalsTemplate from '../ModalsTemplate';
import FileMedia from './FileMedia';
import ImgMedia from './ImgMedia';
import VidMedia from './VidMedia';

const MediaModal = ({ roomId }) => {
  const [content, setContent] = useState('img');

  const sharedPhoto = useSharedData(roomId, 'image', 30);
  const sharedVid = useSharedData(roomId, 'video', 30);
  const sharedFile = useSharedData(roomId, 'file', 30);

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
        {content == 'img' && <ImgMedia data={sharedPhoto} />}
        {content == 'vid' && <VidMedia data={sharedVid} />}
        {content == 'file' && <FileMedia data={sharedFile} />}
      </div>
    </ModalsTemplate>
  );
};

export default MediaModal;
