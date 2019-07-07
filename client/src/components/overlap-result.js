import React from 'react'
import CharacterImage from './character-image'
import CharacterName from '../style/character-name'

const OverlapResult = ({ first, second, characters, name, image }) => {
  const firstCharacter = characters[first.id]
  const secondCharacter = characters[second.id]

  return (
    <div class="result-grid">
      <div className="flex items-end justify-center flex-column border-t-2 border-gray-400 mt-6 pt-6 relative char1">
        <div>
          <CharacterName>{first.title}</CharacterName>
          {firstCharacter && <CharacterImage link={firstCharacter.link} />}
          <CharacterName>
            {`${firstCharacter && firstCharacter.name}`}
          </CharacterName>
        </div>
        <svg
          className="fill-current text-indigo-500 rotate-1/2 absolute h-8 inset-y-arrow right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124.31 49.31"
        >
          <path d="M117.12 23.94a1.66 1.66 0 0 0-.35-.74c-2.64-1.49-5.27-3-8-4.38-8.29-4.14-16.61-8.22-24.93-12.3-2.15-1.06-4.35-2-6.5-3.07a3.55 3.55 0 0 1-1.37-1.26 1.62 1.62 0 0 1 0-1.35 1.84 1.84 0 0 1 1.07-.8 2.5 2.5 0 0 1 1.4.06c1.21.4 2.41.85 3.58 1.36 12 5.23 23.82 10.93 35.46 16.94 2 1 3.89 2.21 5.78 3.4a2.46 2.46 0 0 1 .83 3 4.72 4.72 0 0 1-3.33 3.18c-2.73.62-5 2.09-7.32 3.48-4.39 2.63-8.84 5.14-13.17 7.86s-8.26 5.47-12.39 8.2a30.38 30.38 0 0 1-2.89 1.67 1.73 1.73 0 0 1-2-.9 1.63 1.63 0 0 1 .3-1.78 4.9 4.9 0 0 1 1-1c5-3.71 9.87-7.61 15.27-10.78 5.78-3.4 11.49-6.93 17.22-10.42a1.26 1.26 0 0 0 .34-.37z" />
          <path d="M50.56 26.27l-14.34.67c-8.78.43-17.58.33-26.35 1.2a71.31 71.31 0 0 1-7.19.13 4.34 4.34 0 0 1-1.84-.39 2 2 0 0 1-.77-1.1 1.51 1.51 0 0 1 .79-1.58 10.75 10.75 0 0 1 1.87-.35c7-.39 14-.79 21.06-1.14 6.07-.3 12.14-.46 18.2-.85 5.43-.34 10.84-.67 16.28-.67 5 0 9.91-.16 14.87-.26 3.52-.08 7-.3 10.54-.25 5.11.08 10.22.34 15.33.56a4 4 0 0 1 1.35.45 2.09 2.09 0 0 1 .82 2.09 1.58 1.58 0 0 1-1.22 1.32 10.85 10.85 0 0 1-2.37.17c-8.47-.59-16.94-.26-25.41-.23H50.6v.18z" />
        </svg>
      </div>
      <div className="border-t-2 border-gray-400 mt-6 pt-6 actor">
        <div className="text-center px-6">
          <img className="inline-block w-full" src={image} alt="" />
          <CharacterName>{name}</CharacterName>
        </div>
      </div>
      <div className="flex items-end justify-center flex-column  border-t-2 border-gray-400 mt-6 pt-6 relative char2">
        <div>
          <CharacterName>{second.title}</CharacterName>
          {secondCharacter && <CharacterImage link={secondCharacter.link} />}
          <CharacterName>{`${secondCharacter &&
            secondCharacter.name}`}</CharacterName>
        </div>
        <svg
          className="fill-current text-indigo-500 arrow-left absolute h-8 left-0 inset-y-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124.31 49.31"
        >
          <path d="M117.12 23.94a1.66 1.66 0 0 0-.35-.74c-2.64-1.49-5.27-3-8-4.38-8.29-4.14-16.61-8.22-24.93-12.3-2.15-1.06-4.35-2-6.5-3.07a3.55 3.55 0 0 1-1.37-1.26 1.62 1.62 0 0 1 0-1.35 1.84 1.84 0 0 1 1.07-.8 2.5 2.5 0 0 1 1.4.06c1.21.4 2.41.85 3.58 1.36 12 5.23 23.82 10.93 35.46 16.94 2 1 3.89 2.21 5.78 3.4a2.46 2.46 0 0 1 .83 3 4.72 4.72 0 0 1-3.33 3.18c-2.73.62-5 2.09-7.32 3.48-4.39 2.63-8.84 5.14-13.17 7.86s-8.26 5.47-12.39 8.2a30.38 30.38 0 0 1-2.89 1.67 1.73 1.73 0 0 1-2-.9 1.63 1.63 0 0 1 .3-1.78 4.9 4.9 0 0 1 1-1c5-3.71 9.87-7.61 15.27-10.78 5.78-3.4 11.49-6.93 17.22-10.42a1.26 1.26 0 0 0 .34-.37z" />
          <path d="M50.56 26.27l-14.34.67c-8.78.43-17.58.33-26.35 1.2a71.31 71.31 0 0 1-7.19.13 4.34 4.34 0 0 1-1.84-.39 2 2 0 0 1-.77-1.1 1.51 1.51 0 0 1 .79-1.58 10.75 10.75 0 0 1 1.87-.35c7-.39 14-.79 21.06-1.14 6.07-.3 12.14-.46 18.2-.85 5.43-.34 10.84-.67 16.28-.67 5 0 9.91-.16 14.87-.26 3.52-.08 7-.3 10.54-.25 5.11.08 10.22.34 15.33.56a4 4 0 0 1 1.35.45 2.09 2.09 0 0 1 .82 2.09 1.58 1.58 0 0 1-1.22 1.32 10.85 10.85 0 0 1-2.37.17c-8.47-.59-16.94-.26-25.41-.23H50.6v.18z" />
        </svg>
      </div>
    </div>
  )
}

export default OverlapResult
