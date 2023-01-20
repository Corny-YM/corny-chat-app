import React, { useState } from 'react';

import SFcontent from './SFcontent';

const SharedFiles = () => {
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
          Shared Files
        </div>
        <div className="flex-center p-2 rounded-md cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover">
          See all
        </div>
      </div>

      <SFcontent show={show} />
    </div>
  );
};

export default SharedFiles;
