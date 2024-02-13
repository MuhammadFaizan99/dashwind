import React, { useState } from 'react';
import TitleCard from "../../../components/Cards/TitleCard";
import { IoMdImages } from 'react-icons/io';
import { IoMdAddCircle } from 'react-icons/io';
import { FaTrash, FaCopy, FaPaperclip, FaUserTimes } from 'react-icons/fa';

function ProfileSettings() {
  const [profileImage, setProfileImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [referralLink, setReferralLink] = useState("https://example.com/referral");
  const [referralId, setReferralId] = useState("ABCD123");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Perform any necessary validations or processing
    // Set the selected image to the state
    setProfileImage(file);
  };

  const handleCopyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    // You can add a notification or any other UI feedback for successful copy
  };

  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      <div className="flex flex-row space-x-4 p-8">
        {/* Left Section - Profile Image */}
        <div
          className="flex-shrink-0 border rounded overflow-hidden relative"
          style={{ width: '180px', height: '250px', border: '2px solid grey' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <label htmlFor="uploadImage" className="cursor-pointer w-full h-full flex items-center justify-center">
            <input
              type="file"
              id="uploadImage"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            {profileImage && (
              <>
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {isHovered && (
                  <div
                    className="absolute top-0 right-0 p-2 cursor-pointer"
                    onClick={() => setProfileImage(null)}
                  >
                    <FaTrash className="text-white" />
                  </div>
                )}
              </>
            )}
            {!profileImage && (
              <div className="flex flex-col items-center">
                <IoMdImages className="text-4xl text-gray-500 mb-2" />
                <span className="text-gray-500">Upload Image</span>
              </div>
            )}
          </label>
        </div>

        {/* Center Section - First Name, Last Name, Email */}
        <div className="flex-grow flex flex-col justify-between ml-8">
          {/* Top Section - First Name, Last Name */}
          <div className="flex flex-row justify-between mb-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-semibold mb-1">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-semibold mb-1">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
          </div>

          {/* Center Section - Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-semibold mb-1">
              Email*
            </label>
            <input
              type="text"
              id="email"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
          </div>

          {/* Bottom Section - Email 2 */}
          <div className="flex flex-col">
            <label htmlFor="email2" className="text-sm font-semibold mb-1">
              Email 2
            </label>
            <input
              type="text"
              id="email2"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
          </div>
        </div>

        {/* Right Section - Notifications, Two Factor Auth, Referral Paid, Cell Phone, Work Phone, DOB, Company */}
        <div className="flex flex-col justify-between items-end">
          {/* Top Section - Notifications, Two Factor Auth, Referral Paid */}
          <div className="flex flex-row space-x-4 mb-4">
            <div className="flex flex-col items-center">
              <label className="flex mt-10 items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                Notifications
              </label>
            </div>
            <div className="flex flex-col items-center">
              <label className="flex mt-10 items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                Two Factor Auth
              </label>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex mt-10 flex-row items-center">
                <label className="text-sm font-semibold mr-2">Referral Paid:</label>
                <span className="text-sm font-semibold">$0.00</span>
              </div>
            </div>
          </div>

          {/* Center Section - Cell Phone, Work Phone */}
          <div className="flex flex-row space-x-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="cellPhone" className="text-sm font-semibold mb-1">
                Cell Phone*
              </label>
              <input
                type="text"
                id="cellPhone"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="workPhone" className="text-sm font-semibold mb-1">
                Work Phone
              </label>
              <input
                type="text"
                id="workPhone"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
          </div>

          {/* Bottom Section - DOB, Company */}
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <label htmlFor="dob" className="text-sm font-semibold mb-1">
                DOB
              </label>
              <input
                type="text"
                id="dob"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-semibold mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Address & Billing Info */}
      <div className="flex flex-row space-x-4 mt-8">
        {/* Left Section - Address & Billing Info */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Address & Billing Info</h2>

          {/* Top Section - Address*, City*, State */}
          <div className="flex flex-row mb-4">
            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-semibold mb-1">
                Address*
              </label>
              <input
                type="text"
                id="address"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="city" className="text-sm font-semibold mb-1">
                City*
              </label>
              <input
                type="text"
                id="city"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="state" className="text-sm font-semibold mb-1">
                State*
              </label>
              <input
                type="text"
                id="state"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
          </div>

          {/* Bottom Section - Address 2, Zip, Country* */}
          <div className="flex flex-row mb-4">
            <div className="flex flex-col">
              <label htmlFor="address2" className="text-sm font-semibold mb-1">
                Address 2
              </label>
              <input
                type="text"
                id="address2"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="zip" className="text-sm font-semibold mb-1">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="country" className="text-sm font-semibold mb-1">
                Country*
              </label>
              <input
                type="text"
                id="country"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Deals Notifications */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Deals Notifications:</h2>

          {/* Top Section - On Sale Now, Not On Sale Now, Below Cost */}
          <div className="flex flex-row mb-4 mt-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
              <span>On Sale Now</span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
              <span>Not On Sale Now</span>
            </div>
          </div>
          <div className="flex flex-row mb-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
              <span>Below Cost</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row  space-x-4 mt-8">
  {/* Left Section - Social Links */}
  <div className="flex flex-col " style={{width : "500px"}}>
    <h2 className="text-lg font-semibold mb-4">Social Links</h2>
    <button className="flex items-center space-x-2 border border-black-500 text-black-500 px-4 py-2 rounded hover:bg-black-100" style={{ width: "40%", margin: "12px auto" }}>
      <span>Add Social Link</span>
      <IoMdAddCircle className="text-2xl" />
    </button>
  </div>

        {/* Right Section - Referral */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Referral</h2>
          <p className="mb-4">
            We currently have a referral program and will Expire by: 01-21-2024.
            Provide the link below to a friend.
          </p>
          <p className="mb-4">
            We will transfer $60.00 to your balance
            when your referred user brings $5,000.00 in receipts.
          </p>
          <div className="flex flex-row mb-4">
            <div className="flex flex-col">
              <label htmlFor="referralLink" className="text-sm font-semibold mb-1">
                Referral Link
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="referralLink"
                  value={referralLink}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                  readOnly
                />
                <FaCopy
                  className="ml-2 cursor-pointer text-blue-500"
                  onClick={handleCopyReferralLink}
                />
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="referralId" className="text-sm font-semibold mb-1">
                Referral ID
              </label>
              <input
                type="text"
                id="referralId"
                value={referralId}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* KYC Approval Section */}
      <div className="flex flex-row space-x-4 mt-8">
        {/* Left Section - KYC Approval */}
        <div className="flex flex-col" style={{width : "450px"}}>
          <h2 className="text-lg font-semibold mb-4">KYC Approval</h2>
          {/* 1st Button - Front Side */}
          <div className="flex flex-col">
            <span>1. Front Side: </span>
            <button className="flex items-center space-x-2 border border-primary-500 text-primary-500 px-4 py-2 rounded hover:bg-primary-100">
              <span>Attachment</span>
              <FaPaperclip className="text-2xl" />
            </button>
          </div>
          {/* 2nd Button - Back Side */}
          <div className="flex flex-col mt-4">
            <span>2. Back Side: </span>
            <button className="flex items-center space-x-2 border border-primary-500 text-primary-500 px-4 py-2 rounded hover:bg-primary-100">
              <span>Attachment</span>
              <FaPaperclip className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Right Section - Deactivate Account */}
      <div className="flex flex-col " style={{width : "50%"}}>
        <h2 className="text-lg font-semibold mb-4" >Deactivate Account</h2>
        {/* Deactivate Account Button */}
        <button className="flex items-center space-x-2 border border-red-500 text-red px-4 py-1 rounded hover:bg-red-100" style={{  margin: "12px auto" }}>
          <FaUserTimes className="text-xl" /> {/* Add the icon here */}
          <span>Deactivate my account</span>
        </button>
      </div>
      </div>
      <div className="flex justify-end mt-4">
          <button
            type="button"
            className="btn btn-primary float-right"
          >
            Save Profile
          </button>
        </div>

    </TitleCard>
  );
}

export default ProfileSettings;