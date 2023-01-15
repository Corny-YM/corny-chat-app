import React, { useContext } from 'react';

import Actions from './Actions';
import Input from './Input';
import Emotion from './Sending/Emotion';
import SendMessage from './Sending/SendMessage';
import { InputChatContext } from '../../../context/InputChatProvider';

const InputChat = () => {
  const { isTexting } = useContext(InputChatContext);

  return (
    <div className="flex items-center pt-3 gap-1 h-14">
      {/* Actions */}
      {!isTexting && <Actions />}

      {/* Input */}
      <Input />

      {/* Emotion */}
      <div className="flex-center mr-1">
        {!isTexting ? <Emotion /> : <SendMessage />}
      </div>
    </div>
  );
};

export default InputChat;
