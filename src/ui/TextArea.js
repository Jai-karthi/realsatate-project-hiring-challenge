import React from 'react';

const TextArea = ({ id,value, onChange, placeholder ,rows,name}) => {
  return (
    <div className="flex flex-col items-start">
      
      <textarea
        id={id}
        className="w-60 h-40 p-2 text-base border border-l-gray-400 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 resize-both"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        name= {name}
        required
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
