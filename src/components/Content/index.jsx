import React from 'react';

import Chat from './Chat';
import InfoChat from './InfoChat';

const Content = () => {
  return (
    <div
      className="hidden sm:flex flex-1 h-full inset-0 p-3 md:p-0
      "
    >
      <Chat />
      <InfoChat />
    </div>
  );
};

export default Content;
