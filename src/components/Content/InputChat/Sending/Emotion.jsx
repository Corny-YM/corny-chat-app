import React, { useState } from 'react';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';

init({ data });

const Emotion = ({ emoji }) => {
  // console.log(emoji);
  // console.log(data);
  return (
    <div className="p-2 mr-2 flex-center rounded-full cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover">
      <em-emoji
        className="bg-red-50"
        id={emoji?.id || '+1'}
        skin={emoji?.skin || 1}
        size="1.25em"
        fallback="🌽"
      ></em-emoji>
    </div>
  );
};

export default Emotion;
