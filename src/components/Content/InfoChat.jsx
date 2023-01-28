import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChatOptions from './ChatOptions';
import SharedPhotos from './SharedPhotos';
import SharedVideos from './SharedVideos';
import SharedFiles from './SharedFiles';

import { InfoChatContext } from '../../context/InfoChatProvider';
import { AppContext } from '../../context/AppProvider';

import useListRoomsData from '../../hooks/useListRoomsData';
import useSharedData from '../../hooks/useSharedData';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../reducers/actions';
import MediaModal from '../Modals/MediaModal';

const InfoChat = () => {
  const { topicTheme } = useContext(AppContext);
  const { showChatDetails, setShowChatDetails } = useContext(InfoChatContext);

  const { modalName } = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();
  const roomId = location.pathname.slice(1);
  const { roomInfo } = useListRoomsData(roomId);

  // roomId, type, amount
  const sharedPhoto = useSharedData(roomId, 'image', 6);
  const sharedVid = useSharedData(roomId, 'video', 6);
  const sharedFile = useSharedData(roomId, 'file', 6);

  const handleCloseInfoChat = () => {
    setShowChatDetails(false);
  };

  const handleShowMediaModal = () => {
    dispatch(showModal('all-media'));
    console.log(modalName);
  };

  return (
    <div
      className={`${
        !showChatDetails && 'hidden'
      } flex-col fixed inset-0 md:absolute lg:relative lg:w-1/3 bg-lightMode dark:bg-darkMode p-2 flex`}
    >
      {/* header */}
      <div className="flex justify-between">
        <div className="font-bold select-none sm:text-xl md:text-2xl">
          Chat Details
        </div>
        <div
          onClick={handleCloseInfoChat}
          className="flex-center w-6 h-6 rounded-full cursor-pointer dark:hover:bg-hover"
        >
          <FontAwesomeIcon style={{ color: topicTheme }} icon={faXmark} />
        </div>
      </div>

      <div className="flex-1 overflow-overlay">
        {/* Chat Options */}
        <ChatOptions roomId={roomId} roomInfo={roomInfo} />

        {/* Shared Photos */}
        <SharedPhotos
          onShowMediaModal={handleShowMediaModal}
          sharedPhotoData={sharedPhoto}
        />

        {/* Shared Videos */}
        <SharedVideos
          onShowMediaModal={handleShowMediaModal}
          sharedVidData={sharedVid}
        />

        {/* Shared Files */}
        <SharedFiles
          onShowMediaModal={handleShowMediaModal}
          sharedFileData={sharedFile}
        />
      </div>

      {modalName == 'all-media' && <MediaModal />}
    </div>
  );
};

export default InfoChat;
