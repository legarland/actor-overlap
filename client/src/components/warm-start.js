import React, { useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../config'

const WarmStart = () => {
  useEffect(() => {
    axios.get(`${apiUrl}/itemSearch?search=warmup`)
  }, [])

  return <div className="hidden" />
}

export default WarmStart
