import React from 'react';
import MembersList from './MembersList';

import ModalsTemplate from '../ModalsTemplate';

const MembersModal = () => {
  return (
    <ModalsTemplate>
      <div className="flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="w-full flex-center justify-around border-b border-gray-500 mb-3">
          <div className="min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer bg-inputLightMode dark:bg-hover">
            All
          </div>
          <div className="min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer">
            Admin
          </div>
          <div className="min-w-[120px] flex-1 flex-center py-2 rounded-tr-lg rounded-tl-lg cursor-pointer">
            Members
          </div>
        </div>

        <div className="flex-center w-full gap-2">
          <input
            placeholder="New member ID..."
            className="w-full input-styled-chat rounded-lg"
          />
          <div className="modal-btn h-full bg-emerald-600">Add</div>
        </div>

        {/* Members List */}
        <MembersList />
      </div>
    </ModalsTemplate>
  );
};

export default MembersModal;
