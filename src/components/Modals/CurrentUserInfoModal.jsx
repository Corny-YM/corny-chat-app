import React, { useContext } from 'react';

import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AuthContext } from '../../context/AuthContext';

import NoAvatar from '../../assets/imgs/NoAvatar.png';

import ModalsTemplate from './ModalsTemplate';

const CurrentUserInfoModal = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <ModalsTemplate>
      <div className="flex-col md:flex-row flex-center bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="max-w-[100px] md:max-w-[150px] flex-center rounded-full overflow-hidden mx-4">
          <img className="object-cover" src={currentUser.photoURL || ''} />
        </div>
        {/* information */}
        <div className="flex flex-col mx-4">
          <div className="min-h-[32px] flex items-center mb-1">
            <div className="font-bold mr-2">Name:</div>
            <div className="">{currentUser?.displayName}</div>
          </div>
          <div className="min-h-[32px] flex items-center mb-1">
            <div className="font-bold mr-2">Email:</div>
            <div className="">{currentUser?.email}</div>
          </div>
          <div className="min-h-[32px] flex items-center mb-1">
            <div className="font-bold mr-2">ID:</div>
            <div className="">{currentUser?.uid}</div>
            <div
              onClick={() => navigator.clipboard.writeText(currentUser?.uid)}
              className="flex-center ml-5 px-2 py-1 rounded-md bg-hoverLightMode dark:bg-hover cursor-pointer border-2 border-solid border-main-color"
            >
              <FontAwesomeIcon className="text-xl" icon={faClipboard} />
            </div>
          </div>
        </div>
      </div>
    </ModalsTemplate>
  );
};

export default CurrentUserInfoModal;
