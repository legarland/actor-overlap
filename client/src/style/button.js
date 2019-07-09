import React from 'react'

const Button = ({ disabled, ...props }) => (
  <button
    type="button"
    {...props}
    className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-1 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded${
      disabled ? ' opacity-50 cursor-not-allowed' : ''
    }`}
    style={{
      fontSize: 16
    }}
  />
)

export default Button
