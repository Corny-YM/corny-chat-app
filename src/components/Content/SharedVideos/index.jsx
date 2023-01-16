import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const SharedVideos = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col my-3">
      <div className="flex items-center justify-between">
        <div
          onClick={handleClick}
          className="font-bold p-2 rounded-md cursor-pointer hover:bg-hover"
        >
          Shared Videos
        </div>
        <div className="flex-center p-2 rounded-md cursor-pointer hover:bg-hover">
          See all
        </div>
      </div>
      <Collapse isOpened={show} checkTimeout={0}>
        <div className="flex justify-evenly flex-wrap m-2">
          <div className="relative flex-center mb-2 px-2">
            <video
              className="video-shared"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer">
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="relative flex-center mb-2 px-2">
            <video
              className="video-shared"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer">
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
          <div className="relative flex-center mb-2 px-2">
            <video
              className="video-shared"
              src="https://firebasestorage.googleapis.com/v0/b/messenger-cf907.appspot.com/o/videos%2F313254144_855351012271789_8452105458587557840_n.mp4?alt=media&token=dd3e3360-dd7b-42e5-b471-209b607c81e5"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white text-5xl flex-center rounded-xl cursor-pointer">
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SharedVideos;
