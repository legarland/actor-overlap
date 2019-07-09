import React from 'react'
import CharacterImage from './character-image'
import CharacterName from '../style/character-name'

const Character = ({ name, link }) => (
  <div>
    <CharacterImage link={link} />
    <CharacterName>
      {name && !link && name}
      {name && link && (
        <a
          href={`https://imdb.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      )}
    </CharacterName>
  </div>
)

export default Character
