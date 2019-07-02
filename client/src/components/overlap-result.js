import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterImage from './character-image'
import Box from '../style/box'
import CharacterName from '../style/character-name'

const Container = styled.div`
  display: flex;
`

const Character = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  border-top: solid 1px #dfdfdf;
  margin-top: 20px;
  padding-top: 20px;
  /* margin: 20px auto; */
`

const OverlapResult = ({ first, second, characters, name, image }) => {
  const firstCharacter = characters[first.id]
  const secondCharacter = characters[second.id]

  return (
    <>
      <Character>
        <Box>
          {firstCharacter && <CharacterImage link={firstCharacter.link} />}
          <CharacterName>
            {`${firstCharacter && firstCharacter.name}`}{' '}
          </CharacterName>
        </Box>
      </Character>
      <Character>
        <Box>
          <img src={image} alt="" />
          <CharacterName>{name}</CharacterName>
        </Box>
      </Character>
      <Character>
        <Box>
          {secondCharacter && <CharacterImage link={secondCharacter.link} />}
          <CharacterName>{`${secondCharacter &&
            secondCharacter.name}`}</CharacterName>
        </Box>
      </Character>
    </>
  )
}

export default OverlapResult
