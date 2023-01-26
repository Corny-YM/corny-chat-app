import React, { useContext } from 'react';

import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { storage } from '../../../../firebase/config';
import {
  addNewMessageFileMedia,
  updateLastMessage,
  updateLastTimeOnline,
} from '../../../../firebase/services';

import { AppContext } from '../../../../context/AppProvider';
import { AuthContext } from '../../../../context/AuthContext';

const Img = ({ roomId }) => {
  const { currentUser } = useContext(AuthContext);
  const { topicTheme } = useContext(AppContext);

  const handleUpload = (file) => {
    if (!file) {
      console.log('cancel');
      return;
    }

    const refStorage = ref(storage, `/imgs/${file.name}`);
    const uploadTask = uploadBytesResumable(refStorage, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => snapshot,
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          // roomId, senderId, url, fileName
          await addNewMessageFileMedia(
            roomId,
            currentUser?.uid,
            url,
            file.name,
          );

          // roomId, uid, content
          await updateLastMessage(roomId, currentUser?.uid, 'Sent a image');
          // roomId
          await updateLastTimeOnline(roomId);
        });
      },
    );
  };

  return (
    <label
      className="flex-center w-7 h-7 p-4 rounded-full hover:bg-hoverLightMode dark:hover:bg-hover cursor-pointer"
      htmlFor="fileImg"
    >
      <input
        onChange={(e) => handleUpload(e.target.files[0])}
        type="file"
        accept="image/*"
        id="fileImg"
        className="hidden"
      />
      <div className="flex-center">
        <FontAwesomeIcon
          style={{ color: topicTheme }}
          className="text-xl"
          icon={faImage}
        />
      </div>
    </label>
  );
};

export default Img;
