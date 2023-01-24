import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// firebase
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCloudMoon,
  faCloudSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import CurrentUserInfoModal from '../Modals/CurrentUserInfoModal';
import { useDarkMode } from '../../hooks';
import { showModal } from '../../reducers/actions';
import { AuthContext } from '../../context/AuthContext';

const renderControlAccount = (
  visible,
  setVisible,
  theme,
  setCurTheme,
  darkMode,
  setDarkMode,
  dispatch,
) => {
  const handleClickShowModal = () => {
    dispatch(showModal('user-info'));
    setVisible(false);
  };

  const toggleTheme = (e) => {
    e.stopPropagation();
    setDarkMode(!darkMode);
    setCurTheme(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const handleSignOut = () => {
    signOut(auth);
    console.log(auth);
  };

  return (
    visible && (
      <div
        className="relative p-2 w-48 flex flex-col gap-1 border-[2px] rounded-md rounded-b border-gray-600 dark:text-white bg-lightMode dark:bg-darkMode"
        tabIndex="10"
      >
        <div
          onClick={handleClickShowModal}
          className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          <FontAwesomeIcon
            className="flex-center w-5 h-5 text-[20px]"
            icon={faUser}
          />
          <span>Your Profile</span>
        </div>
        <div
          onClick={toggleTheme}
          className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          {darkMode ? (
            <FontAwesomeIcon
              className="flex-center w-5 h-5 text-[20px]"
              icon={faCloudMoon}
            />
          ) : (
            <FontAwesomeIcon
              className="flex-center w-5 h-5 text-[20px]"
              icon={faCloudSun}
            />
          )}
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
        <div
          onClick={handleSignOut}
          className="hover-smooth p-2 flex items-center rounded-md gap-2 cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
        >
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

  const [theme, setCurTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const modalName = useSelector((state) => state.modalName);
  const dispatch = useDispatch();

  return (
    <>
      <Tippy
        interactive
        visible={visible}
        placement="bottom-end"
        onClickOutside={() => setVisible(false)}
        render={() =>
          renderControlAccount(
            visible,
            setVisible,
            theme,
            setCurTheme,
            darkMode,
            setDarkMode,
            dispatch,
          )
        }
      >
        <div
          onClick={() => setVisible(!visible)}
          className="w-9 h-9 flex-center rounded-full overflow-hidden 
            border-2 cursor-pointer "
        >
          <img
            className="w-full h-full object-cover"
            src={currentUser?.photoURL}
          />
        </div>
      </Tippy>
      {modalName === 'user-info' && <CurrentUserInfoModal />}
    </>
  );
};

export default NavOptions;
