import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
        <form className="w-full flex-center flex-col gap-[10px]">
          <input
            className="input-styled"
            type="text"
            placeholder="Display name"
          />
          <input
            className="input-styled"
            type="email"
            placeholder="Email address"
          />
          <input
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
          <button className="w-full button-styled">Log in</button>
        </form>
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
