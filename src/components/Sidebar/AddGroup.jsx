import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { showModal } from '../../reducers/actions';
import AddGroupChatModal from '../Modals/AddGroupChatModal';

const AddGroup = () => {
  const modalName = useSelector((state) => state.modalName);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(showModal('add-group'));
  };

  return (
    <div className="w-full h-14 flex-center bg-dark">
      <div
        onClick={handleShow}
        className="flex-center p-2 rounded-xl cursor-pointer hover:bg-hover"
      >
        <FontAwesomeIcon icon={faUsersRectangle} />
        <span className="pl-2 font-bold">Add a new group conversation</span>
      </div>
      {modalName == 'add-group' && <AddGroupChatModal />}
    </div>
  );
};

export default AddGroup;
