import React, { useContext, useRef, useState } from 'react';

import {
  faArrowLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../context/AppProvider';

const Search = () => {
  const inputRef = useRef();
  const { isSearching, setIsSearching } = useContext(AppContext);

  const handleClick = () => {
    setIsSearching(true);
    inputRef.current.focus();
  };
  const handleBlur = () => {
    setIsSearching(false);
  };

  return (
    <div className="w-full flex items-center mt-[20px] gap-1">
      <div
        className={`${!isSearching && 'hidden'} w-9 h-9 rounded-full flex-center
        cursor-pointer hover:bg-hover`}
      >
        <FontAwesomeIcon className="text-[18px]" icon={faArrowLeft} />
      </div>
      <div
        onClick={handleClick}
        className="w-full flex items-center px-4
      bg-home-search rounded-3xl"
      >
        {!isSearching && (
          <FontAwesomeIcon
            className="w-5 h-5 flex-center"
            icon={faMagnifyingGlass}
          />
        )}
        <input
          ref={inputRef}
          onBlur={handleBlur}
          className="input-styled-home flex-1 bg-home-search"
          type="text"
          placeholder="Finding on CornyChat"
        />
      </div>
    </div>
  );
};

export default Search;
