import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showModal, showModalImgShared } from '../../../reducers/actions';
import useMessagesData from '../../../hooks/useMessagesData';

import Message from './Message';
import Img from '../../Modals/Shared/Img';
import RemoveMessageModal from '../../Modals/RemoveMessageModal';

const Messages = ({ roomId, members }) => {
  const [deleteId, setDeleteId] = useState('');

  const { modalName, src } = useSelector((state) => state);
  const dispatch = useDispatch();

  // roomId, amount = limit
  const { messages } = useMessagesData(roomId, 80);
  messages.sort((a, b) => a.id - b.id);

  const handleShow = (src) => {
    dispatch(
      showModalImgShared({
        modalName: 'img-shared',
        src: src,
      }),
    );
  };

  const handleShowModalDeleteMessage = (messageId) => {
    // console.log(typeof messageId);
    setDeleteId(messageId);
    dispatch(showModal('delete-message'));
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
            handleShowModalDeleteMessage={handleShowModalDeleteMessage}
          />
        ))}
      </div>
      {modalName == 'img-shared' && <Img src={src} />}
      {modalName == 'delete-message' && (
        <RemoveMessageModal messageId={deleteId} />
      )}
    </>
  );
};

export default Messages;
