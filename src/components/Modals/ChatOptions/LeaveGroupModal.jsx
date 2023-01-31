import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import {
  removeCurrentMember,
  removeUserRoomId,
} from '../../../firebase/services';
import { closeModal } from '../../../reducers/actions';
import ModalsTemplate from '../ModalsTemplate';

const LeaveGroupModal = ({ roomId, isCurrentUserAdmin }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLeaveGroup = async () => {
    // Remove current user out of the group
    // roomId, currentUserInfo
    await removeCurrentMember(roomId, {
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      isAdmin: isCurrentUserAdmin,
    });

    // Remove roomId out of user data
    // uid, roomId
    await removeUserRoomId(currentUser.uid, roomId);
    dispatch(closeModal());
    navigate('/');
  };

  return (
    <ModalsTemplate>
      <div className="w-full max-w-[300px] md:max-w-[380px] flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="pb-2 flex-center font-bold text-xl md:text-2xl">
          <span className="text-center">
            DO YOU REALLY WANT TO LEAVE <br />
            THIS GROUP!
          </span>
        </div>
        <div className="flex-center justify-end w-full mt-8">
          <div
            onClick={handleLeaveGroup}
            className="w-full modal-btn bg-rose-600"
          >
            Leave
          </div>
        </div>
      </div>
    </ModalsTemplate>
  );
};

export default LeaveGroupModal;
