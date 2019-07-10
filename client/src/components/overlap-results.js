import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
