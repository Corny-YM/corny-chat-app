import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const SharedPhotos = () => {
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
          Shared Images
        </div>
        <div className="flex-center p-2 rounded-md cursor-pointer hover:bg-hover">
          See all
        </div>
      </div>
      <Collapse isOpened={show} checkTimeout={0}>
        <div className="flex justify-evenly flex-wrap m-2">
          <div className="flex-center mb-2 px-2">
            <img
              className="flex-center img-shared"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex-center mb-2 px-2">
            <img
              className="flex-center img-shared"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
          <div className="flex-center mb-2 px-2">
            <img
              className="flex-center img-shared"
              src="https://i.pravatar.cc/150?img=3"
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SharedPhotos;
