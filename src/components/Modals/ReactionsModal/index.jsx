import React, { useEffect, useState } from 'react';
import ModalsTemplate from '../ModalsTemplate';

import { fbIcons } from '../../../constants/fbIcons';

import NoAvatar from '../../../assets/imgs/NoAvatar.png';

const ReactionsModal = ({ messageId, members, reactions }) => {
  const [active, setActive] = useState(0);
  //   console.log(messageId, members, reactions);
  const [listUserReactions, setListUserReactions] = useState(reactions);

  useEffect(() => {}, [messageId, reactions]);

  const senderReactionInfo = (uid) => {
    return members?.find((mem) => mem.uid === uid);
  };
  const senderIconInfo = (iconId) => {
    return fbIcons.find((fbIcon) => fbIcon.id === iconId);
  };

  const handleFilterIcon = (fbIconId) => {
    if (!fbIconId) {
      setListUserReactions(reactions);
      return;
    }
    // console.log(reactions.filter((rct) => rct?.iconId === fbIconId));
    const arrFilterReactions = reactions.filter(
      (rct) => rct?.iconId === fbIconId,
    );
    setListUserReactions(arrFilterReactions);
  };

  return (
    <ModalsTemplate>
      <div className="flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-3">
        {/* Header */}
        <div className="h-8 md:h-14 flex-center">
          <span className="font-bold text-xl md:text-2xl select-none">
            Feelings about messages
          </span>
        </div>

        {/* Filter show reaction */}
        <div className="flex-center flex-wrap min-w-[300px] h-14 mb-2 gap-1">
          <div
            onClick={() => {
              handleFilterIcon();
              setActive(0);
            }}
            className={`${
              active == 0 && 'bg-hoverLightMode dark:bg-home-search'
            } font-bold select-none h-full flex-1 flex-center md:px-4 rounded-md gap-1 cursor-pointer transition-all hover:bg-hoverLightMode dark:hover:bg-home-search`}
          >
            All
          </div>
          {fbIcons.map((fbIcon) => (
            <div
              key={fbIcon.id}
              onClick={() => {
                handleFilterIcon(fbIcon.id);
                setActive(fbIcon.id);
              }}
              className={`${
                active == fbIcon.id && 'bg-hoverLightMode dark:bg-home-search'
              } h-full flex-1 flex-center md:px-4 rounded-md gap-1 cursor-pointer transition-all hover:bg-hoverLightMode dark:hover:bg-home-search`}
            >
              <img className="w-5 h-5 object-cover" src={fbIcon.src} />
            </div>
          ))}
        </div>

        {/* List reactions user */}
        <div className="w-full flex flex-col h-48 overflow-y-scroll">
          {listUserReactions.map((rct) => (
            <div key={rct?.userId} className="flex-center w-full px-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={senderReactionInfo(rct?.userId)?.photoURL || NoAvatar}
                />
              </div>

              <div className="max-w-xs h-full flex justify-center flex-col flex-1 ml-2 break-all">
                <span className="font-bold">
                  {senderReactionInfo(rct?.userId)?.displayName || 'Ruined'}
                </span>
              </div>

              <div className="w-7 h-7 flex-center overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={senderIconInfo(rct?.iconId)?.src}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalsTemplate>
  );
};

export default ReactionsModal;
