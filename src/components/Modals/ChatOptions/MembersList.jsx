import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import MembersListItem from './MembersListItem';

const MembersList = ({ members }) => {
  const [memberSelected, setMemberSelected] = useState('');
  const [isCurUserAdmin, setIsCurUserAdmin] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const roomId = location.pathname.slice(1);

  useEffect(() => {
    members.forEach((member) => {
      if (member?.uid == currentUser.uid && member?.isAdmin) {
        setIsCurUserAdmin(true);
      }
    });
  }, [members]);

  return (
    <ul className="mt-3 w-full flex flex-col gap-2 overflow-y-scroll h-[360px]">
      {members.map((mem) => (
        <MembersListItem
          key={mem.uid}
          currentUserId={currentUser.uid}
          isCurUserAdmin={isCurUserAdmin}
          roomId={roomId}
          memberInfo={mem}
          memberSelected={memberSelected}
          setMemberSelected={setMemberSelected}
        />
      ))}
    </ul>
  );
};

export default MembersList;
