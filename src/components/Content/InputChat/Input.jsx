import React, { useContext, useEffect, useState } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import Tippy from '@tippyjs/react';

import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputChatContext } from '../../../context/InputChatProvider';
import { AppContext } from '../../../context/AppProvider';

const renderEmojiMart = (isShowPicker = false, setValue) => {
  const curTheme = JSON.parse(localStorage.getItem('theme'));
  return (
    isShowPicker && (
      <Picker
        data={data}
        theme={curTheme}
        onEmojiSelect={(data) => setValue((prev) => prev + data.native)}
      />
    )
  );
};

const Input = ({ onSendMessage, stateInput }) => {
  const [isShowPicker, setIsShowPicker] = useState(false);
  const { valueInput, setValueInput } = stateInput;

  const { topicTheme } = useContext(AppContext);
  const { setIsTexting } = useContext(InputChatContext);

  useEffect(() => {
    if (valueInput == '') {
      setIsTexting(false);
      return;
    }

    setIsTexting(true);
  }, [valueInput]);

  const handleClick = () => {
    setIsShowPicker(!isShowPicker);
  };

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.code == 'Enter') {
      onSendMessage();
    }
  };

  return (
    <div className="flex-1 flex mx-1 py-1 rounded-[20px] relative">
      <input
        value={valueInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        className="w-full input-styled-chat px-4 py-2 rounded-[20px]"
        placeholder="Aa"
        type="text"
      />
      <Tippy
        interactive
        placement="top-end"
        onClickOutside={() => setIsShowPicker(false)}
        visible={isShowPicker}
        render={() => renderEmojiMart(isShowPicker, setValueInput)}
      >
        <div
          onClick={handleClick}
          className="flex-center absolute right-2 top-[50%] -translate-y-1/2 p-2 rounded-full cursor-pointer dark:bg-home-search hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <FontAwesomeIcon
            style={{ color: topicTheme }}
            className="font-bold"
            icon={faFaceSmile}
          />
        </div>
      </Tippy>
    </div>
  );
};

export default Input;
