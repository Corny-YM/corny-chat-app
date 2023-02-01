import React, { useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showModal, showModalImgShared } from '../../../reducers/actions';
import useMessagesData from '../../../hooks/useMessagesData';

import Message from './Message';
import Img from '../../Modals/Shared/Img';
import RemoveMessageModal from '../../Modals/RemoveMessageModal';
import ReactionsModal from '../../Modals/ReactionsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Messages = ({ roomId, members }) => {
  const [deleteId, setDeleteId] = useState('');
  const [messageSelected, setMessageSelected] = useState('');
  const [reactionsMessageSelected, setReactionsMessageSelected] = useState([]);

  const ref = useRef();

  const handleSelectedMessage = (messageId, reactions) => {
    setMessageSelected(messageId);
    setReactionsMessageSelected(reactions);
  };

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

  const handleScrollMessages = () => {
    // console.log((ref.current.scrollTop * 20) / 100);
  };

  return (
    <>
      <div className="relative flex-1 flex flex-col overflow-overlay">
        {/* Item message */}
        <div
          ref={ref}
          onScroll={handleScrollMessages}
          className="flex-1 flex flex-col overflow-overlay"
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              messageInfo={message}
              membersInfo={members}
              handleShowModalImg={handleShow}
              handleShowModalDeleteMessage={handleShowModalDeleteMessage}
              handleSelectedMessage={handleSelectedMessage}
            />
          ))}
        </div>
        {/* <div className="flex-center rounded-full w-10 h-10 cursor-pointer shadow shadow-gray-500 bg-inputLightMode dark:bg-messages absolute z-50 left-[50%] bottom-4 translate-x-[-50%]">
          <FontAwesomeIcon icon={faArrowDown} />
        </div> */}
      </div>
      {modalName == 'img-shared' && <Img src={src} />}
      {modalName == 'delete-message' && (
        <RemoveMessageModal messageId={deleteId} />
      )}
      {modalName == 'user-reactions' && (
        <ReactionsModal
          messageId={messageSelected}
          members={members}
          reactions={reactionsMessageSelected}
        />
      )}
    </>
  );
};

export default Messages;
