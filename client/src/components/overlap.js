import React, { useState } from 'react'
import ReactGA from 'react-ga'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import ItemSearch from './item-search'
import GetOverlap from './overlap-results'
import OverlapResult from './overlap-result'
import MoviePoster from './movie-poster'
import Button from '../style/button'
import './overlap.css'
import MoviePlaceholder from './movie-placeholder'
import LoadingMessage from './loading-message'

ReactGA.initialize('UA-12696426-4')
ReactGA.pageview(window.location.pathname + window.location.search)

// AOS.init({ disable: 'mobile' })

const ActorOverlap = () => {
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)
  const [secondShouldClear, setSecondShouldClear] = useState(false)
  const [first, setFirst] = useState()
  //   {
  //   title: 'Holes',
  //   id: 'tt0311289',
  //   image:
  //     'https://m.media-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_.jpg'
  // })
  const [second, setSecond] = useState()
  //   {
  //   title: 'Transformers',
  //   id: 'tt0418279',
  //   image:
  //     'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
  // })
  const [data, setData] = useState([
    // {
    //   name: 'Shia LaBeouf',
    //   id: 'nm0479471',
    //   image:
    //     'https://m.media-amazon.com/images/M/MV5BMjFhNTM3NDItMDllNC00YzAyLThmY2QtYmViMjBjODJjODdiXkEyXkFqcGdeQXVyMDU5Njk5MQ@@._V1_UY209_CR4,0,140,209_AL_.jpg',
    //   characters: {
    //     tt0311289: {
    //       name: 'Stanley',
    //       link: '/title/tt0311289/characters/nm0479471?ref_=ttfc_fc_cl_t4'
    //     },
    //     tt0418279: {
    //       name: 'Sam Witwicky',
    //       link: '/title/tt0418279/characters/nm0479471?ref_=ttfc_fc_cl_t1'
    //     }
    //   }
    // },
    // {
    //   name: 'Jon Voight',
    //   id: 'nm0000685',
    //   image:
    //     'https://m.media-amazon.com/images/M/MV5BMTc2NTE3NDA3M15BMl5BanBnXkFtZTgwMDMyNTM1MjE@._V1_UY209_CR3,0,140,209_AL_.jpg',
    //   characters: {
    //     tt0311289: {
    //       name: 'Mr. Sir',
    //       link: '/title/tt0311289/characters/nm0000685?ref_=ttfc_fc_cl_t2'
    //     },
    //     tt0418279: {
    //       name: 'Defense Secretary John Keller',
    //       link: '/title/tt0418279/characters/nm0000685?ref_=ttfc_fc_cl_t7'
    //     }
    //   }
    // }
  ])

  const clearFirst = () => {
    setData([])
    setSearched(false)
    setFirst()
    setShouldClear(true)
  }

  const clear = () => {
    setData([])
    setSearched(false)
    setFirst()
    setSecond()
    setShouldClear(true)
    setSecondShouldClear(true)
  }

  const clearSecond = () => {
    setData([])
    setSearched(false)
    setSecond()
    setSecondShouldClear(true)
  }

  return (
    <>
      <div className="grid">
        <div className="px-8" id="movie1">
          <ItemSearch
            key="first"
            onSelect={item => setFirst(item)}
            valid={!!first}
            searched={searched}
            clear={shouldClear}
            onFocus={clearFirst}
          />
        </div>
        <div id="button" className={`${data.length && 'new-search'}`}>
          {!searched ? (
            <GetOverlap
              isLoading={isLoading => {
                setLoading(isLoading)
              }}
              onResults={results => {
                setSearched(true)
                setShouldClear(false)
                setSecondShouldClear(false)
                setData(results)
                setLoading(false)
              }}
              first={first}
              second={second}
              loading={loading}
            />
          ) : (
            <Button id="clear-button" onClick={clear}>
              Start New Search
            </Button>
          )}
        </div>
        <div className="px-8" id="movie2">
          <ItemSearch
            key="second"
            onSelect={item => setSecond(item)}
            valid={!!second}
            searched={searched}
            clear={secondShouldClear}
            onFocus={clearSecond}
          />
        </div>
      </div>
      <div className="poster-grid">
        <div className="pt-8 pb-4" id="movie1poster">
          {first ? <MoviePoster url={first.image} /> : <MoviePlaceholder />}
        </div>
        <div
          className="flex justify-center items-center text-white text-center"
          id="loader"
        >
          {loading && <LoadingMessage delay={4000} />}
          {!loading && searched && (
            <div style={{ margin: '1rem 0' }}>
              <div className="uppercase tracking-wide">search returned</div>
              <div className="text-5xl">{data.length}</div>
              <div className="uppercase tracking-wide">
                {data.length === 1 ? 'result' : 'results'}
              </div>
            </div>
          )}
        </div>
        <div className="pt-8 pb-4" id="movie2poster">
          {second ? <MoviePoster url={second.image} /> : <MoviePlaceholder />}
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
