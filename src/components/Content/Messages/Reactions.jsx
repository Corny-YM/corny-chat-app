import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { showModal } from '../../../reducers/actions';
import { fbIcons } from '../../../constants/fbIcons';

const Reactions = ({ messageId, reactions, handleSelectedMessage }) => {
  const [srcIcons, setSrcIcons] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const tmpArr = [];
    reactions.reverse().forEach((rct) => {
      fbIcons.forEach((fbIcon) => {
        if (rct?.iconId === fbIcon.id) {
          tmpArr.push(fbIcon.src);
        }
      });
    });
    setSrcIcons([...new Set(tmpArr)]);
  }, [reactions]);

  const handleShowReactionsModal = () => {
    // messageId, reactions
    handleSelectedMessage(messageId, reactions);
    dispatch(showModal('user-reactions'));
  };

  return (
    <div
      onClick={handleShowReactionsModal}
      className="flex-center px-1 py-[2px] absolute right-0 bottom-0 translate-y-[50%] bg-lightMode dark:bg-dark rounded-lg cursor-pointer"
    >
      {srcIcons.map((src, index) => {
        if (index < 2) {
          return (
            <div
              key={index}
              className="w-3 h-3 flex-center rounded-lg mr-[2px]"
            >
              <img className="w-full h-full object-cover" src={src} />
            </div>
          );
        }
      })}
      {reactions?.length > 0 && (
        <span className="text-[14px]">{reactions?.length}</span>
      )}
    </div>
  );
};

export default Reactions;
