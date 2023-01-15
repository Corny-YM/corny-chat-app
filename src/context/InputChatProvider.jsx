import React, { createContext, useState } from 'react';

const InputChatContext = createContext();

const InputChatProvider = ({ children }) => {
  const [isTexting, setIsTexting] = useState(false);

  return (
    <InputChatContext.Provider value={{ isTexting, setIsTexting }}>
      {children}
    </InputChatContext.Provider>
  );
};

export { InputChatContext };
export default InputChatProvider;
