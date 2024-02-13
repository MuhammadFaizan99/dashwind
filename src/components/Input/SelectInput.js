// SelectInput.js
import React from 'react';

const SelectInput = ({ labelTitle, options, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {labelTitle}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
