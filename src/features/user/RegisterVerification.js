import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import axios from 'axios'; // Import axios for making HTTP requests

function RegisterVerification() {
  const INITIAL_USER_OBJ = {
    emailId: '',
    verificationCode: '',
  };

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [linkSent, setLinkSent] = useState(false);
  const [userObj, setUserObj] = useState({
    ...INITIAL_USER_OBJ,
    emailId: location?.state?.emailId || '',
    verificationCode: location?.state?.verificationCode || '',
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (userObj.emailId.trim() === '') return setErrorMessage('Email Id is required! (use any value)');
    if (userObj.verificationCode.trim() === '') return setErrorMessage('Verification Code is required! (use any value)');

    setLoading(true);

    try {
      // Make an HTTP POST request to the "verifySignUp" endpoint
      const response = await axios.post('https://dashwind-server.vercel.app/users/verifySignUp', {
        Email: userObj.emailId,
        verificationCode: userObj.verificationCode,
      });

      // Check the response from the server
      if (response.status === 200) {
        // Verification successful, update the state or perform any necessary actions
        setLinkSent(true);
        // You can also update the user's "isVerified" status in the state if needed
      } else {
        // Handle other response statuses or error cases
        setErrorMessage('Verification failed. Please check your verification code.');
      }
    } catch (error) {
      // Handle any network errors or other exceptions
      console.error('Error verifying user:', error);
      setErrorMessage('An error occurred while verifying the user.');
    }

    setLoading(false);
  }

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage('');
    setUserObj({ ...userObj, [updateType]: value });
  }

  useEffect(() => {
    // If you want to update the URL with the emailId and verificationCode as they change,
    // you can use the following code. However, this is optional.
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('emailId', userObj.emailId);
    searchParams.set('verificationCode', userObj.verificationCode);
    window.history.replaceState({}, '', `${location.pathname}?${searchParams.toString()}`);
  }, [location, userObj.emailId, userObj.verificationCode]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className=''>
            <LandingIntro />
          </div>
          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Email Verification</h2>

            {linkSent &&
              <>
                {/* Display a success message when the verification is successful */}
                <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                <p className='my-4 text-xl font-bold text-center'>Verification Successful</p>
                <p className='mt-4 mb-8 font-semibold text-center'>You can now log in using your email.</p>
                <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>
              </>
            }

            {!linkSent &&
              <>
                <p className='my-8 font-semibold text-center'>We have sent a verification code to your email.</p>
                <form onSubmit={(e) => submitForm(e)}>
                  <div className="mb-4">
                    <InputText
                      type="emailId"
                      defaultValue={userObj.emailId}
                      updateType="emailId"
                      containerStyle="mt-4"
                      labelTitle="Email Id"
                      updateFormValue={updateFormValue}
                      disabled // Prevent editing of email
                    />
                    <InputText
                      type="text"
                      defaultValue={userObj.verificationCode}
                      updateType="verificationCode"
                      containerStyle="mt-4"
                      labelTitle="Verification Code"
                      updateFormValue={updateFormValue}
                    />
                  </div>
                  <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                  <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Submit Code</button>
                  <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</button></Link></div>
                </form>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterVerification;
