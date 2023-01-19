import React, { useContext, useState } from 'react';
import Tippy from '@tippyjs/react';
import { faCheck, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../../constants/colors';
import { AppContext } from '../../../context/AppProvider';

const renderTopicTheme = (showTopic, topicTheme, setTopicTheme) => {
  const handleChangeTopic = (color) => {
    localStorage.setItem('topic', JSON.stringify(color));
    setTopicTheme(color);
  };

  return (
    showTopic && (
      <ul
        className="max-w-[300px] flex flex-wrap gap-1 bg-dark px-3 py-4 rounded-lg"
        style={{ border: 'solid 2px' + topicTheme }}
      >
        {colors.map((color, index) => (
          <li
            onClick={() => handleChangeTopic(color)}
            key={index}
            className="relative rounded-full p-5"
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 flex-center text-2xl cursor-pointer text-white">
              {color === topicTheme && <FontAwesomeIcon icon={faCheck} />}
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

const Topic = () => {
  const [showTopic, setShowTopic] = useState(false);
  const { topicTheme, setTopicTheme } = useContext(AppContext);

  const handleClick = () => {
    setShowTopic(!showTopic);
  };

  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <Tippy
        interactive
        visible={showTopic}
        render={() => renderTopicTheme(showTopic, topicTheme, setTopicTheme)}
        onClickOutside={() => setShowTopic(false)}
      >
        <div
          onClick={handleClick}
          className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:opacity-80"
          style={{ backgroundColor: topicTheme }}
        >
          <FontAwesomeIcon icon={faPalette} />
        </div>
      </Tippy>
    </div>
  );
};

export default Topic;
