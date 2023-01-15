import React from 'react';

import { SendIcon } from '../../../Icons';

const SendMessage = () => {
  return (
    <div className="p-2 flex-center rounded-full cursor-pointer hover:bg-hover">
      <SendIcon
        width="1.25rem"
        height="1.25rem"
        className="text-xl text-main-color"
      />
    </div>
  );
};

export default SendMessage;
