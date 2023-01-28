import React, { useContext } from 'react';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { storage } from '../../../firebase/config';
import {
  addNewMessageFileMedia,
  updateLastMessage,
  updateLastTimeOnline,
} from '../../../firebase/services';

import { AuthContext } from '../../../context/AuthContext';
import Img from './Upload/Img';
import Vid from './Upload/Vid';
import File from './Upload/File';

const Actions = ({ roomId }) => {
  const { currentUser } = useContext(AuthContext);

  const handleUpload = (file, pathFolder, type, content) => {
    if (!file) {
      console.log('cancel');
      return;
    }

    const refStorage = ref(storage, `/${pathFolder}/${file.name}`);
    const uploadTask = uploadBytesResumable(refStorage, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => snapshot,
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          // roomId, senderId, url, type, fileName
          await addNewMessageFileMedia(
            roomId,
            currentUser?.uid,
            url,
            type,
            file.name,
          );

          // roomId, uid, content
          await updateLastMessage(roomId, currentUser?.uid, content);
          // roomId
          await updateLastTimeOnline(roomId);
        });
      },
    );
  };

  return (
    <div className="flex items-center gap-1">
      {/* upload img */}
      <Img handleUpload={handleUpload} />

      {/* upload vid */}
      <Vid handleUpload={handleUpload} />

      {/* upload file */}
      <File handleUpload={handleUpload} />
    </div>
  );
};

export default Actions;
