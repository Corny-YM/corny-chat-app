import React, { useRef } from 'react';

import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase/config';
import { updateGroupAvatar } from '../../../firebase/services';

const AvatarGroup = ({ roomId }) => {
  const handleChange = (file) => {
    if (!file) return;

    const refStorage = ref(storage, `/avatar/${file.name}`);
    const uploadTask = uploadBytesResumable(refStorage, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => snapshot,
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          // roomId, url
          await updateGroupAvatar(roomId, url);
        });
      },
    );
  };
  return (
    <div className="flex flex-col w-12 h-12 mr-2">
      <input
        onChange={(e) => handleChange(e.target.files[0])}
        type="file"
        accept="image/*"
        id="avatarGroup"
        className="hidden"
      />
      <label
        htmlFor="avatarGroup"
        className="h-full flex-center p-2 mb-2 cursor-pointer rounded-full hover:bg-hoverLightMode dark:hover:bg-hover"
      >
        <FontAwesomeIcon icon={faImage} />
      </label>
    </div>
  );
};

export default AvatarGroup;
