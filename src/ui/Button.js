import React from 'react';

export function Button({ type, children }) {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:text-black hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full border-x-black border-y-black "
    >
      {children}
    </button>
  );
}
