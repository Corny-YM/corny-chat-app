import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../../../../context/AppProvider';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

const File = ({ handleUpload }) => {
  const { topicTheme } = useContext(AppContext);

  return (
    <label
      className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hoverLightMode dark:hover:bg-hover cursor-pointer"
      htmlFor="file"
    >
      <input
        onChange={(e) =>
          handleUpload(e.target.files[0], 'files', 'file', 'Sent a file')
        }
        type="file"
        accept=".pdf, text/plain, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        id="file"
        className="hidden"
      />
      <div className="flex-center">
        <FontAwesomeIcon
          style={{ color: topicTheme }}
          className="text-[16px]"
          icon={faFileCirclePlus}
        />
      </div>
    </label>
  );
};

export default File;
