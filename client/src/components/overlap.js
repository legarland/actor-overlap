import React, { useState } from 'react'
import styled from 'styled-components'
import ItemSearch from './item-search'
import GetOverlap from './overlap-results'
import OverlapResult from './overlap-result'
import MoviePoster from './movie-poster'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  width: 100%;
`
const PosterContainer = styled.div`
  padding: 20px;
`

const Padding = styled.div`
  padding: 0 30px;
  text-align: center;
`

const Movies = styled.div``

const ActorOverlap = () => {
  const [first, setFirst] = useState({
    title: 'Holes',
    id: 'tt0311289',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_.jpg'
  })
  const [second, setSecond] = useState({
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
      <Container>
        {/* <Inputs> */}
        <Padding>
          <ItemSearch key="first" onSelect={item => setFirst(item)} />
        </Padding>
        <GetOverlap
          onResults={results => setData(results)}
          first={first}
          second={second}
        />
        <Padding>
          <ItemSearch key="second" onSelect={item => setSecond(item)} />
        </Padding>
        {/* </Inputs> */}
        <PosterContainer>
          <MoviePoster url={first.image} />
        </PosterContainer>
        <div></div>
        <PosterContainer>
          <MoviePoster url={second.image} />
        </PosterContainer>
        {data.map(result => (
          <OverlapResult
            key={result.name}
            first={first}
            second={second}
            {...result}
          />
        ))}
      </Container>
    </>
  )
}

export default ActorOverlap
