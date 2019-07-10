import React from 'react'

const CharacterName = ({ large, ...props }) => (
  <div
    {...props}
    className={`font-condensed font-bold mb-3 text-white text-center text-xl ${
      large ? 'text-2xl' : ''
    }`}
  />
)

export default CharacterName
