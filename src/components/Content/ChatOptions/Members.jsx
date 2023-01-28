import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MembersModal from '../../Modals/ChatOptions/MembersModal';
import { showModal } from '../../../reducers/actions';

const Members = ({ roomId, members }) => {
  const modalName = useSelector((state) => state.modalName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showModal('members'));
  };

  return (
    <>
      <div className="flex flex-col w-12 h-12 mr-2">
        <div
          onClick={handleClick}
          className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <FontAwesomeIcon icon={faUsers} />
        </div>
      </div>

      {modalName == 'members' && (
        <MembersModal dispatch={dispatch} roomId={roomId} members={members} />
      )}
    </>
  );
};

export default Members;
