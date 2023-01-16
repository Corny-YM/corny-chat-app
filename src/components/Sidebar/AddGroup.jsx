import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AddGroup = () => {
  return (
    <div className="w-full h-14 flex-center bg-dark">
      <div className="flex-center p-2 rounded-xl cursor-pointer hover:bg-hover">
        <FontAwesomeIcon icon={faUsersRectangle} />
        <span className="pl-2 font-bold">Add a new group conversation</span>
      </div>
    </div>
  );
};

export default AddGroup;
