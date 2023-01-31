import React, { useContext, useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faFaceSmile,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '../../../context/AppProvider';
import { AuthContext } from '../../../context/AuthContext';
import { formatDate } from '../../../constants/moment';
import NoAvatar from '../../../assets/imgs/NoAvatar.png';
import Tippy from '@tippyjs/react';

import { fbIcons } from '../../../constants/fbIcons';

const handelShowIconsFB = (showIconsFB) => {
  return (
    showIconsFB && (
      <div className="flex-center gap-1 p-1 rounded-lg shadow shadow-gray-500 bg-lightMode dark:bg-dark">
        {fbIcons.map((icon) => (
          <div
            key={icon.id}
            className="h-10 w-10 p-1 flex-center rounded-lg overflow-hidden cursor-pointer hover:bg-hoverLightMode dark:hover:bg-home-search"
          >
            <img
              className="w-full h-full object-cover flex-center"
              src={icon.src}
            />
          </div>
        ))}
      </div>
    )
  );
};

const Message = ({
  messageInfo,
  membersInfo,
  handleShowModalImg,
  handleShowModalDeleteMessage,
}) => {
  const [showIconsFB, setShowIconsFB] = useState(false);

  const { topicTheme } = useContext(AppContext);
  const { roomId, senderId, chatContent, time, type, fileName, reactions } =
    messageInfo;
  const { currentUser } = useContext(AuthContext);

  const refLastMessage = useRef();
  useEffect(() => {
    refLastMessage.current?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'nearest',
    });
  }, [messageInfo]);

  const sender = (uid) => {
    return membersInfo?.find((mem) => mem.uid === uid);
  };

  return (
    <div
      className={`w-full flex-center ${
        senderId == currentUser.uid ? 'owner' : ''
      }`}
    >
      <div
        ref={refLastMessage}
        className={`w-full flex mb-1 sm:px-3 gap-2 group ${
          senderId == currentUser.uid ? 'owner' : ''
        }`}
      >
        {/* Img Sender User */}
        {senderId !== currentUser.uid && (
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={sender(senderId)?.photoURL || NoAvatar}
          />
        )}

        {/* Message Content */}
        <div
          className={`flex flex-1 max-w-[60%] md:max-w-[75%] items-center overflow-hidden w-full ${
            senderId == currentUser.uid ? 'owner' : ''
          }`}
        >
          {/* bg userChat bg-messages */}
          {type == 'message' && chatContent != '' ? (
            <p
              style={
                senderId == currentUser.uid
                  ? {
                      backgroundColor: topicTheme,
                    }
                  : {}
              }
              className={`flex flex-col px-3 py-2 rounded-[18px] break-all ${
                senderId == currentUser.uid
                  ? 'owner'
                  : 'bg-inputLightMode dark:bg-messages'
              }`}
            >
              <time className="text-xs dark:text-white text-dark">
                {formatDate(time?.toDate())}
              </time>
              {chatContent}
            </p>
          ) : type == 'image' && chatContent != '' ? (
            <img
              className="rounded-xl max-w-[50%] message-img"
              src={chatContent}
              onClick={() => handleShowModalImg(chatContent)}
            />
          ) : type == 'video' && chatContent != '' ? (
            <video className="message-vid" controls src={chatContent} />
          ) : type == 'file' && chatContent != '' ? (
            <p
              style={
                senderId == currentUser.uid
                  ? {
                      backgroundColor: topicTheme,
                    }
                  : {}
              }
              className={`flex flex-col px-3 py-2 rounded-[18px] break-all ${
                senderId == currentUser.uid
                  ? 'owner'
                  : 'bg-inputLightMode dark:bg-messages'
              }`}
            >
              <time className="text-xs dark:text-white text-dark">
                {formatDate(time?.toDate())}
              </time>
              <a
                className="flex-center underline"
                href={chatContent}
                target="_blank"
              >
                <span>
                  {fileName}
                  <FontAwesomeIcon className="ml-2" icon={faCloudArrowDown} />
                </span>
              </a>
            </p>
          ) : (
            chatContent == '' && (
              <span className=" select-none dark:text-gray-400 text-gray-600 rounded-xl border border-gray-600 px-4 py-2">
                Revoked Message
              </span>
            )
          )}

          {/* Options */}
          {chatContent != '' && (
            <div
              className={`flex-center mx-3 opacity-0 ${
                showIconsFB ? 'opacity-100' : 'group-hover:opacity-100'
              } transition-smooth`}
            >
              {/* Reactions */}
              <div>
                <Tippy
                  render={() => handelShowIconsFB(showIconsFB)}
                  interactive
                  visible={showIconsFB}
                  placement="top"
                  onClickOutside={() => setShowIconsFB(false)}
                >
                  <div
                    onClick={() => setShowIconsFB(!showIconsFB)}
                    className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
                  >
                    <FontAwesomeIcon icon={faFaceSmile} />
                  </div>
                </Tippy>
              </div>

              {/* Copy message */}
              <div
                onClick={() => {
                  navigator.clipboard.writeText(chatContent || '');
                }}
                className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
              >
                <FontAwesomeIcon icon={faCopy} />
              </div>

              {/* Delete message */}
              {currentUser.uid == senderId && (
                <div
                  onClick={() => handleShowModalDeleteMessage(messageInfo?.id)}
                  className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
