import React from 'react';
import Gif from './Upload/Gif';
import Img from './Upload/Img';
import Vid from './Upload/Vid';

const Actions = ({ roomId }) => {
  return (
    <div className="flex items-center gap-1">
      {/* upload img */}
      <Img roomId={roomId} />

      {/* upload vid */}
      <Vid />

      {/* upload gif */}
      <Gif />
    </div>
  );
};

export default Actions;
