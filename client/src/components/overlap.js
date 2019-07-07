import React, { useState } from 'react'
import ItemSearch from './item-search'
import GetOverlap from './overlap-results'
import OverlapResult from './overlap-result'
import MoviePoster from './movie-poster'
import Button from '../style/button'
import CharacterName from '../style/character-name'
import './overlap.css'
import AniamtedReel from './animated-reel'

const ActorOverlap = () => {
  const [loading, setLoading] = useState(false)
  const [first, setFirst] = useState(
    {
      title: 'Holes',
      id: 'tt0311289',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_.jpg'
    })
  const [second, setSecond] = useState(
    {
      title: 'Transformers',
      id: 'tt0418279',
      image:
        'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    })
  const [data, setData] = useState([
    {
      name: 'Shia LaBeouf',
      id: 'nm0479471',
      image:
        'https://m.media-amazon.com/images/M/MV5BMjFhNTM3NDItMDllNC00YzAyLThmY2QtYmViMjBjODJjODdiXkEyXkFqcGdeQXVyMDU5Njk5MQ@@._V1_UY209_CR4,0,140,209_AL_.jpg',
      characters: {
        tt0311289: {
          name: 'Stanley',
          link: '/title/tt0311289/characters/nm0479471?ref_=ttfc_fc_cl_t4'
        },
        tt0418279: {
          name: 'Sam Witwicky',
          link: '/title/tt0418279/characters/nm0479471?ref_=ttfc_fc_cl_t1'
        }
      }
    },
    {
      name: 'Jon Voight',
      id: 'nm0000685',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTc2NTE3NDA3M15BMl5BanBnXkFtZTgwMDMyNTM1MjE@._V1_UY209_CR3,0,140,209_AL_.jpg',
      characters: {
        tt0311289: {
          name: 'Mr. Sir',
          link: '/title/tt0311289/characters/nm0000685?ref_=ttfc_fc_cl_t2'
        },
        tt0418279: {
          name: 'Defense Secretary John Keller',
          link: '/title/tt0418279/characters/nm0000685?ref_=ttfc_fc_cl_t7'
        }
      }
    }
  ])

  return (
    <>
      <div className="grid">
        <div className="px-8" id="movie1">
          {!data.length && (
            <ItemSearch key="first" onSelect={item => setFirst(item)} />
          )}
        </div>
        <div id="button" className={`${data.length && 'new-search'}`}>
          {!data.length ? (
            <GetOverlap
              isLoading={isLoading => setLoading(isLoading)}
              onResults={results => {
                setData(results)
                setLoading(false)
              }}
              first={first}
              second={second}
            />
          ) : (
              <Button
                id="clear-button"
                onClick={() => {
                  setData([])
                  setFirst()
                  setSecond()
                }}
              >
                Start New Search
          </Button>
            )}
        </div>
        <div className="px-8" id="movie2">
          {!data.length && (
            <ItemSearch key="second" onSelect={item => setSecond(item)} />
          )}
        </div>
      </div>
      <div class="poster-grid">
        <div className="py-6" id="movie1poster">
          {first && (
            <>
              <CharacterName>{first.title}</CharacterName>
              <MoviePoster url={first.image} />
            </>
          )}
        </div>
        <div className="flex justify-center items-center" id="loader">
          {loading && <AniamtedReel />}
        </div>
        <div className="py-6" id="movie2poster">
          {second && (
            <>
              <CharacterName>{second.title}</CharacterName>
              <MoviePoster url={second.image} />
            </>
          )}
        </div>
      </div>
      {data.map(result => (
        <OverlapResult
          key={result.name}
          first={first}
          second={second}
          {...result}
        />
      ))}
    </>
  )
}

export default ActorOverlap
