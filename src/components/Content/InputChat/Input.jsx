import React, { useContext, useEffect, useState } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import Tippy from '@tippyjs/react';

import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputChatContext } from '../../../context/InputChatProvider';
import { AppContext } from '../../../context/AppProvider';

const renderEmojiMart = (isShowPicker = false, setValue) => {
  return (
    isShowPicker && (
      <Picker
        data={data}
        onEmojiSelect={(data) => setValue((prev) => prev + data.native)}
      />
    )
  );
};

const Input = () => {
  const [value, setValue] = useState('');
  const [isShowPicker, setIsShowPicker] = useState(false);

  const { topicTheme } = useContext(AppContext);
  const { setIsTexting } = useContext(InputChatContext);

  const handleClick = () => {
    setIsShowPicker(!isShowPicker);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value == '') {
      setIsTexting(false);
      return;
    }

    setIsTexting(true);
  }, [value]);

  return (
    <div className="flex-1 flex mx-1 py-1 rounded-[20px] relative">
      <input
        value={value}
        onChange={handleChange}
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
        render={() => renderEmojiMart(isShowPicker, setValue)}
      >
        <div
          onClick={handleClick}
          className="flex-center absolute right-2 top-[50%] -translate-y-1/2 p-2 rounded-full cursor-pointer bg-home-search hover:bg-hover"
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
