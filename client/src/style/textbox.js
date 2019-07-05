import React from 'react'

const TextBox = ({ style, placeholder, forwardedRef }) => (
  <input
    style={style}
    placeholder={placeholder}
    ref={forwardedRef}
    type="text"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
)

export default TextBox
