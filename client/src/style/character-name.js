import React from 'react'

const CharacterName = ({ large, ...props }) => (
  <div
    {...props}
    className={`font-bold my-1 uppercase text-white text-center tracking-wide leading-tight ${
      large ? 'text-2xl' : ''
    }`}
  />
)

export default CharacterName
