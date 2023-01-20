import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import ModalsTemplate from './ModalsTemplate';

const CurrentUserInfoModal = () => {
  return (
    <ModalsTemplate>
      <div className="flex-center bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="flex-center rounded-full overflow-hidden mx-4">
          <img className="object-cover" src="https://i.pravatar.cc/150?img=3" />
        </div>
        {/* information */}
        <div className="flex flex-col mx-4">
          <div className="min-h-[32px] flex items-center mb-1">
            <div className="font-bold mr-2">Name:</div>
            <div className="">Corny</div>
          </div>
          <div className="min-h-[32px] flex items-center mb-1">
            <div className="font-bold mr-2">Email:</div>
            <div className="">vietcong1508@gmail.com</div>
          </div>
          <div className="min-h-[32px] flex items-center mb-1">
            <div className="font-bold mr-2">ID:</div>
            <div className="">FCvDDKbqAJTxJWqecVwLSvJfJGg2</div>
            <div className="flex-center ml-5 px-2 py-1 rounded-md bg-hoverLightMode dark:bg-hover cursor-pointer border-2 border-solid border-main-color">
              <FontAwesomeIcon className="text-xl" icon={faClipboard} />
            </div>
          </div>
        </div>
      </div>
    </ModalsTemplate>
  );
};

export default CurrentUserInfoModal;
