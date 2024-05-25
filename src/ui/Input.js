import React from 'react';

export function Input({ id,type, name,placeholder,value,onChange,required}) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      required={required}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      onChange={onChange}
      value= {value}
      name = {name}
    />
  );
}

