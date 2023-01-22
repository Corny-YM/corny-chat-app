import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { closeModal } from '../../reducers/actions';
import { AppContext } from '../../context/AppProvider';

const ModalsTemplate = ({ children }) => {
  const { topicTheme } = useContext(AppContext);
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
  };

  return (
    <div
      onClick={handleCloseModal}
      className="flex-center backdrop-blur-lg fixed inset-0 z-50 p-8 bg-[rgba(0,0,0,0.75)]"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>

      <div
        onClick={handleCloseModal}
        className={`modal-close-btn hover:opacity-80`}
        style={{ backgroundColor: topicTheme }}
      >
        <FontAwesomeIcon className="text-xl text-gray-200" icon={faXmark} />
      </div>
    </div>
  );
};

export default ModalsTemplate;
