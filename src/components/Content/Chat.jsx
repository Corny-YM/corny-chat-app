import React from 'react';

import Messages from './Messages';
import InputChat from './InputChat';
import UserInfoChat from './UserInfoChat';
import InputChatProvider from '../../context/InputChatProvider';

const Chat = () => {
  console.log('re-render');

  return (
    <div className="flex flex-col flex-1">
      {/* Chat User Info */}
      <UserInfoChat />

      {/* Messages */}
      <Messages />

      {/* Input */}
      <InputChatProvider>
        <InputChat />
      </InputChatProvider>
    </div>
  );
};

export default Chat;
