import React, { useContext, useState } from 'react';

import Actions from './Actions';
import Input from './Input';
import Emotion from './Sending/Emotion';
import SendMessage from './Sending/SendMessage';

import { InputChatContext } from '../../../context/InputChatProvider';
import { AuthContext } from '../../../context/AuthContext';
import { addNewMessage } from '../../../firebase/services';

const InputChat = ({ roomId, roomInfo }) => {
  const [valueInput, setValueInput] = useState('');
  const { currentUser } = useContext(AuthContext);
  const { isTexting } = useContext(InputChatContext);

  const handleSendMessage = async (e) => {
    const trimValInput = valueInput.trim();
    if (trimValInput == '') {
      setValueInput('');
      return;
    }

    // roomId, currentUserUID, message
    await addNewMessage(roomId, currentUser.uid, trimValInput);
    setValueInput('');
  };

  return (
    <div className="flex items-center pt-3 gap-1 h-14">
      {/* Actions */}
      {!isTexting && <Actions />}

      {/* Input */}
      <Input
        stateInput={{ valueInput, setValueInput }}
        onSendMessage={handleSendMessage}
      />

      {/* Emotion */}
      <div className="flex-center mr-1">
        {!isTexting ? (
          <Emotion emoji={roomInfo?.emoji} />
        ) : (
          <SendMessage onSendMessage={handleSendMessage} />
        )}
      </div>
    </div>
  );
};

export default InputChat;
