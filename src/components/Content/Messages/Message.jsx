import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faFaceSmile,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

import { AppContext } from '../../../context/AppProvider';
import { showModalImgShared } from '../../../reducers/actions';
import { AuthContext } from '../../../context/AuthContext';

import { formatDate } from '../../../constants/moment';

const Message = ({ messageInfo, membersInfo, handleShowModalImg }) => {
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
      ref={refLastMessage}
      className={`w-full flex mb-1 sm:px-3 gap-2 group ${
        senderId == currentUser.uid ? 'owner' : ''
      }`}
    >
      {senderId !== currentUser.uid && (
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={sender(senderId)?.photoURL}
        />
      )}
      <div
        className={`flex items-center overflow-hidden max-w-[60%] md:max-w-[75%] ${
          senderId == currentUser.uid ? 'owner' : ''
        }`}
      >
        {/* bg userChat bg-messages */}
        {type == 'message' ? (
          <span
            style={
              senderId == currentUser.uid
                ? {
                    backgroundColor: topicTheme,
                  }
                : {}
            }
            className={`flex flex-col px-3 py-2 rounded-[18px] w-fit ${
              senderId == currentUser.uid
                ? 'owner'
                : 'bg-inputLightMode dark:bg-messages'
            }`}
          >
            <time className="text-xs dark:text-white text-dark">
              {formatDate(time?.toDate())}
            </time>
            {chatContent}
          </span>
        ) : type == 'image' ? (
          <img
            className="rounded-xl max-w-[50%] message-img"
            src={chatContent}
            onClick={() => handleShowModalImg(chatContent)}
          />
        ) : type == 'video' ? (
          <video className="message-vid" controls src={fileName} />
        ) : type == 'file' ? (
          ''
        ) : (
          ''
        )}
        <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
          <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
          <div
            onClick={() => {
              navigator.clipboard.writeText(chatContent || '');
            }}
            className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
          >
            <FontAwesomeIcon icon={faCopy} />
          </div>
          <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
