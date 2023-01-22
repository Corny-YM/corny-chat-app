import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faFaceSmile,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons';

import { AppContext } from '../../../context/AppProvider';
import { showModalImgShared } from '../../../reducers/actions';
import Img from '../../Modals/Shared/Img';

const Message = () => {
  const { topicTheme } = useContext(AppContext);
  const { modalName, src } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleShow = (src) => {
    dispatch(
      showModalImgShared({
        modalName: 'img-shared',
        src: src,
      }),
    );
  };

  return (
    <div className="w-full flex mb-1 sm:px-3 gap-2 group owner">
      <div className="flex items-center overflow-hidden owner">
        {/* bg userChat bg-messages */}
        <span
          style={{ backgroundColor: topicTheme }}
          className="max-w-[60%] md:max-w-[75%] px-3 py-2 rounded-[18px] owner"
        >
          Hello CORNY Hello CORNY Hello CORNY Hello CORNY Hello CORNYHello
          CORNYHello CORNYHello CORNYHello CORNY Hello CORNY Hello CORNY Hello
          CORNY Hello CORNY
        </span>
        <div className="flex-center ml-3 opacity-0 group-hover:opacity-100 transition-smooth">
          <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
          <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
            <FontAwesomeIcon icon={faCopy} />
          </div>
          <div className="flex-center w-7 h-7 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
