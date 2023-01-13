import React, { createContext, useState } from 'react';

const SearchSideBarContext = createContext();

const SearchSideBarProvider = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchSideBarContext.Provider value={{ isSearching, setIsSearching }}>
      {children}
    </SearchSideBarContext.Provider>
  );
};

export { SearchSideBarContext };
export default SearchSideBarProvider;
