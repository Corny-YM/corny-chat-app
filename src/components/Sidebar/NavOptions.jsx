import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faMoon,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import CurrentUserInfoModal from '../Modals/CurrentUserInfoModal';

import { showModal } from '../../reducers/actions';

const renderControlAccount = (visible, setVisible, dispatch) => {
  const handleClickShowModal = () => {
    dispatch(showModal('user-info'));
    setVisible(false);
  };

  return (
    visible && (
      <div
        className="relative p-2 w-48 flex flex-col gap-1 border-[2px] rounded-md rounded-b border-gray-600 text-white bg-dark"
        tabIndex="10"
      >
        <div
          onClick={handleClickShowModal}
          className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hover"
        >
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faUser}
          />
          <span>My Information</span>
        </div>
        <div className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hover">
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faMoon}
          />
          <span>Dark Mode</span>
        </div>
        <div className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hover">
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faArrowRightFromBracket}
          />
          <span>Log out</span>
        </div>
      </div>
    )
  );
};

const NavOptions = () => {
  const [visible, setVisible] = useState(false);

  const modalName = useSelector((state) => state.modalName);
  const dispatch = useDispatch();

  return (
    <>
      <Tippy
        interactive
        visible={visible}
        placement="bottom-end"
        onClickOutside={() => setVisible(false)}
        render={() => renderControlAccount(visible, setVisible, dispatch)}
      >
        <div
          onClick={() => setVisible(!visible)}
          className="w-9 h-9 rounded-[50%] overflow-hidden 
            border-2 cursor-pointer "
        >
          <img className="object-cover" src="https://i.pravatar.cc/150?img=3" />
        </div>
      </Tippy>
      {modalName === 'user-info' && <CurrentUserInfoModal />}
    </>
  );
};

export default NavOptions;
