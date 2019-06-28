import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterImage from './character-image'

const Container = styled.div`
  display: flex;
`

const Character = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`

const OverlapResult = ({ first, second, characters, name, image }) => {
  const firstCharacter = characters[first.id]
  const secondCharacter = characters[second.id]

  return (
    <>
      <Character>
        {`${firstCharacter && firstCharacter.name}`}{' '}
        {firstCharacter && firstCharacter.link && (
          <CharacterImage link={firstCharacter.link} />
        )}
      </Character>
      <Character>
        {name}
        <img src={image} alt="" />
      </Character>
      <Character>
        {`${secondCharacter && secondCharacter.name}`}
        {secondCharacter && secondCharacter.link && (
          <CharacterImage link={secondCharacter.link} />
        )}
      </Character>
    </>
  )
}

export default OverlapResult
