import React from 'react'
import CharacterImage from './character-image'
import CharacterName from '../style/character-name'

const Character = ({ name, link }) => (
  <div>
    <CharacterImage link={link} />
    <CharacterName>
      {name && !link && name}
      {name && link && <a href={link}>{name}</a>}
    </CharacterName>
  </div>
)

export default Character
