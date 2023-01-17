import React from 'react';
import { useDispatch } from 'react-redux';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { closeModal } from '../../reducers/actions';

const ModalsTemplate = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
  };

  return (
    <div
      onClick={handleCloseModal}
      className="flex-center fixed inset-0 z-50 bg-[rgba(0,0,0,0.75)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex-center bg-dark rounded-lg px-3 py-5"
      >
        {children}
      </div>

      <div onClick={handleCloseModal} className="modal-close-btn">
        <FontAwesomeIcon className="text-xl text-gray-200" icon={faXmark} />
      </div>
    </div>
  );
};

export default ModalsTemplate;
