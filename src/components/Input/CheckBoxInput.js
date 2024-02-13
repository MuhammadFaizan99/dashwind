// CheckBoxInput.js
import React from 'react';

const CheckBoxInput = ({ labelTitle, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={checked}
        onChange={onChange}
      />
      <label className="ml-2 text-sm text-gray-700">{labelTitle}</label>
    </div>
  );
};

export default CheckBoxInput;
