import React from 'react'

const Button = ({ disabled, loading, ...props }) => (
  <button
    disabled={disabled}
    type="button"
    {...props}
    className={`w-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-1 px-4 border-b-4 border-teal-600 hover:border-teal-700 rounded${
      disabled ? ' opacity-50 cursor-not-allowed' : ''
    } ${loading ? 'inline-loader' : ''}`}
    style={{
      fontSize: 16
    }}
  />
)

export default Button
