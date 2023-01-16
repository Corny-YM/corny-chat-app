import React, { useState } from 'react';

import { Collapse } from 'react-collapse';

import LeaveGroup from './LeaveGroup';
import GroupName from './GroupName';
import AvatarGroup from './AvatarGroup';
import Members from './Members';
import Topic from './Topic';
import Emoticon from './Emoticon';

const ChatOptions = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col my-3">
      <div className="flex items-center">
        <div
          onClick={() => setShow(!show)}
          className="font-bold p-2 rounded-md cursor-pointer hover:bg-hover"
        >
          Customize Options
        </div>
      </div>
      <Collapse isOpened={show} checkTimeout={0}>
        <div className="flex flex-wrap m-2">
          {/* Emoticon */}
          <Emoticon />

          {/* Topic color */}
          <Topic />

          {/* Members */}
          <Members />

          {/* AvatarGroup */}
          <AvatarGroup />

          {/* GroupName */}
          <GroupName />

          {/* LeaveGroup */}
          <LeaveGroup />
        </div>
      </Collapse>
    </div>
  );
};

export default ChatOptions;
