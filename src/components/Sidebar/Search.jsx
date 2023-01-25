import React, { useContext, useRef, useState } from 'react';

import {
  faArrowLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../context/AppProvider';

const Search = ({ username, setUsername, setUser, onKeyDown }) => {
  const inputRef = useRef();
  const { isSearching, setIsSearching } = useContext(AppContext);

  const handleClick = () => {
    setIsSearching(true);
    inputRef.current.focus();
  };

  const handleCloseSearchResult = () => {
    setIsSearching(false);
    setUsername('');
    setUser([]);
  };

  return (
    <div className="w-full flex items-center mt-[20px] gap-1">
      <div
        onClick={handleCloseSearchResult}
        className={`${!isSearching && 'hidden'} w-9 h-9 rounded-full flex-center
        cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover`}
      >
        <FontAwesomeIcon className="text-[18px]" icon={faArrowLeft} />
      </div>
      <div
        onClick={handleClick}
        className="w-full flex items-center px-4 bg-inputLightMode dark:bg-home-search rounded-3xl"
      >
        {!isSearching && (
          <FontAwesomeIcon
            className="w-5 h-5 flex-center"
            icon={faMagnifyingGlass}
          />
        )}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setIsSearching(true)}
          onKeyDown={onKeyDown}
          ref={inputRef}
          className="input-styled-home flex-1 dark:bg-home-search"
          type="text"
          placeholder="Finding on CornyChat"
        />
      </div>
    </div>
  );
};

export default Search;
