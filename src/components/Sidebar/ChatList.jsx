import React from 'react';

import {
  faEllipsis,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatList = () => {
  return (
    <div className="h-auto flex flex-col flex-1 mt-3 overflow-y-scroll">
      {/* item */}
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
      <div className="flex-center justify-start relative pt-2 group">
        {/* GROUP */}
        <div className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hover">
          <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Group Name
            </p>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              Last Message
            </span>
          </div>
        </div>

        {/* MORE */}
        <div
          className="absolute right-2 hidden
            flex-center w-9 h-9 rounded-full cursor-pointer 
            bg-messages group-hover:flex hover:bg-hover "
        >
          <FontAwesomeIcon className="flex-center" icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
