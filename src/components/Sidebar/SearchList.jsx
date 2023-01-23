import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment/moment';

import {
  createNewRoom,
  isCreatedRoomFriend,
  updateUserRooms,
} from '../../firebase/services';

import { AuthContext } from '../../context/AuthContext';
import { AppContext } from '../../context/AppProvider';

const SearchList = ({ isSearching, setUser, setUsername, users }) => {
  const { currentUser } = useContext(AuthContext);
  const { setIsSearching } = useContext(AppContext);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers([
      {
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        uid: currentUser.uid,
        isAdmin: true,
      },
    ]);
  }, []);

  const handleSelect = async (user) => {
    try {
      const arrMembers = members;
      arrMembers.push({
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
        isAdmin: true,
      });
      const res = await isCreatedRoomFriend(arrMembers); // res = docs
      // created
      if (res.size == 1) {
        console.log('created');
      } else {
        // create new for collection 'rooms'
        const res = await createNewRoom(
          user.displayName,
          arrMembers,
          'friend',
          user.photoURL,
        );

        // Update rooms for collection 'users'
        arrMembers.forEach(async (member) => {
          await updateUserRooms(member.uid, res.id);
        });
      }
    } catch (err) {
      console.log(err);
    }

    setUser([]);
    setUsername('');
    setIsSearching(false);
  };

  return (
    <div
      className={`${
        isSearching ? 'flex' : 'hidden'
      } h-full w-full absolute inset-0 flex-col flex-1 mt-3 overflow-y-scroll bg-lightMode dark:bg-dark`}
    >
      {users.map((user) => (
        <div
          key={user.uid}
          className="flex-center justify-start relative pt-2 group"
        >
          <div
            onClick={() => handleSelect(user)}
            className="w-full flex-center justify-start rounded-2xl cursor-pointer p-2 hover:bg-hoverLightMode dark:hover:bg-hover"
          >
            <div className="w-14 h-14 flex-center rounded-full overflow-hidden mr-3">
              <img
                className="w-full h-full object-cover"
                src={user?.photoURL}
              />
            </div>
            <div className="flex flex-col flex-1">
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {user?.displayName}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
