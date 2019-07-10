import React from 'react'
import CharacterImage from './character-image'
import CharacterName from '../style/character-name'

const Character = ({ name, link }) => (
  <div className="flex flex-col flex-1">
    <CharacterName
      style={{
        flex: 2,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }}
    >
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
    <CharacterImage
      link={link}
      style={{
        flex: 7
      }}
    />
  </div>
)

export default Character
