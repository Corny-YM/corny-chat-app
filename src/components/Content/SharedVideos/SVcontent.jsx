import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'react-collapse';

import { showModalVidShared } from '../../../reducers/actions';
import Vid from '../../Modals/Shared/Vid';

const SVcontent = ({ show }) => {
  const { modalName } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (src) => {
    dispatch(
      showModalVidShared({
        modalName: 'vid-shared',
        src: src,
      }),
    );
  };

  return (
    <>
      <Collapse isOpened={show} checkTimeout={0}>
        <div className="flex justify-evenly flex-wrap m-2">
          <div className="relative flex-center mb-2 px-2">
            <video
              className="video-shared"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
            <div
              onClick={() =>
                handleClick(
                  'https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5',
                )
              }
              className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer"
            >
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="relative flex-center mb-2 px-2">
            <video
              className="video-shared"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
            <div
              onClick={() =>
                handleClick(
                  'https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5',
                )
              }
              className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer"
            >
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="relative flex-center mb-2 px-2">
            <video
              className="video-shared"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
            <div
              onClick={() =>
                handleClick(
                  'https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5',
                )
              }
              className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer"
            >
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
        </div>
      </Collapse>

      {modalName == 'vid-shared' && <Vid />}
    </>
  );
};

export default SVcontent;
