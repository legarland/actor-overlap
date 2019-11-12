import React, { useState } from 'react'
import axios from 'axios'
import ReactGA from 'react-ga'
import { apiUrl } from '../config'
import Button from '../style/button'

const GetOverlap = ({
  first,
  second,
  onResults = () => {},
  isLoading = () => {}
}) => {
  const [loading, setLoading] = useState(false)

  const load = () => {
    ReactGA.pageview(
      `${window.location.pathname}?title1=${first.title}&title2=${second.title}`
    )
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
      loading={loading}
    >
      {loading ? 'Searching IMDB...' : 'Find Matches'}
    </Button>
  )
}

export default GetOverlap
