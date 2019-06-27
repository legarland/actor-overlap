import React from 'react'
import styled from 'styled-components'

const OverlapResult = ({ first, second, characters, name, image }) => {
  console.log(characters)
  console.log(first)
  return (
    <div>
      {name}
      <img src={image} />
      {`${first.title} ${characters[first.id] &&
        characters[first.id].name}`} -{' '}
      {`${second.title} ${characters[second.id] && characters[second.id].name}`}
    </div>
  )
}

export default OverlapResult
