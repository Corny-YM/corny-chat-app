import React, { useContext } from 'react';

import { Collapse } from 'react-collapse';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChatOptions from './ChatOptions';
import SharedPhotos from './SharedPhotos';
import SharedVideos from './SharedVideos';
import SharedFiles from './SharedFiles';
import { InfoChatContext } from '../../context/InfoChatProvider';

const InfoChat = () => {
  const { showChatDetails, setShowChatDetails } = useContext(InfoChatContext);

  const handleCloseInfoChat = () => {
    setShowChatDetails(false);
  };

  return (
    <div
      className={`${
        !showChatDetails && 'hidden'
      } flex-col fixed inset-0 md:absolute lg:relative lg:w-1/3 bg-dark p-2 overflow-overlay`}
    >
      {/* header */}
      <div className="flex justify-between">
        <div className="font-bold select-none sm:text-xl md:text-2xl">
          Chat Details
        </div>
        <div
          onClick={handleCloseInfoChat}
          className="flex-center w-6 h-6 rounded-full cursor-pointer hover:bg-hover"
        >
          <FontAwesomeIcon className="text-main-color" icon={faXmark} />
        </div>
      </div>

      {/* Chat Options */}
      <ChatOptions />

      {/* Shared Photos */}
      <SharedPhotos />

      {/* Shared Videos */}
      <SharedVideos />

      {/* Shared Files */}
      <SharedFiles />
    </div>
  );
};

export default InfoChat;
