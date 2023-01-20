import React, { useState } from 'react';
import Tippy from '@tippyjs/react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const renderIcon = (showIcon) => {
  const curTheme = JSON.parse(localStorage.getItem('theme'));
  return showIcon && <Picker data={data} theme={curTheme} />;
};

const Emoticon = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handleClick = () => {
    setShowIcon(!showIcon);
  };

  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <Tippy
        interactive
        visible={showIcon}
        render={() => renderIcon(showIcon)}
        onClickOutside={() => setShowIcon(false)}
      >
        <div
          onClick={handleClick}
          className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full 
          hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          🌽
        </div>
      </Tippy>
    </div>
  );
};

export default Emoticon;
