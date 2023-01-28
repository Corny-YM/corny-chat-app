import React, { useEffect, useState } from 'react';
import data from '@emoji-mart/data';
import { init } from 'emoji-mart';

init({ data });

const Emotion = ({ onSendMessage, emoji }) => {
  const [emo, setEmo] = useState('');

  useEffect(() => {
    setEmo(data.emojis[`${emoji?.id}`]?.skins[emoji?.skin - 1].native);
  }, [emoji]);

  const handleClick = async () => {
    await onSendMessage(emo);
  };

  return (
    <div
      onClick={handleClick}
      className="p-2 mr-2 flex-center rounded-full cursor-pointer hover:bg-hoverLightMode dark:hover:bg-hover"
    >
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
