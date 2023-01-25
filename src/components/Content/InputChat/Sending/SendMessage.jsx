import React, { useContext } from 'react';

import { SendIcon } from '../../../Icons';
import { AppContext } from '../../../../context/AppProvider';

const SendMessage = ({ onSendMessage }) => {
  const { topicTheme } = useContext(AppContext);
  return (
    <div
      onClick={onSendMessage}
      className="p-2 flex-center rounded-full cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
    >
      <SendIcon
        width="1.25rem"
        height="1.25rem"
        className="text-xl"
        style={{ color: topicTheme }}
      />
    </div>
  );
};

export default SendMessage;
