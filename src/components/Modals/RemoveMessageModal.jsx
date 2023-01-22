import React from 'react';

import ModalsTemplate from '../ModalsTemplate';

const RemoveMessageModal = () => {
  return (
    <ModalsTemplate>
      <div className="w-full max-w-[300px] md:max-w-[380px] flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="pb-2 flex-center font-bold text-xl md:text-2xl">
          <span className="text-center">
            Do you want to remove this message?
          </span>
        </div>
        <div className="flex-center justify-end w-full mt-8">
          <div className="w-full modal-btn bg-rose-600">Remove</div>
        </div>
      </div>
    </ModalsTemplate>
  );
};

export default RemoveMessageModal;
