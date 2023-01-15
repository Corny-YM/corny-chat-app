import React from 'react';

import { GifIcon } from '../../../Icons';

const Gif = () => {
  return (
    <div className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hover">
      <input
        type="file"
        accept=".pdf, text/plain, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        id="file"
        className="hidden"
      />
      <label className="flex-center w-7 h-7 p-1 cursor-pointer" htmlFor="file">
        <GifIcon className="text-xl text-main-color" />
      </label>
    </div>
  );
};

export default Gif;
