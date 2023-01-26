import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { faChevronLeft, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../../context/AppProvider';
import { InfoChatContext } from '../../../context/InfoChatProvider';
import { AuthContext } from '../../../context/AuthContext';

import useListRoomsData from '../../../hooks/useListRoomsData';

import NoGroupImg from '../../../assets/imgs/NoGroupImg.jpg';

const UserInfoChat = ({ roomInfo }) => {
  const [friend, setFriend] = useState({});
  const { currentUser } = useContext(AuthContext);
  const { topicTheme, showConversation, setShowConversation } =
    useContext(AppContext);
  const { showChatDetails, setShowChatDetails } = useContext(InfoChatContext);

  useEffect(() => {
    if (roomInfo.chatType === 'friend') {
      const index = roomInfo.members.findIndex(
        (mem) => mem.uid != currentUser.uid,
      );
      setFriend(roomInfo.members[index]);
    } else {
      setFriend({});
    }
  }, [roomInfo]);

  const handleClick = () => {
    setShowConversation(false);
  };

  return (
    <div className="flex justify-between items-center pb-3 sm:px-3">
      {/* Back button */}
      <div
        onClick={handleClick}
        className="flex-center md:hidden w-7 h-7 mr-2 rounded-full cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
      >
        <FontAwesomeIcon className="" icon={faChevronLeft} />
      </div>
      {/* Img Name Group or User chat */}
      <div className="h-[52px] flex flex-1 flex-grow items-center overflow-hidden">
        <div className="flex-center w-10 h-10 mr-[6px] md:mr-3 my-[6px] overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            src={friend?.photoURL || roomInfo?.chatAvatar || NoGroupImg}
          />
        </div>
        <div className="w-full flex flex-1 lg:text-xl pr-3 text-[17px] font-bold tracking-wider text-ellipsis capitalize">
          {friend?.displayName || roomInfo?.roomName}
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
