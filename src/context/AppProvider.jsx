import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [showConversation, setShowConversation] = useState(false);

  console.log(showConversation);

  return (
    <AppContext.Provider
      value={{
        isSearching,
        setIsSearching,
        showConversation,
        setShowConversation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
