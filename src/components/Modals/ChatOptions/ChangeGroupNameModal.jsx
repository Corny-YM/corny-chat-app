import React, { useState } from 'react';

import ModalsTemplate from '../ModalsTemplate';

const ChangeGroupNameModal = () => {
  const [valueInput, setValueInput] = useState('CORNY');

  return (
    <ModalsTemplate>
      <div className="w-full max-w-[320px] md:max-w-[500px] flex-center flex-col bg-lightMode dark:bg-darkMode rounded-lg px-3 py-5">
        <div className="pb-2 flex-center font-bold text-2xl mb-3">
          Change Group Name
        </div>
        <input
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          type="text"
          className="input-styled-chat rounded-lg"
        />

        <div className="flex-center justify-end w-full mt-8">
          <div className="w-full modal-btn bg-emerald-600">Save</div>
        </div>
      </div>
    </ModalsTemplate>
  );
};

export default ChangeGroupNameModal;
