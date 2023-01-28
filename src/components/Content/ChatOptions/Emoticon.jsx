import React, { useState } from 'react';
import Tippy from '@tippyjs/react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { init } from 'emoji-mart';
import { updateEmojiChat } from '../../../firebase/services';

init({ data });

const renderIcon = (showIcon, handleChangeEmotionChat) => {
  const curTheme = JSON.parse(localStorage.getItem('theme'));
  const handleEmojiSelect = async (e) => {
    await handleChangeEmotionChat(e?.id, e.skin ?? 1);
  };
  return (
    showIcon && (
      <Picker
        onEmojiSelect={(e) => handleEmojiSelect(e)}
        data={data}
        theme={curTheme}
      />
    )
  );
};

const Emoticon = ({ roomId, emoji }) => {
  const [showIcon, setShowIcon] = useState(false);

  const handleClick = () => {
    setShowIcon(!showIcon);
  };

  const handleChangeEmotionChat = async (id, skin) => {
    await updateEmojiChat(roomId, id, skin);
  };

  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <Tippy
        interactive
        visible={showIcon}
        render={() => renderIcon(showIcon, handleChangeEmotionChat)}
        onClickOutside={() => setShowIcon(false)}
      >
        <div
          onClick={handleClick}
          className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full 
          hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <em-emoji
            className="bg-red-50"
            id={emoji?.id || '+1'}
            skin={emoji?.skin || 1}
            size="1.25em"
            fallback="🌽"
          ></em-emoji>
        </div>
      </Tippy>
    </div>
  );
};

export default Emoticon;
