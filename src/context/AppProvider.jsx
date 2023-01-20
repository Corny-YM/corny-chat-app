import React, { createContext, useEffect, useState } from 'react';

import { colors } from '../constants/colors';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const curTopic = JSON.parse(localStorage.getItem('topic')) || colors[1];
  const [topicTheme, setTopicTheme] = useState(curTopic);

  const [isSearching, setIsSearching] = useState(false);
  const [showConversation, setShowConversation] = useState(false);

  useEffect(() => {
    localStorage.setItem('topic', JSON.stringify(topicTheme));
  }, [topicTheme]);

  return (
    <AppContext.Provider
      value={{
        isSearching,
        setIsSearching,
        showConversation,
        setShowConversation,
        topicTheme,
        setTopicTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppProvider;
