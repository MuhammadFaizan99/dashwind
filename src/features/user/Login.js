import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: '',
    emailId: '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (loginObj.emailId.trim() === '') {
      return setErrorMessage('Email Id is required! (use any value)');
    }
    if (loginObj.password.trim() === '') {
      return setErrorMessage('Password is required! (use any value)');
    }

    setLoading(true);

    try {
      const response = await axios.post('https://dashwind-server.vercel.app/users/signIn', {
        Email: loginObj.emailId,
        Password: loginObj.password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        console.log(response.data); // Logging the response data

        localStorage.setItem('token', token);

        navigate('/login-verification', { state: { emailId: loginObj.emailId , verificationCode: ''} });
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('An error occurred while signing in.');
    }

    setLoading(false);
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage('');
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <InputText
                  type="email"
                  defaultValue={loginObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>
              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={"btn mt-2 w-full btn-primary" + (loading ? ' loading' : '')}
              >
                Login
              </button>
              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>
              <div className="text-center mt-4">
                Don't have an account yet?{' '}
                <Link to="/register">
                  <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
