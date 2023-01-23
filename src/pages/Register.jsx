import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, db, storage } from '../firebase/config';

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { doc, setDoc } from 'firebase/firestore';
import { createNewUser } from '../firebase/services';

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, `/avatar/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => snapshot,
        (error) => {
          setError(true);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Update Authentication
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });

            // Add Document account to collection 'users'
            await createNewUser(displayName, email, downloadURL, res.user.uid);

            navigate('/');
          });
        },
      );
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="w-screen h-screen flex-center flex-wrap bg-dark">
      <div
        className="flex-center flex-col gap-2 rounded-xl 
        bg-main-color px-10 py-3 sm:px-14 sm:py-5"
      >
        <span className="sm:text-[32px] font-bold font-rubikWet text-2xl">
          🌽 CORNY CHAT 🌽
        </span>
        <span className="sm:text-[20px] text-[16px] font-rubikDirt">
          Register
        </span>
        <form
          onSubmit={handleSubmit}
          className="w-full flex-center flex-col gap-[10px]"
        >
          <input
            required
            className="input-styled"
            type="text"
            placeholder="Display name"
          />
          <input
            required
            className="input-styled"
            type="email"
            placeholder="Email address"
          />
          <input
            required
            className="input-styled"
            type="password"
            placeholder="Password"
          />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label
            className="input-styled flex-center justify-start gap-[10px] 
            cursor-pointer border-none font-[14px] p-[15px]"
            htmlFor="file"
          >
            <FontAwesomeIcon
              icon={faImage}
              className="icon-add-file text-2xl"
            />
            <span className="">Add an avatar</span>
          </label>
          <button className="w-full button-styled">Sign in</button>
        </form>
        {error && (
          <div className="font-bold text-xl">Something went wrong!</div>
        )}
        <p>
          You do have an account?{' '}
          <Link to="/login" className="font-bold text-bg-messages">
            <u>Login</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
