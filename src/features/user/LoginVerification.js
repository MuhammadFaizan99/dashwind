import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';

function LoginVerification() {
  const INITIAL_VERIFICATION_OBJ = {
    emailId: '',
    verificationCode: '',
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [verificationObj, setVerificationObj] = useState(INITIAL_VERIFICATION_OBJ);

  useEffect(() => {
    if (location.state && location.state.emailId) {
      setVerificationObj(prevState => ({
        ...prevState,
        emailId: location.state.emailId
      }));
    }
  }, [location.state]);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!verificationObj.emailId.trim()) {
      return setErrorMessage('Email Id is required!');
    }
    if (!verificationObj.verificationCode.trim()) {
      return setErrorMessage('Verification Code is required!');
    }

    setLoading(true);

    try {
      const response = await axios.post('https://dashwind-server.vercel.app/users/verifySignIn', {
        Email: verificationObj.emailId,
        verificationCode: verificationObj.verificationCode,
      });

      if (response.status === 200) {
        navigate('/app/welcome');
      } else {
        setErrorMessage('Verification failed. Please check your verification code.');
      }
    } catch (error) {
      console.error('Error verifying login:', error);
      setErrorMessage('An error occurred while verifying the login.');
    }

    setLoading(false);
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage('');
    setVerificationObj({ ...verificationObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login Verification</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <InputText
                  type="email"
                  defaultValue={verificationObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                  disabled // Email field is pre-filled and disabled
                />
                <InputText
                  type="text"
                  defaultValue={verificationObj.verificationCode}
                  updateType="verificationCode"
                  containerStyle="mt-4"
                  labelTitle="Verification Code"
                  updateFormValue={updateFormValue}
                />
              </div>
              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={"btn mt-2 w-full btn-primary" + (loading ? ' loading' : '')}
              >
                Verify Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginVerification;