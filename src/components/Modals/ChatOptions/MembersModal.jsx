import React, { useEffect, useState } from 'react';

import ModalsTemplate from '../ModalsTemplate';
import MembersList from './MembersList';

import {
  getUser,
  updateMembersGroup,
  updateUserRooms,
} from '../../../firebase/services';

const MembersModal = ({ roomId, members }) => {
  const [inputValueUserId, setInputValueUserId] = useState('');
  const [notification, setNotification] = useState('');
  const [membersRole, setMembersRole] = useState(members);
  const [role, setRole] = useState('All');

  useEffect(() => {
    handleShowRole('All');
    setMembersRole(members);
  }, [members]);

  const handleAddMember = async () => {
    const userId = inputValueUserId.trim();
    if (userId === '') {
      setInputValueUserId('');
      return;
    }
    const res = await getUser(userId);
    if (!res.size) {
      setInputValueUserId('');
      setNotification("This user doesn't exist!");
      return;
    }
    const isAdded = members.some((mem) => mem.uid == userId);
    if (isAdded) {
      setInputValueUserId('');
      setNotification('User has been added before!');
      return;
    }
    res.forEach((doc) =>
      members.push({
        displayName: doc.data().displayName,
        photoURL: doc.data().photoURL,
        uid: doc.data().uid,
        isAdmin: false,
      }),
    );
    await updateMembersGroup(roomId, members);
    res.forEach((doc) => updateUserRooms(userId, roomId));
    setInputValueUserId('');
    setNotification('');
  };

  const handleShowRole = (filter) => {
    if (filter == 'Admin') {
      const arr = members.filter((member) => member.isAdmin);
      setRole('Admin');
      setMembersRole(arr);
    } else if (filter == 'Member') {
      const arr = members.filter((member) => !member.isAdmin);
      setRole('Member');
      setMembersRole(arr);
    } else {
      setRole('All');
      setMembersRole(members);
    }
  };

  return (
    <ModalsTemplate>
      <div className="flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="w-full flex-center justify-around border-b border-gray-500 mb-3">
          <div
            onClick={() => handleShowRole('All')}
            className={`select-none min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer ${
              role == 'All' ? 'bg-inputLightMode dark:bg-hover' : ''
            }`}
          >
            All
          </div>
          <div
            onClick={() => handleShowRole('Admin')}
            className={`select-none min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer ${
              role == 'Admin' ? 'bg-inputLightMode dark:bg-hover' : ''
            }`}
          >
            Admin
          </div>
          <div
            onClick={() => handleShowRole('Member')}
            className={`select-none min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer ${
              role == 'Member' ? 'bg-inputLightMode dark:bg-hover' : ''
            }`}
          >
            Members
          </div>
        </div>

        <div className="flex-center w-full gap-2">
          <input
            value={inputValueUserId}
            onChange={(e) => setInputValueUserId(e.target.value)}
            placeholder="New member ID..."
            className="w-full input-styled-chat rounded-lg"
          />
          <div
            onClick={handleAddMember}
            className="modal-btn h-full bg-emerald-600"
          >
            Add
          </div>
        </div>

        <span className="flex font-bold text-rose-600 opacity-85">
          <i>{notification}</i>
        </span>

        {/* Members List */}
        <MembersList members={membersRole} />
      </div>
    </ModalsTemplate>
  );
};

export default MembersModal;
