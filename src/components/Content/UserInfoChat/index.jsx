import React from 'react';

import Tippy from '@tippyjs/react';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserInfoChat = () => {
  return (
    <div className="flex justify-between items-center pb-3 px-3">
      <div className="h-[52px] flex flex-1 flex-grow items-center overflow-hidden">
        <div className="flex-center w-10 h-10 mr-[6px] my-[6px] overflow-hidden rounded-full">
          <img
            className="object-contain"
            src="https://i.pravatar.cc/150?img=1"
          />
        </div>
        <div className="w-full flex flex-1 pr-3 text-[17px] font-bold tracking-wider text-ellipsis">
          The Michael
        </div>
      </div>
      <div className="flex-center">
        <Tippy
          placement="bottom-end"
          className="bg-tippy-hover p-3 rounded-lg"
          content="Information about the chat"
        >
          <div className="flex-center rounded-full ml-1 p-[6px] cursor-pointer hover:bg-hover">
            <FontAwesomeIcon className="text-[21px]" icon={faCircleInfo} />
          </div>
        </Tippy>
      </div>
    </div>
  );
};

export default UserInfoChat;
