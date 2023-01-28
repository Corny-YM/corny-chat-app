import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faFaceSmile,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

import { AppContext } from '../../../context/AppProvider';
import { showModalImgShared } from '../../../reducers/actions';
import Img from '../../Modals/Shared/Img';
import Message from './Message';
import useMessagesData from '../../../hooks/useMessagesData';

const Messages = ({ roomId, members }) => {
  const { topicTheme } = useContext(AppContext);
  const { modalName, src } = useSelector((state) => state);
  const dispatch = useDispatch();

  // roomId, amount = limit
  const { messages } = useMessagesData(roomId, 50);

  const handleShow = (src) => {
    dispatch(
      showModalImgShared({
        modalName: 'img-shared',
        src: src,
      }),
    );
  };

  return (
    <>
      <div className="flex-1 flex flex-col overflow-overlay">
        {/* Item message */}
        {messages.map((message) => (
          <Message
            key={message.id}
            messageInfo={message}
            membersInfo={members}
            handleShowModalImg={handleShow}
          />
        ))}
      </div>
      {modalName == 'img-shared' && <Img src={src} />}
      {/* {modalName == 'delete-message' && <Img src={src} />} */}
    </>
  );
};

export default Messages;
