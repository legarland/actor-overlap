import React from 'react'

const Button = props => (
  <button
    type="button"
    {...props}
    className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-1 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded${
      props.disabled ? ' opacity-50 cursor-not-allowed' : ''
    }`}
  />
)

export default Button
