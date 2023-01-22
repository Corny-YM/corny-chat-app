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
import Message from './Message';

const Messages = () => {
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
    <>
      <div className="flex-1 flex flex-col overflow-overlay">
        {/* Item message */}
        {/* Ower */}
        <Message />

        <div className="w-full flex mb-1 sm:px-3 gap-2 group">
          <img
            className="w-8 h-8 rounded-full"
            src="https://i.pravatar.cc/150?img=3"
          />
          <div className="flex items-center overflow-hidden">
            <span
              className="max-w-[60%] md:max-w-[75%] px-3 py-2 
            bg-inputLightMode dark:bg-messages rounded-[18px]"
            >
              Hello CORNY Hello CORNY Hello CORNY Hello CORNY Hello CORNYHello
              CORNYHello CORNYHello CORNYHello CORNY Hello CORNY Hello CORNY
              Hello CORNY Hello CORNY
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

        {/* ======================IMG, GIF & VID=============================== */}
        <div className="w-full flex mb-1 sm:px-3 gap-2 group owner">
          <div className="flex items-center overflow-hidden owner">
            <img
              onClick={() => handleShow('https://i.pravatar.cc/150?img=3')}
              className="rounded-xl max-w-[50%] message-img"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/images%2F000-333e9cr-5613.jpg?alt=media&token=f6cf2517-f2fc-41b2-92e0-935e1445195e"
            />
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
        <div className="w-full flex mb-1 sm:px-3 gap-2 group">
          <img
            className="w-8 h-8 rounded-full"
            src="https://i.pravatar.cc/150?img=3"
          />
          <div className="flex items-center overflow-hidden">
            <img
              onClick={() =>
                handleShow(
                  'https://media1.giphy.com/media/IQxvdHgfat9ENGJbEm/giphy.gif?cid=1838e39cyjws57q28pvyfyo0s424nbdhiqb2t54i3j9txfva&rid=giphy.gif&ct=g',
                )
              }
              className="rounded-xl max-w-[50%] message-img"
              src="https://media1.giphy.com/media/IQxvdHgfat9ENGJbEm/giphy.gif?cid=1838e39cyjws57q28pvyfyo0s424nbdhiqb2t54i3j9txfva&rid=giphy.gif&ct=g"
            />
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
        <div className="w-full flex mb-1 sm:px-3 gap-2 group">
          <img
            className="w-8 h-8 rounded-full"
            src="https://i.pravatar.cc/150?img=3"
          />
          <div className="flex items-center overflow-hidden">
            <video
              className="message-vid"
              controls
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
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
        {/* ===================================================== */}

        <div className="w-full flex mb-1 sm:px-3 gap-2 group owner">
          <div className="flex items-center overflow-hidden owner">
            <video
              className="message-vid"
              controls
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
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
      </div>
      {modalName == 'img-shared' && <Img src={src} />}
      {/* {modalName == 'delete-message' && <Img src={src} />} */}
    </>
  );
};

export default Messages;
