import React, { useContext } from 'react';

import { faChevronLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../../context/AppProvider';
import { InfoChatContext } from '../../../context/InfoChatProvider';

const UserInfoChat = () => {
  const { topicTheme, setShowConversation } = useContext(AppContext);
  const { showChatDetails, setShowChatDetails } = useContext(InfoChatContext);

  const handleClick = () => {
    setShowConversation(false);
  };

  return (
    <div className="flex justify-between items-center pb-3 sm:px-3">
      {/* Back button */}
      <div
        onClick={handleClick}
        className="flex-center sm:hidden w-7 h-7 mr-2 rounded-full cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
      >
        <FontAwesomeIcon className="" icon={faChevronLeft} />
      </div>
      {/* Img Name Group or User chat */}
      <div className="h-[52px] flex flex-1 flex-grow items-center overflow-hidden">
        <div className="flex-center w-10 h-10 mr-[6px] my-[6px] overflow-hidden rounded-full">
          <img
            className="object-contain"
            src="https://i.pravatar.cc/150?img=1"
          />
        </div>
        <div className="w-full flex flex-1 pr-3 text-[17px] font-bold tracking-wider text-ellipsis">
          The Michael
        </div>
      </div>
      {/* More: setting */}
      <div className="flex-center">
        <div
          onClick={() => setShowChatDetails(true)}
          className={`${
            showChatDetails && 'hidden'
          } flex-center rounded-full ml-1 p-[6px] cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover`}
        >
          <FontAwesomeIcon
            className="text-[21px]"
            style={{ color: topicTheme }}
            icon={faCircleInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoChat;
