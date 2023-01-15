import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faFaceSmile,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

const Messages = () => {
  return (
    <div className="flex-1 flex flex-col overflow-overlay">
      {/* Item message */}
      {/* Ower */}
      <div className="w-full flex mb-1 px-3 gap-2 group owner">
        {/* <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        /> */}
        <div className="flex items-center overflow-hidden owner">
          <span
            className="w-full h-full flex-center px-3 py-2 rounded-[18px] 
            owner bg-main-color-darker"
          >
            Hello my friend 2
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      {/* Owner */}
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello CORNY
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group owner">
        {/* <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        /> */}
        <div className="flex items-center overflow-hidden owner">
          <img
            className="rounded-xl max-w-[50%] message-img"
            src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/images%2F000-333e9cr-5613.jpg?alt=media&token=f6cf2517-f2fc-41b2-92e0-935e1445195e"
          />
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello my friend 2
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello CORNY
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <img
            className="rounded-xl max-w-[50%] message-img"
            src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/images%2F000-333e9cr-5613.jpg?alt=media&token=f6cf2517-f2fc-41b2-92e0-935e1445195e"
          />
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello my friend 2
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello CORNY
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <img
            className="rounded-xl max-w-[50%] message-img"
            src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/images%2F000-333e9cr-5613.jpg?alt=media&token=f6cf2517-f2fc-41b2-92e0-935e1445195e"
          />
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello my friend 2
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello CORNY
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <img
            className="rounded-xl max-w-[50%] message-img"
            src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/images%2F000-333e9cr-5613.jpg?alt=media&token=f6cf2517-f2fc-41b2-92e0-935e1445195e"
          />
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello my friend 2
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <span
            className="w-full h-full flex-center px-3 py-2 bg-messages 
        rounded-[18px]"
          >
            Hello CORNY
          </span>
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mb-1 px-3 gap-2 group">
        <img
          className="w-8 h-8 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
        />
        <div className="flex items-center overflow-hidden">
          <img
            className="rounded-xl max-w-[50%] message-img"
            src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/images%2F000-333e9cr-5613.jpg?alt=media&token=f6cf2517-f2fc-41b2-92e0-935e1445195e"
          />
          <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hover">
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
