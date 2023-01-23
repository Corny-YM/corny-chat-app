import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../context/AppProvider';
import { AuthContext } from '../../context/AuthContext';
import useListRoomsId from '../../hooks/useListRoomsId';
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const { setShowConversation } = useContext(AppContext);
  const { currentUser } = useContext(AuthContext);
  const { listRoomsId, userDocId } = useListRoomsId(currentUser?.uid ?? '');

  return (
    <div className="flex flex-col flex-1 mt-3 overflow-y-scroll">
      {/* item */}
      {listRoomsId.map((roomId) => (
        <ChatListItem key={roomId} roomId={roomId} />
      ))}
    </div>
  );
};

export default ChatList;
