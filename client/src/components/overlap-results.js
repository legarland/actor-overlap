import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config'
import Button from '../style/button'

const GetOverlap = ({
  first = {
    title: 'Holes',
    id: 'tt0311289',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_.jpg'
  },
  second = {
    title: 'Transformers',
    id: 'tt0418279',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
  },
  onResults = () => {},
  isLoading = () => {}
}) => {
  const [loading, setLoading] = useState(false)

  const load = () => {
    setLoading(true)
    isLoading(true)
    axios
      .get(`${apiUrl}/getOverlap?ids=${first.id},${second.id}`)
      .then(result => {
        onResults(result.data.data)
        setLoading(false)
        isLoading(false)
      })
      .catch(err => {
        setLoading(false)
        isLoading(false)
        onResults([])
      })
  }

  return (
    <Button
      disabled={!first || !second || loading}
      type="button"
      onClick={load}
    >
      {loading ? 'Searching IMDB...' : 'Find Matches'}
    </Button>
  )
}

export default GetOverlap
