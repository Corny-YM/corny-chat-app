import React from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useListRoomsData from '../../hooks/useListRoomsData';

const ChatListItem = ({ roomId }) => {
  const { roomInfo } = useListRoomsData(roomId);

  return (
    <div className="flex-center justify-start relative pt-2 group">
      {/* GROUP */}
      <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hoverLightMode dark:hover:bg-hover">
        <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
          <img
            className="w-full h-full object-cover"
            src={roomInfo?.chatAvatar}
          />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <p className="sm:max-w-[200px] text-ellipsis font-bold capitalize md:text-[18px]">
            {roomInfo?.roomName}
          </p>
          <span className="sm:max-w-[200px] text-ellipsis text-[14px] opacity-70">
            {roomInfo?.lastMessage || 'Start chatting...'}
          </span>
        </div>
      </div>

      {/* MORE */}
      <div
        className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            dark:bg-messages group-hover:flex hover:bg-hoverLightMode dark:hover:bg-hover "
      >
        <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
      </div>
    </div>
  );
};

export default ChatListItem;
