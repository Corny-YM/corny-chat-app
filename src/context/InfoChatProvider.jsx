import React, { createContext, useState } from 'react';

const InfoChatContext = createContext();

const InfoChatProvider = ({ children }) => {
  const [showChatDetails, setShowChatDetails] = useState(false);

  return (
    <InfoChatContext.Provider value={{ showChatDetails, setShowChatDetails }}>
      {children}
    </InfoChatContext.Provider>
  );
};

export { InfoChatContext };
export default InfoChatProvider;
