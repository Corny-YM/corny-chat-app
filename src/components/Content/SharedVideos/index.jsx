import React, { useState } from 'react';
import SVcontent from './SVcontent';

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
          className="font-bold p-2 rounded-md cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
        >
          Shared Videos
        </div>
        <div className="flex-center p-2 rounded-md cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover">
          See all
        </div>
      </div>

      <SVcontent show={show} />
    </div>
  );
};

export default SharedVideos;
