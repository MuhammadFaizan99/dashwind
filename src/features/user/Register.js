import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';

function Register() {
  const INITIAL_REGISTER_OBJ = {
    name: "",
    password: "",
    emailId: ""
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (registerObj.name.trim() === "") return setErrorMessage("Name is required! (use any value)");
    if (registerObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)");
    if (registerObj.password.trim() === "") return setErrorMessage("Password is required! (use any value)");
    
    setLoading(true);

    try {
      // Make a POST request to the /signUp endpoint
      const response = await axios.post('https://dashwind-server.vercel.app/users/signUp', {
        UserName: registerObj.name,
        Email: registerObj.emailId,
        Password: registerObj.password,
      });

      // Assuming the server responds with a token and message
      const { message } = response.data;

      // Display a success toast message
      toast.success(message);


      setLoading(false);

      // Navigate to the email verification page using React Router
      navigate('/register-verification', { state: { emailId: registerObj.emailId, verificationCode: '' } });
    } catch (error) {
      setLoading(false);

      // Handle errors, for example, display an error message
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while processing your request.");
      }
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className=''>
            <LandingIntro />
          </div>
          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText defaultValue={registerObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />
                <InputText defaultValue={registerObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />
                <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />
              </div>
              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>
              <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Add ToastContainer here */}
    </div>
  );
}

export default Register;