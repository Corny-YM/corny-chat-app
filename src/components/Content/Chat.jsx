import React from 'react';

import { useLocation } from 'react-router-dom';

import Messages from './Messages';
import InputChat from './InputChat';
import UserInfoChat from './UserInfoChat';
import InputChatProvider from '../../context/InputChatProvider';
import useListRoomsData from '../../hooks/useListRoomsData';

const Chat = () => {
  // =================Collection: Rooms=================
  // location.pathname = /example12345
  const location = useLocation();
  const roomId = location.pathname.slice(1);
  const { roomInfo } = useListRoomsData(roomId);

  return (
    <div className="h-full flex flex-col flex-1">
      {/* Chat User Info: Collection Rooms */}
      <UserInfoChat roomInfo={roomInfo} />

      {/* Messages: Collection Message, Rooms */}
      <Messages roomId={roomId} members={roomInfo.members} />

      {/* Input: Collection Rooms  */}
      <InputChatProvider>
        <InputChat roomId={roomId} roomInfo={roomInfo} />
      </InputChatProvider>
    </div>
  );
};

export default Chat;
