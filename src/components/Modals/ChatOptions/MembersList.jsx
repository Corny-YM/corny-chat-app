import React, { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MembersListItem from './MembersListItem';

const MembersList = ({ members }) => {
  const [memberSelected, setMemberSelected] = useState('');

  return (
    <ul className="mt-3 w-full flex flex-col gap-2 overflow-y-scroll h-[360px]">
      {members.map((mem) => (
        <MembersListItem
          key={mem.uid}
          memberInfo={mem}
          memberSelected={memberSelected}
          setMemberSelected={setMemberSelected}
        />
      ))}
    </ul>
  );
};

export default MembersList;
