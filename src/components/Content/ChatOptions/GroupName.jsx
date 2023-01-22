import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ChangeGroupNameModal from '../../Modals/ChatOptions/ChangeGroupNameModal';
import { showModal } from '../../../reducers/actions';

const GroupName = () => {
  const modalName = useSelector((state) => state.modalName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showModal('group-name'));
  };

  return (
    <>
      <div className="flex flex-col w-12 h-12 mr-2">
        <div
          onClick={handleClick}
          className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <FontAwesomeIcon icon={faPenNib} />
        </div>
      </div>
      {modalName === 'group-name' && <ChangeGroupNameModal />}
    </>
  );
};

export default GroupName;
