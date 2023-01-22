import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmitEmailAndPassword = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="w-screen h-screen flex-center flex-wrap bg-dark">
      <div
        className="flex-center flex-col gap-2 rounded-xl bg-main-color px-10 py-3
      sm:px-14 sm:py-5"
      >
        <span className="sm:text-[40px] font-bold font-rubikWet text-2xl">
          🌽 CORNY CHAT 🌽
        </span>
        <span className="sm:text-[20px] text-[16px] font-rubikDirt">Login</span>
        <form
          onSubmit={handleSubmitEmailAndPassword}
          className="w-full flex-center flex-col gap-[10px]"
        >
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
          <button type="submit" className="w-full button-styled sm:mt-8 mt-4">
            Log in
          </button>
        </form>
        <p>--------------- or Login with ---------------</p>
        <div className="w-full flex-center justify-around">
          <div
            className="flex-center gap-2 cursor-pointer 
            rounded-md hover:bg-dark/30 p-2"
          >
            <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
            <span className="text-[16px]">Facebook</span>
          </div>
          <div
            className="flex-center gap-2 cursor-pointer 
            rounded-md hover:bg-dark/30 p-2"
          >
            <FontAwesomeIcon className="text-2xl" icon={faGoogle} />
            <span className="text-[16px]">Google</span>
          </div>
        </div>
        <p>
          You don't have an account?{' '}
          <Link to="/register" className="font-bold text-bg-messages">
            <u>Register</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
