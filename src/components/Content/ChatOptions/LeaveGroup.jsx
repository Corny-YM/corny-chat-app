import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { showModal } from '../../../reducers/actions';
import LeaveGroupModal from '../../Modals/ChatOptions/LeaveGroupModal';

const LeaveGroup = () => {
  const modalName = useSelector((state) => state.modalName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showModal('leave-group'));
  };

  return (
    <>
      <div className="flex flex-col w-12 h-12 mr-2">
        <div
          onClick={handleClick}
          className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <FontAwesomeIcon
            className="text-rose-600"
            icon={faArrowRightFromBracket}
          />
        </div>
      </div>
      {modalName === 'leave-group' && <LeaveGroupModal />}
    </>
  );
};

export default LeaveGroup;
